import React, { useState } from "react";
import Heading from "../UIElements/Heading";
import "./AboutMe.css";
import { useFormik } from "formik";
import axios from "axios";

let uid = "6422f102410e54cf48c818db";

const AboutMe = () => {

  const [aboutMeText,setAboutMeText]=useState("");

  const initialValues = {
    AboutMe: aboutMeText,
  };
  const aboutSubmitHandler = async(event) => {
    setAboutMeText(event.AboutMe);
    console.log(event);
    axios
      .patch(
        `${process.env.REACT_APP_BACKEND_URL}/api/user/profile-details/about/${uid}`,
        event,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const { values, handleBlur, touched, handleChange, errors, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      onSubmit: aboutSubmitHandler,
    });

  const [editState, setEditState] = useState(false);
  const btnSubmitHandler = (btnState, setBtnState) => {
    if (btnState == true) {
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
