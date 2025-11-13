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

const WeatherWidget = () => {
  const [location, setLocation] = useState<LocationData | null>(null);
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  // Converter direção do vento para cardinal (N, NE, L, etc)
  const getWindDirection = (deg: number) => {
    const directions = [
      "N", "NNE", "NE", "ENE",
      "L", "ESE", "SE", "SSE",
      "S", "SSO", "SO", "OSO",
      "O", "ONO", "NO", "NNO"
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
    if (code <= 3) return "⛅";
    if (code <= 55) return "🌧️";
    if (code <= 65) return "🌧️";
    if (code <= 75) return "❄️";
    if (code <= 95) return "⛈️";
    return night ?  "🌙" : "🌦️";
  };

  // Buscar localização via IP
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();

        if (data.success) {
          setLocation({
            city: data.city,
            latitude: data.latitude,
            longitude: data.longitude,
          });
        }
      } catch (err) {
        console.error("Erro ao localizar usuário:", err);
      }
    };

    fetchLocation();
  }, []);

  // Buscar dados do clima com Open-Meteo
  useEffect(() => {
    if (!location) return;

    const fetchWeather = async () => {
      try {
        const { latitude, longitude } = location;

        const url = `
          https://api.open-meteo.com/v1/forecast
          ?latitude=${latitude}
          &longitude=${longitude}
          &current_weather=true
          &daily=temperature_2m_max,temperature_2m_min
          &timezone=auto
        `.replace(/\s+/g, "");

        const res = await fetch(url);
        const data = await res.json();

        setWeather({
          temp: data.current_weather.temperature,
          windspeed: data.current_weather.windspeed,
          winddirection: data.current_weather.winddirection,
          weathercode: data.current_weather.weathercode,
          tempMin: data.daily.temperature_2m_min[0],
          tempMax: data.daily.temperature_2m_max[0],
        });
      } catch (err) {
        console.error("Erro ao buscar clima:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [location]);

  if (loading) {
    return <div className="text-sm text-muted-foreground">Carregando clima...</div>;
  }

  if (!location || !weather) {
    return (
      <div className="text-sm text-red-500">
        Não foi possível carregar o clima.
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3 text-sm">

      <span className="text-xl">{getWeatherIcon(weather.weathercode)}</span>

      <div className="flex flex-col leading-tight">
        <span className="font-semibold">{location.city}</span>

        <div className="text-muted-foreground text-xs">
          <span>Agora: {weather.temp}°C • </span>
          <span>Máx: <span className="text-red-500">{weather.tempMax}°C</span> • </span>
          <span>Mín: <span className="text-blue-500">{weather.tempMin}°C</span></span>
        </div>

        <div className="text-muted-foreground text-xs">
          Vento: {weather.windspeed} km/h ({getWindDirection(weather.winddirection)})
        </div>
      </div>

    </div>
  );
};

export default WeatherWidget;
