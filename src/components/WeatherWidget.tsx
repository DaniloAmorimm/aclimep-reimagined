import { useEffect, useState } from "react";

interface WeatherData {
  temperature: number;
  windspeed: number;
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

  // Converte código do Open-Meteo para um emoji simples
  const getWeatherIcon = (code: number) => {
    if (code === 0) return "☀️"; // limpo
    if (code <= 3) return "⛅"; // nublado leve
    if (code <= 55) return "🌧️"; // chuva
    if (code <= 65) return "🌧️"; // chuva moderada
    if (code <= 75) return "❄️"; // neve
    if (code <= 95) return "⛈️"; // tempestade
    return "🌤️";
  };

  // 1. Buscar localização por IP
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const res = await fetch("https://ipwho.is/");
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

  // 2. Buscar clima com Open-Meteo
  useEffect(() => {
    if (!location) return;

    const fetchWeather = async () => {
      try {
        const { latitude, longitude } = location;

        const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&timezone=auto`;

        const res = await fetch(url);
        const data = await res.json();

        setWeather({
          temperature: data.current_weather.temperature,
          windspeed: data.current_weather.windspeed,
          weathercode: data.current_weather.weathercode,
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
    <div className="flex items-center gap-2 text-sm">
      <span className="text-lg">{getWeatherIcon(weather.weathercode)}</span>

      <div className="flex flex-col leading-none">
        <span className="font-semibold">{location.city}</span>
        <span className="text-muted-foreground">
          {weather.temperature}°C — {weather.windspeed} km/h
        </span>
      </div>
    </div>
  );
};

export default WeatherWidget;