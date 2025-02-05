import Weathers from "./weather";
import React from "react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello student</h1>
        <Weathers city="Tokyo"/>
      </header>
    </div>
  );
}

export default App;
