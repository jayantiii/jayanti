import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";

export default function socialMedia() {
  return (
    <div className="social-media-div">
      <a
        href={socialMediaLinks.github}
        className="icon-button github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github"></i>
        <span></span>
      </a>
      {/* <a
        href={socialMediaLinks.gitlab}
        className="icon-button gitlab"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-gitlab"></i>
        <span></span>
      </a> */}
      <a
        href={socialMediaLinks.linkedin}
        className="icon-button linkedin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin-in"></i>
        <span></span>
      </a>
      <a
        href="mailto:jlahoti@ucsd.edu"
        className="icon-button google"
        title="Send email to jlahoti@ucsd.edu"
        onClick={(e) => {
          e.preventDefault();
          // Show options to user
          const choice = window.confirm(
            "Choose email option:\n\nOK = Copy email to clipboard\nCancel = Open Gmail in browser"
          );

          if (choice) {
            // Copy to clipboard
            navigator.clipboard
              .writeText("jlahoti@ucsd.edu")
              .then(() => {
                alert("Email copied to clipboard: jlahoti@ucsd.edu");
              })
              .catch(() => {
                alert("Email: jlahoti@ucsd.edu");
              });
          } else {
            // Open Gmail
            window.open(
              "https://mail.google.com/mail/?view=cm&fs=1&to=jlahoti@ucsd.edu&su=Hello from Portfolio&body=Hi Jayanti,",
              "_blank"
            );
          }
        }}
      >
        <i className="fas fa-envelope"></i>
        <span></span>
      </a>
    </div>
  );
}
