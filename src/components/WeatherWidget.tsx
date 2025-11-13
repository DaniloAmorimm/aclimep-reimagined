import { useEffect, useState } from "react";

interface WeatherData {
  city: string;
  max: number;
  min: number;
  icon: string;
}

export default function WeatherWidget() {
  const [data, setData] = useState<WeatherData | null>(null);

  useEffect(() => {
    async function load() {
      try {
        // 1) Detectar localização via IPWHO.IS
        const ipRes = await fetch("https://ipwho.is/");
        const ipData = await ipRes.json();

        if (!ipData.success) return;

        const city: string = ipData.city;
        const lat: number = ipData.latitude;
        const lon: number = ipData.longitude;

        // 2) Buscar previsão do tempo no OpenWeather
        const apiKey = "SUA_API_KEY_AQUI"; // coloque sua chave
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=pt_br&appid=${apiKey}`;

        const weatherRes = await fetch(url);
        const weatherData = await weatherRes.json();

        const max = Math.round(weatherData.main.temp_max);
        const min = Math.round(weatherData.main.temp_min);
        const icon = weatherData.weather[0].icon;

        setData({ city, max, min, icon });
      } catch (err) {
        console.error("Erro ao carregar clima:", err);
      }
    }

    load();
  }, []);

  if (!data) return null;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <img
        src={`https://openweathermap.org/img/wn/${data.icon}.png`}
        width={32}
        alt="Ícone do clima"
      />
      <div>
        <strong>{data.city}</strong>
        <br />
        <span style={{ color: "red" }}>{data.max}°C</span>
        <span style={{ color: "blue", marginLeft: "10px" }}>{data.min}°C</span>
      </div>
    </div>
  );
}
