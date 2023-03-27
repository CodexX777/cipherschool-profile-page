import React, { useState } from "react";
import Heading from "../UIElements/Heading";
import "./Socials.css";
import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";
import { GoMarkGithub } from "react-icons/go";
import { BsFacebook } from "react-icons/bs";
import { VscGlobe } from "react-icons/vsc";
import SocialLinks from "../UIElements/SocialLinks";

const socialLinks = [
  {
    LinkName: "LinkedIn",
    icon: <AiFillLinkedin />,
    placeholder: "LinkedIn",
  },
  {
    LinkName: "Github",
    icon: <GoMarkGithub />,
    placeholder: "Github",
  },
  {
    LinkName: "Facebook",
    icon: <BsFacebook />,
    placeholder: "Facebook",
  },
  {
    LinkName: "Twitter",
    icon: <AiFillTwitterCircle />,
    placeholder: "Twitter",
  },
  {
    LinkName: "Instagram",
    icon: <AiFillInstagram />,
    placeholder: "Instagram",
  },
  {
    LinkName: "Website",
    icon: <VscGlobe />,
    placeholder: "Your Website",
  },
];

const Socials = () => {
  const [editState, setEditState] = useState(false);
  const socialSubmitHandler = (btnState, setBtnState) => {
    setBtnState(!btnState);
    setEditState(!editState);
  };

  return (
    <>
      <div className="social-links">
        <Heading
          Label="ON THE WEB"
          onTrue="Save"
          onFalse="Edit"
          submitHandler={socialSubmitHandler}
        />
        <div className="link-section">
          {socialLinks.map((link) => (
            <SocialLinks
              key={link.LinkName}
              name={link.LinkName}
              placeholder={link.placeholder}
              icon={link.icon}
              editState={editState}
            />
          ))}
        </div>
        <hr></hr>
      </div>
    </>
  );
};

export default Socials;
