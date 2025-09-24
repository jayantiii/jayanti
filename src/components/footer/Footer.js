import React, { useState, useRef } from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="footer-div">
      <Fade>
        <div className="footer-content">
          <div className="footer-quote-container">
            <p className="footer-quote" style={{ color: props.theme.text }}>
              "Sometimes all it takes is 20 seconds of insane courage or
              embarrassing bravery"
            </p>
            <button
              className="music-button"
              onClick={toggleMusic}
              style={{
                color: props.theme.text,
                border: `2px solid ${props.theme.text}`,
              }}
              title={
                isPlaying
                  ? 'Pause One Piece "We Go" Music'
                  : 'Play One Piece "We Go" Music'
              }
            >
              {isPlaying ? "🎵" : "🎶"}
            </button>
          </div>
          <audio ref={audioRef} loop onEnded={() => setIsPlaying(false)}>
            {/* One Piece "We Go" music */}
            <source src="/music/one_piece_we_go.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </Fade>
    </div>
  );
}
