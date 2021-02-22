import React from "react";
import { useWheather } from "./hooks";
import { Current } from "./components/Current";

const API_KEY = "dd7458bb7e64a45ac95fe85ea992d746";

export default function Weather({ position }: { position: any }) {
  const weather = useWheather(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&lang=fr&units=metric&appid=${API_KEY}`
  );
  return (
    <div>
      {weather?.weather?.current && (
        <Current weather={weather.weather.current} />
      )}
    </div>
  );
}
