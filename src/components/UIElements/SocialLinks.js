import React from "react";
import { RiPencilFill } from "react-icons/ri";

const SocialLinks = (props) => {
  return (
    <div className="link-panel">
      <div className="link-heading">{props.name}</div>
      <div className="link-field">
        <div className="link-icon">{props.icon}</div>
        <div className="link-input">
          <input
            type="url"
            className="link-url"
            placeholder={props.placeholder}
            disabled={!props.editState}
          />
          {props.editState && <RiPencilFill/>}
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
