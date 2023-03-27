import React, { useState } from "react";
import Heading from "../UIElements/Heading";
import "./ProfInfo.css";
import { useFormik } from "formik";

const ProfInfo = () => {
  const [editInfo, setEditInfo] = useState(false);

  const initialValues = {
    education: "Graduation",
    occupation: "College Student",
  };

  const infoSubmitHandler = (event) => {
    console.log(event);
  };
  const formik = useFormik({
    initialValues,
    onSubmit: infoSubmitHandler, // You can handle the form submission here
  });

  const btnStateHandler = (btnState, setBtnState) => {
    if (btnState == true) {
      formik.handleSubmit();
    }
    setBtnState(!btnState);
    setEditInfo(!editInfo);
  };

  return (
    <div className="profile-info">
      <Heading
        onTrue="Save"
        onFalse="Edit"
        Label="PROFESSIONAL INFORMATION"
        submitHandler={btnStateHandler}
      />
      <form onSubmit={formik.handleSubmit}>
        <div className="info-selector">
          <div className="selector-panel">
            <label htmlFor="education">Highest Education</label>
            <select
              id="education"
              name="education"
              disabled={!editInfo}
              value={formik.values.education}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="Primary">Primary</option>
              <option value="Secondary">Secondary</option>
              <option value="Higher Secondary">Higher Secondary</option>
              <option value="Graduation">Graduation</option>
              <option value="Post Graduation">Post Graduation</option>
            </select>
          </div>
          <div className="selector-panel">
            <label htmlFor="occupation">What do you do currently?</label>
            <select
              disabled={!editInfo}
              id="occupation"
              name="occupation"
              value={formik.values.occupation}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="Schooling">Schooling</option>
              <option value="College Student">College Student</option>
              <option value="Teaching">Teaching</option>
              <option value="Job">Job</option>
              <option value="Freelancing">Freelancing</option>
            </select>
          </div>
        </div>
        <hr></hr>
      </form>
    </div>
  );
};

export default ProfInfo;
