import { useEffect, useState } from "react";

interface WeatherData {
  temp: number;
  tempMin: number;
  tempMax: number;
  windspeed: number;
  winddirection: number;
  weathercode: number;
}

interface LocationData {
  city: string;
  latitude: number;
  longitude: number;
}

interface CachedWeather {
  location: LocationData;
  weather: WeatherData;
  timestamp: number;
}

const CACHE_KEY = "weather_widget_cache";
const CACHE_TIME = 15 * 60 * 1000; // 15 min

const WeatherWidget = () => {
  const [location, setLocation] = useState<LocationData | null>(null);
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Direção do vento PT-BR
  const getWindDirection = (deg: number) => {
    const dirs = [
      "N", "NNE", "NE", "ENE",
      "L", "ESE", "SE", "SSE",
      "S", "SSO", "SO", "OSO",
      "O", "ONO", "NO", "NNO"
    ];
    return dirs[Math.round(deg / 22.5) % 16];
  };

  const isNight = () => {
    const h = new Date().getHours();
    return h < 6 || h >= 18;
  };

  const getWeatherIcon = (code: number) => {
    const night = isNight();
    if (code === 0) return night ? "🌙" : "☀️";
    if (code <= 3) return night ? "🌙" : "⛅";
    if (code <= 55) return "🌧️";
    if (code <= 65) return "🌧️";
    if (code <= 75) return "❄️";
    if (code <= 95) return "⛈️";
    return night ? "🌙" : "🌦️";
  };

  // Reverse geocode → converter coordenadas em cidade
  const getCityName = async (lat: number, lon: number) => {
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
      );

      const data = await res.json();

      return (
        data.address.city ||
        data.address.town ||
        data.address.village ||
        data.address.suburb ||
        "Sua região"
      );
    } catch (e) {
      return "Sua região";
    }
  };

  // 1 — Carregar CACHE
  useEffect(() => {
    const saved = localStorage.getItem(CACHE_KEY);
    if (!saved) return;

    const cache: CachedWeather = JSON.parse(saved);
    const valid = Date.now() - cache.timestamp < CACHE_TIME;

    if (valid) {
      setLocation(cache.location);
      setWeather(cache.weather);
      setLoading(false);
    }
  }, []);

  // 2 — Buscar localização via IPAPI + reverse geocode
  useEffect(() => {
    if (location) return;

    const fetchLocation = async () => {
      try {
        let latitude: number | null = null;
        let longitude: number | null = null;

        // 1 — GeoIP (igual UOL)
        try {
          const res = await fetch("https://ipapi.co/json/");
          const data = await res.json();

          if (data && data.latitude && data.longitude) {
            latitude = data.latitude;
            longitude = data.longitude;
            console.log("🌎 GeoIP detectado:", latitude, longitude);
          }
        } catch (_) {}

        // 2 — Fallback: GPS do navegador
        if (!latitude || !longitude) {
          console.log("📍 Usando GPS do navegador");

          await new Promise<void>((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
              (pos) => {
                latitude = pos.coords.latitude;
                longitude = pos.coords.longitude;
                resolve();
              },
              () => reject()
            );
          });
        }

        if (!latitude || !longitude) throw new Error("Sem localização");

        // 3 — Reverse geocode (pegar nome da cidade)
        const city = await getCityName(latitude, longitude);

        setLocation({
          city,
          latitude,
          longitude
        });
      } catch (e) {
        console.error("Erro ao localizar:", e);
        setError(true);
        setLoading(false);
      }
    };

    fetchLocation();
  }, [location]);

  // 3 — Buscar clima
  useEffect(() => {
    if (!location) return;

    const fetchWeather = async () => {
      try {
        const url = `
          https://api.open-meteo.com/v1/forecast
          ?latitude=${location.latitude}
          &longitude=${location.longitude}
          &current_weather=true
          &daily=temperature_2m_max,temperature_2m_min
          &timezone=auto
        `.replace(/\s+/g, "");

        const res = await fetch(url);
        const data = await res.json();

        if (!data.current_weather) {
          setError(true);
          setLoading(false);
          return;
        }

        const newWeather: WeatherData = {
          temp: data.current_weather.temperature,
          windspeed: data.current_weather.windspeed,
          winddirection: data.current_weather.winddirection,
          weathercode: data.current_weather.weathercode,
          tempMin: data.daily.temperature_2m_min[0],
          tempMax: data.daily.temperature_2m_max[0]
        };

        setWeather(newWeather);

        // Salvar cache
        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({
            location,
            weather: newWeather,
            timestamp: Date.now()
          })
        );
      } catch (e) {
        console.error("Erro ao buscar clima:", e);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [location]);

  // UI
  if (loading) {
    return <div className="text-sm text-muted-foreground">Carregando clima...</div>;
  }

  if (error || !location || !weather) {
    return <div className="text-sm text-red-500">Não foi possível carregar o clima.</div>;
  }

  return (
    <div className="flex items-center gap-3 text-sm">
      <span className="text-xl">{getWeatherIcon(weather.weathercode)}</span>

      <div className="flex flex-col leading-tight">
        <span className="font-semibold">{location.city}</span>

        <div className="text-muted-foreground text-xs">
          Agora: {weather.temp}°C •{" "}
          Máx: <span className="text-red-500">{weather.tempMax}°C</span> •{" "}
          Mín: <span className="text-blue
