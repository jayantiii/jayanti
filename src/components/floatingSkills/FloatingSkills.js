import React, { useEffect, useState } from "react";
import "./FloatingSkills.css";

function FloatingSkills({ skills, theme }) {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Extract all skill names from both skill categories
    const allSkills = [];
    skills.data.forEach((category) => {
      category.softwareSkills.forEach((skill) => {
        allSkills.push(skill.skillName);
      });
    });

    // Add additional software engineering related terms
    const additionalSkills = [
      "Software Engineering",
      "Full-Stack Development",
      "Cloud Computing",
      "DevOps",
      "API Development",
      "Database Design",
      "System Architecture",
      "Code Review",
      "Version Control",
      "Agile Development",
      "Testing",
      "Performance Optimization",
      "Security",
      "Microservices",
      "CI/CD",
    ];

    const combinedSkills = [...allSkills, ...additionalSkills];

    // Create particles with better spacing to avoid clashes
    const newParticles = [];
    const gridSize = 8; // 8x8 grid for better spacing
    const cellWidth = 100 / gridSize;
    const cellHeight = 100 / gridSize;

    // Shuffle skills array for random distribution
    const shuffledSkills = [...combinedSkills].sort(() => Math.random() - 0.5);

    // Take 25 skills for more dynamic effect
    const selectedSkills = shuffledSkills.slice(0, 25);

    selectedSkills.forEach((skillName, index) => {
      const gridX = index % gridSize;
      const gridY = Math.floor(index / gridSize);

      // More controlled positioning to avoid center area where title is
      let x, y;

      // Force positioning to edges only - completely avoid center
      if (gridX <= 2) {
        // Left edge (0-2)
        x =
          gridX * cellWidth + Math.random() * cellWidth * 0.6 + cellWidth * 0.2;
        y =
          gridY * cellHeight +
          Math.random() * cellHeight * 0.8 +
          cellHeight * 0.1;
      } else if (gridX >= 5) {
        // Right edge (5-7)
        x =
          gridX * cellWidth + Math.random() * cellWidth * 0.6 + cellWidth * 0.2;
        y =
          gridY * cellHeight +
          Math.random() * cellHeight * 0.8 +
          cellHeight * 0.1;
      } else {
        // Center columns (3-4) - only top and bottom
        if (gridY <= 1) {
          // Top area only
          x =
            gridX * cellWidth +
            Math.random() * cellWidth * 0.6 +
            cellWidth * 0.2;
          y =
            gridY * cellHeight +
            Math.random() * cellHeight * 0.3 +
            cellHeight * 0.1;
        } else {
          // Bottom area only
          x =
            gridX * cellWidth +
            Math.random() * cellWidth * 0.6 +
            cellWidth * 0.2;
          y =
            gridY * cellHeight +
            Math.random() * cellHeight * 0.3 +
            cellHeight * 0.7;
        }
      }

      newParticles.push({
        id: index,
        name: skillName,
        x: Math.max(5, Math.min(95, x)), // Keep within bounds
        y: Math.max(5, Math.min(95, y)), // Keep within bounds
        delay: Math.random() * 2, // Faster delay (0-2 seconds)
        duration: 6 + Math.random() * 3, // Faster duration (6-9 seconds)
        size: 0.8 + Math.random() * 0.3, // Size variation (0.8-1.1)
        animationType: ["float", "drift", "bounce", "fade"][
          Math.floor(Math.random() * 4)
        ], // 4 different animation types
      });
    });

    setParticles(newParticles);
  }, [skills]);

  return (
    <div className="floating-skills-container">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`floating-skill-particle ${particle.animationType}`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            transform: `scale(${particle.size})`,
            color: theme.text,
            opacity: 0.1 + Math.random() * 0.15, // Random opacity (0.1-0.25)
          }}
        >
          {particle.name}
        </div>
      ))}
    </div>
  );
}

export default FloatingSkills;
