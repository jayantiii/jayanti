import React from "react";
import { motion } from "framer-motion";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting, contactPageData } from "../../portfolio";

const ContactData = contactPageData.contactSection;

export default function Greeting(props) {
  const theme = props.theme;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      className="greet-main"
      id="greeting"
    >
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
    </motion.div>
  );
}
