import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting, contactPageData } from "../../portfolio";
import { Fade } from "react-reveal";

const ContactData = contactPageData.contactSection;

export default function Greeting(props) {
  const theme = props.theme;

  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text">{greeting.title}</h1>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                <span>I'm </span>
                <span style={{ color: theme.accentColor }}>
                  {greeting.full_name}.{" "}
                </span>
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="portfolio-repo-btn-div">
                <a
                  href={greeting.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button resume-button"
                  style={{
                    backgroundColor: theme.accentColor,
                    color: theme.text,
                    textDecoration: "none",
                    display: "inline-block",
                  }}
                >
                  View Resume
                </a>
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <div>
              <img
                className="profile-pic"
                src={require(`../../assests/images/${ContactData["profile_image_path"]}`)}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
