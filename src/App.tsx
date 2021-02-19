import React, { useEffect, useState } from "react";
import Weather from "./components/Wheather";
import "./App.css";

function App() {
  const [position, setPosition] = useState<{} | null>(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      /* la géolocalisation est disponible */
      navigator.geolocation.getCurrentPosition(function (position) {
        setPosition(position);
      });
    }
  }, []);

  return position ? <Weather position={position} /> : null;
}

export default App;
