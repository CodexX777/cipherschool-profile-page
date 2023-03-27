import React, { useState } from "react";
import Heading from "../UIElements/Heading";
import "./ProfInfo.css";

const ProfInfo = () => {
  const [editInfo, setEditInfo] = useState(false);

  const infoSubmitHandler = (btnState, setBtnState) => {
    setBtnState(!btnState);
    setEditInfo(!editInfo);
  };

  return (
    <div className="profile-info">
      <Heading
        onTrue="Save"
        onFalse="Edit"
        Label="PROFESSIONAL INFORMATION"
        submitHandler={infoSubmitHandler}
      />
      <div className="info-selector">
        <div className="selector-panel">
          <label htmlFor="cars">Highest Education</label>
          <select id="education"  defaultValue={"Graduation"} name="education">
            <option value="Primary">Primary</option>
            <option value="Secondary">Secondary</option>
            <option value="Higher Secondary">Higher Secondary</option>
            <option value="Graduation" >
              Graduation
            </option>
            <option value="Post Graduation">Post Graduation</option>
          </select>
        </div>
        <div className="selector-panel">
          <label htmlFor="cars">What do you do currently?</label>
          <select id="occupation" defaultValue={"College Student"} name="occupation" >
            <option value="Schooling">Schooling</option>
            <option value="College Student">
              College Student
            </option>
            <option value="Teaching">Teaching</option>
            <option value="Job">
              Job
            </option>
            <option value="Freelancing">Freelancing</option>
          </select>
          
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default ProfInfo;
