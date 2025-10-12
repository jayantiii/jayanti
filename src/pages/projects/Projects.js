import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { Fade } from "react-reveal";
import { projects } from "../../portfolio.js";
import "./Projects.css";
import { style } from "glamor";

function Projects(props) {
  const theme = props.theme;
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Full-Stack", "ML & AI", "IoT & Embedded"];

  const filteredProjects =
    selectedCategory === "All"
      ? projects.data
      : projects.data.filter(
          (project) => project.category === selectedCategory
        );

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
  });

  const filterButtonStyles = style({
    backgroundColor: theme.accentBright,
    color: theme.text,
    border: `2px solid ${theme.accentBright}`,
    padding: "10px 20px",
    margin: "5px",
    borderRadius: "25px",
    cursor: "pointer",
  });

  const activeFilterButtonStyles = style({
    backgroundColor: "transparent",
    color: theme.accentBright,
    border: `2px solid ${theme.accentBright}`,
    padding: "10px 20px",
    margin: "5px",
    borderRadius: "25px",
    cursor: "pointer",
  });

  return (
    <div className="projects-main">
      <Header theme={theme} setTheme={props.setTheme} />

      {/* Filter Buttons */}
      <Fade bottom duration={2000} distance="40px">
        <div
          className="filter-buttons-container"
          style={{ textAlign: "center", marginBottom: "30px" }}
        >
          {categories.map((category) => (
            <button
              key={category}
              {...(selectedCategory === category
                ? activeFilterButtonStyles
                : filterButtonStyles)}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </Fade>
      <div className="repo-cards-div-main">
        {filteredProjects.map((repo, index) => {
          return (
            <ProjectCard repo={repo} theme={theme} key={repo.id || index} />
          );
        })}
      </div>
      <br />
      <br />
      <br />
      <a
        {...styles}
        className="general-btn"
        href="https://github.com/jayantiii"
      >
        More Projects (Github)
      </a>
      <br />
      <br />
      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}

export default Projects;
