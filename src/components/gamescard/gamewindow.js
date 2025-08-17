import React, { useState } from "react";
import RobotSimulator from "./RobotSimulator";
import TypingGame from "./TypingGame";
import MemoryGame from "./MemoryGame";
import "./GameWindow.css";

export default function GameWindow() {
  const [activeGame, setActiveGame] = useState("robot");

  const renderGame = () => {
    switch (activeGame) {
      case "robot":
        return <RobotSimulator />;
      case "typing":
        return <TypingGame />;
      case "memory":
        return <MemoryGame />;
      default:
        return <RobotSimulator />;
    }
  };

  return (
    <div className="game-window">
      <div className="game-tabs">
        <button
          className={activeGame === "robot" ? "active" : ""}
          onClick={() => setActiveGame("robot")}
        >
          🤖 Robot
        </button>
        <button
          className={activeGame === "typing" ? "active" : ""}
          onClick={() => setActiveGame("typing")}
        >
          ⌨️ Typing
        </button>
        <button
          className={activeGame === "memory" ? "active" : ""}
          onClick={() => setActiveGame("memory")}
        >
          🎴 Memory
        </button>
      </div>
      <div className="game-content">{renderGame()}</div>
    </div>
  );
}
