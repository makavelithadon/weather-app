import React, { useEffect, useState } from "react";
import { createGlobalStyle } from "styled-components";
import Weather from "./components/Wheather";
import "./App.css";

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    min-height: 100%;
    background-color: #000;
    font-family: "Manrope";
  }
`;

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

  return (
    <>
      <GlobalStyle />
      {position && <Weather position={position} />}
    </>
  );
}

export default App;
