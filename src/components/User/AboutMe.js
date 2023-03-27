import React, { useState } from "react";
import Heading from "../UIElements/Heading";
import "./AboutMe.css";
import { useFormik } from "formik";

const AboutMe = () => {
  const initialValues = {
    AboutMe: "",
  };
  const aboutSubmitHandler = (event) => {
    console.log(event)
  };
  const { values, handleBlur, touched, handleChange, errors, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      onSubmit: aboutSubmitHandler,
    });

    const [editState,setEditState]=useState(false);
  const btnSubmitHandler = (btnState, setBtnState) => {
    if(btnState==true){
      handleSubmit();
    }
    setBtnState(!btnState);
    setEditState(!editState);
  };

  return (
    <div className="about-me-panel">
      <Heading
        Label="ABOUT ME"
        onTrue="Save"
        onFalse="Edit"
        submitHandler={btnSubmitHandler}
      />
      <form onSubmit={handleSubmit}>
        <div className="aboutme-input_section">
          <textarea
            name="AboutMe"
            value={values.AboutMe}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={!editState}
            className="about-input"
            placeholder="Add something about you."
          />
        </div>
      </form>
      <hr></hr>
    </div>
  );
};

export default AboutMe;
