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
const CACHE_TIME = 15 * 60 * 1000; // 15 minutos

const WeatherWidget = () => {
  const [location, setLocation] = useState<LocationData | null>(null);
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Converter direção do vento para cardinal (N, NE, L, etc)
  const getWindDirection = (deg: number) => {
    const directions = [
      "N", "NNE", "NE", "ENE",
      "L", "ESE", "SE", "SSE",
      "S", "SSO", "SO", "OSO",
      "O", "ONO", "NO", "NNO",
    ];
    return directions[Math.round(deg / 22.5) % 16];
  };
const isNight = () => {
  const hour = new Date().getHours();
  return hour < 6 || hour >= 18; // noite
   };
  // Converter o código do clima do Open-Meteo para um ícone
  const getWeatherIcon = (code: number) => {
    const night = isNight();
    if (code === 0) return night ?  "🌙" : "☀️";
    if (code <= 3) return night ?  "🌙" :"⛅";
    if (code <= 55) return "🌧️";
    if (code <= 65) return "🌧️";
    if (code <= 75) return "❄️";
    if (code <= 95) return "⛈️";
    return night ?  "🌙" : "🌦️";
  };

  // ---- 1) Carregar cache do localStorage
  useEffect(() => {
    const cached = localStorage.getItem(CACHE_KEY);

    if (cached) {
      const data: CachedWeather = JSON.parse(cached);

      const isValid = Date.now() - data.timestamp < CACHE_TIME;

      if (isValid) {
        setLocation(data.location);
        setWeather(data.weather);
        setLoading(false);
        //return; // evita requisições desnecessárias
      }
    }
  }, []);

  // ---- 2) Buscar localização via IP caso não tenha cache
  useEffect(() => {
    if (location) return;

    const getLocation = async () => {
      try {
        const res = await fetch("https://ipwho.is/");
        const data = await res.json();
        console.log("IPWHO DATA →", data);

        if (data.success !== false && data.city) {
          setLocation({
            city: data.city,
            latitude: data.latitude,
            longitude: data.longitude,
          });
          return;
        }

        // fallback: geolocalização do navegador
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            setLocation({
              city: "Sua região",
              latitude: pos.coords.latitude,
              longitude: pos.coords.longitude,
            });
            console.log("GEOLOCATION →", pos.coords);
          },
          () => {
            setError(true);
            setLoading(false);
          }
        );

      } catch (err) {
        console.error("Erro ao localizar:", err);
        setError(true);
        setLoading(false);
      }
    };

    getLocation();
  }, [location]);

  // Buscar dados do clima com Open-Meteo
  useEffect(() => {
    if (!location) return;

    const fetchWeather = async () => {
      try {
        const { latitude, longitude } = location;

        const url = `
          https://api.open-meteo.com/v1/forecast
          ?latitude=${location.latitude}
          &longitude=${location.longitude}
          &current_weather=true
          &daily=temperature_2m_max,temperature_2m_min
          &timezone=auto
        `.replace(/\s+/g, "");
         console.log("OPEN-METEO URL →", url);

        const res = await fetch(url);
        const data = await res.json();
        console.log("WEATHER API RESULT →", data);


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
          tempMax: data.daily.temperature_2m_max[0],
        };

        setWeather(newWeather);

        // ---- salvar cache

        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({
            location,
            weather: newWeather,
            timestamp: Date.now(),
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

  // ---- 4) Renderização
  if (loading) {
    return <div className="text-sm text-muted-foreground">Carregando clima...</div>;
  }

    return <div className="text-sm text-red-500">Não foi possível carregar o clima.</div>;

  return (
    <div className="flex items-center gap-3 text-sm">

      <span className="text-xl">{getWeatherIcon(weather.weathercode)}</span>

      <div className="flex flex-col leading-tight">
        <span className="font-semibold">{location.city}</span>

        <div className="text-muted-foreground text-xs">
          Agora: {weather.temp}°C •{" "}
          Máx: <span className="text-red-500">{weather.tempMax}°C</span> •{" "}
          Mín: <span className="text-blue-500">{weather.tempMin}°C</span>
        </div>

        <div className="text-muted-foreground text-xs">
          Vento: {weather.windspeed} km/h ({getWindDirection(weather.winddirection)})
        </div>
      </div>

    </div>
  );
};

export default WeatherWidget;
