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
import { LinkSchema } from "../../Schema/LinksSchema";
import { useFormik } from "formik";
import axios from "axios";


let uid = "";


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

  const initialValues = {
    LinkedIn: "",
    Twitter: "",
    Facebook: "",
    Instagram: "",
    Website: "",
    Github: "",
  };

  const socialSubmitHandler = (btnState, setBtnState) => {
    if (btnState == true) {
      handleSubmit();
    }
    setBtnState(!btnState);
    setEditState(!editState);
  };

  const linkSubmitHandler = (event) => {
    event={
      "userLinks":event
    }
    axios
      .patch(
        `${process.env.REACT_APP_BACKEND_URL}/api/user/profile-details/socials/${uid}`,
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
    console.log(event);
  };
  const { values, handleBlur, touched, handleChange, errors, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: LinkSchema,
      onSubmit: linkSubmitHandler,
    });

  return (
    <>
      <div className="social-links">
        <Heading
          Label="ON THE WEB"
          onTrue="Save"
          onFalse="Edit"
          submitHandler={socialSubmitHandler}
        />
        <form onSubmit={handleSubmit}>
          <div className="link-section">
            {socialLinks.map((link) => (
              <SocialLinks
                key={link.LinkName}
                name={link.LinkName}
                placeholder={link.placeholder}
                values={values}
                icon={link.icon}
                handleChange={handleChange}
                onBlur={handleBlur}
                editState={editState}
              />
            ))}
          </div>
        </form>
        <hr></hr>
      </div>
    </>
  );
};

export default Socials;
