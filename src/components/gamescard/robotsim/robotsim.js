import React, { useState, useEffect } from "react";
import "./robotsim.css";

export default function RobotSimulator() {
  const gridSize = 5; // 5x5 grid
  const [position, setPosition] = useState({ x: 2, y: 2 });
  const [goal, setGoal] = useState({
    x: Math.floor(Math.random() * gridSize),
    y: Math.floor(Math.random() * gridSize),
  });

  // Move robot with arrow keys
  useEffect(() => {
    const handleKeyDown = (e) => {
      setPosition((prev) => {
        let { x, y } = prev;
        if (e.key === "ArrowUp" && y > 0) y--;
        if (e.key === "ArrowDown" && y < gridSize - 1) y++;
        if (e.key === "ArrowLeft" && x > 0) x--;
        if (e.key === "ArrowRight" && x < gridSize - 1) x++;
        return { x, y };
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [gridSize]);

  // Check if robot reaches goal
  useEffect(() => {
    if (position.x === goal.x && position.y === goal.y) {
      // Pick a new random goal
      setGoal({
        x: Math.floor(Math.random() * gridSize),
        y: Math.floor(Math.random() * gridSize),
      });
    }
  }, [position, goal, gridSize]);

  return (
    <div className="robot-sim-container">
      <h2>
        <span role="img" aria-label="robot" className="pixel-font">
          {" "}
          MINI GAME
        </span>
      </h2>
      <p>Use arrow keys to move the robot to the goal.</p>

      <div className="grid">
        {Array.from({ length: gridSize }).map((_, row) => (
          <div key={row} className="row">
            {Array.from({ length: gridSize }).map((_, col) => (
              <div
                key={col}
                className={`cell ${
                  position.x === col && position.y === row ? "robot" : ""
                } ${goal.x === col && goal.y === row ? "goal" : ""}`}
              >
                {position.x === col && position.y === row && (
                  <span role="img" aria-label="robot">
                    🤖
                  </span>
                )}
                {goal.x === col && goal.y === row && (
                  <span role="img" aria-label="goal">
                    🎯
                  </span>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      <p className="status">
        <span role="img" aria-label="joystick">
          🎮
        </span>{" "}
        Position: ({position.x}, {position.y})
      </p>
    </div>
  );
}
