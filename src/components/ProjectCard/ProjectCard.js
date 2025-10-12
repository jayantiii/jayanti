import React from "react";
import ProjectLanguages from "../projectLanguages/ProjectLanguages";
import ProjectLinks from "../ProjectLinks/ProjectLinks";
import "./ProjectCard.css";
import { style } from "glamor";

export default function ProjectCard({ repo, theme }) {
  const styles = style({
    color: "rgb(88, 96, 105)",
    backgroundColor: "rgb(255, 255, 255)",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 30px -15px",
    padding: "2rem",
    borderRadius: "5px",
    height: "100%",
    position: "relative",
    overflow: "hidden",
  });

  return (
    <div {...styles} style={{ backgroundColor: theme.projectCard }}>
      {/* Your existing content */}
      <div className="repo-name-div">
        <p className="repo-name" style={{ color: theme.text }}>
          {repo.name}
        </p>
      </div>
      <p className="repo-description" style={{ color: theme.text }}>
        {repo.description}
      </p>
      <div className="flexDiv">
        <div className="repo-details Leftitem">
          <ProjectLanguages logos={repo.languages} />
        </div>
        <div className="repo-details Rightitem">
          <ProjectLinks logos={repo.links} />
        </div>
      </div>
    </div>
  );
}
