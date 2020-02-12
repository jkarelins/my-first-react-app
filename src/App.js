import React from "react";
import "./App.css";
import Title from "./components/Title";
import Scoreboard from "./components/scoreboard/Scoreboard";

function App() {
  return (
    <div className="App">
      <Title content="WoW wOw Scoreboard!" />
      <Scoreboard></Scoreboard>
    </div>
  );
}

export default App;
