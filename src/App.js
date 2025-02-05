import Weathers from "./weather";
import React from "react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 class="text-danger">Weather Search☁</h1>
        <Weathers city="Tokyo"/>
      </header>
      <p>This project is <a href="https://github.com/Whitney-Murugi/react-weather-app"> one-sourced in Github</a>  and <a href="https://singular-melomakarona-d9c979.netlify.app/">hosted on Netlify </a> </p>
    </div>
  );
}

export default App;
