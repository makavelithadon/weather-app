import React from "react";
import { useWheather } from "./hooks";

const API_KEY = "dd7458bb7e64a45ac95fe85ea992d746";

export default function Weather({ position }: { position: any }) {
  const weathers = useWheather(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&exclude={part}&appid=${API_KEY}`
  );
  console.log({ weathers });
  return <div>Test</div>;
}
