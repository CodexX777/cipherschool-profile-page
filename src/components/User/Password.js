import React from "react";
import Heading from "../UIElements/Heading";
import "./Password.css";

const Password = () => {
  const passwordModalHandler = (btnState, setBtnState) => {
    //code to trigger the modal
  };

  return (
    <div className="password-panel">
      <Heading
        onTrue="Change"
        onFalse="Change"
        Label="PASSWORD & SECURITY"
        submitHandler={passwordModalHandler}
      />
      <div className="password-view">
        <div className="password-heading">
          <p>Password</p>
          <div className="dummy-view">
            <input
              type="password"
              disabled 
              value=".................."
            />
          </div>
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default Password;
