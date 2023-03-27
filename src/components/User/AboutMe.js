import React, { useState } from "react";
import "./AboutMe.css";

const AboutMe = () => {
  const [editAbout, setEditAbout] = useState(false);

  return (
    <div className="about-me-panel">
      <div className="about-heading">
        <h4>ABOUT ME</h4>
        <button
          onClick={() => {
            setEditAbout(!editAbout);
          }}

          className="aboutme-btn"
        >
          {editAbout ? "Save" : "Edit"}
        </button>
      </div>
      <div className="aboutme-input_section">
        <textarea className="about-input" placeholder="Add something about you."/>
      </div>
      <hr></hr>
    </div>
  );
};

export default AboutMe;
