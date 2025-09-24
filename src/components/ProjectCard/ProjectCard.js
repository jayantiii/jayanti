import React, { useState } from "react";
import ProjectLanguages from "../projectLanguages/ProjectLanguages";
import ProjectLinks from "../ProjectLinks/ProjectLinks";
import "./ProjectCard.css";
import { Fade } from "react-reveal";
import { style } from "glamor";
import Slider from "react-slick";

export default function ProjectCard({ repo, theme }) {
  const [hovered, setHovered] = useState(false);

  const styles = style({
    color: "rgb(88, 96, 105)",
    backgroundColor: "rgb(255, 255, 255)",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 30px -15px",
    padding: "2rem",
    cursor: "pointer",
    borderRadius: "5px",
    height: "100%",
    transition: "all 0.2s ease-in-out",
    position: "relative",
    overflow: "hidden",
    ":hover": {
      boxShadow: `${theme.imageDark} 0 2px 15px`,
    },
  });

  const sliderSettings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <Fade bottom duration={2000} distance="40px">
        <div
          {...styles}
          style={{ backgroundColor: theme.projectCard }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Hover Overlay */}
          {hovered && (
            <div className="hover-overlay">
              {repo.images && repo.images.length > 0 && (
                <Slider {...sliderSettings}>
                  {repo.images.map((imgName, idx) => (
                    <img
                      key={idx}
                      src={require(`../../assests/images/${imgName}`)}
                      alt={`${repo.name} screenshot`}
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        objectFit: "contain",
                        borderRadius: "6px",
                      }}
                    />
                  ))}
                </Slider>
              )}

              {repo.video && (
                <video
                  src={repo.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="video-preview"
                />
              )}
            </div>
          )}

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
      </Fade>
    </div>
  );
}
