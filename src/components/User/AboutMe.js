import React, { useState } from "react";
import Heading from "../UIElements/Heading";
import "./AboutMe.css";

const AboutMe = () => {
    const aboutSubmitHandler=(btnState,setBtnState)=>{
        setBtnState(!btnState);

    }


  return (
    <div className="about-me-panel">
      <Heading
        Label="ABOUT ME"
        onTrue="Save"
        onFalse="Edit"
        submitHandler={aboutSubmitHandler}
      />
      <div className="aboutme-input_section">
        <textarea
          className="about-input"
          placeholder="Add something about you."
        />
      </div>
      <hr></hr>
    </div>
  );
};

export default AboutMe;
