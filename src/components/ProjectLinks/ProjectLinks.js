import React from "react";
import "./ProjectLinks.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

function ProjectLinks(props) {
  const logos = props.logos || [];

  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons-languages">
          {logos.map((logo) => {
            return (
              <OverlayTrigger
                key={logo.name}
                placement={"top"}
                overlay={
                  <Tooltip id={`tooltip-top`}>
                    <strong>{logo.name}</strong>
                  </Tooltip>
                }
              >
                <li
                  className="software-skill-inline-languages"
                  name={logo.skillName}
                  onClick={() => openRepoinNewTab(logo.url)}
                >
                  <span
                    className="iconify"
                    data-icon={logo.iconifyClass}
                    data-inline="false"
                  ></span>
                </li>
              </OverlayTrigger>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ProjectLinks;
