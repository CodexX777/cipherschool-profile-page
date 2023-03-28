import React, { useState, useRef } from "react";
import "./ProfilePage.css";
import Avatar from "../components/UIElements/Avatar";
import { TbEditCircle } from "react-icons/tb";
import AboutMe from "../components/User/AboutMe";
import Socials from "../components/User/Socials";
import ProfInfo from "../components/User/ProfInfo";
import Password from "../components/User/Password";
import Interests from "../components/User/Interests";
// import Heatmap from "../components/UIElements/Heatmap";
import { ProfileSchema } from "../Schema/ProfileSchema";
import Modal from "../components/UIElements/Modal";
import { useFormik } from "formik";
import axios from "axios";


let uid = "";
let avatarUrl =
  "https://lh3.googleusercontent.com/a/AGNmyxYRv_XBjPojMWq3Uv__44TEpK3JMtkqfPTxTo-oBw=s96-c";

let UserName = "Shivang verma";
let UserMail = "shivang260279@gmail.com";
let followers = 0;

const ProfilePage = () => {
  const [showProfileModal, setShowProfileModal] = useState(false);

  const [preview, setPreview] = useState({});

  const filePicker = useRef();

  const pickImageHandler = () => {
    filePicker.current.click();
  };

  const closeModalHandler = () => {
    setShowProfileModal(false);
  };

  const profileSubmitHandler = (event) => {
    console.log(event);

    const formData = new FormData();
    formData.append("FirstName", event.prodName);
    formData.append("LastName", event.prodStock);
    formData.append("Email", event.prodPrice);
    formData.append("PhoneNo", event.prodDesc);
    formData.append("file", event.file);

    axios
      .patch(
        `${process.env.REACT_APP_BACKEND_URL}/api/user/userinfo/update/${uid}`,
        formData,
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
    closeModalHandler();
  };

  const initialValues = {
    FirstName: "",
    LastName: "",
    Email: "",
    PhoneNo: 0,
    file: null,
  };

  const {
    values,
    handleBlur,
    touched,
    handleChange,
    errors,
    handleSubmit,
    setFieldValue,
    resetForm,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: ProfileSchema,
    onSubmit: profileSubmitHandler,
  });

  if (values.file) {
    const reader = new FileReader();
    reader.readAsDataURL(values.file);
    reader.onload = () => {
      setPreview(reader.result);
    };
  }

  return (
    <>
      <Modal
        show={showProfileModal}
        onCancel={closeModalHandler}
        header={"Password"}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        onSubmit={handleSubmit}
        footer={
          <div className="password_footer">
            <button
              className="cancel_btn"
              type="button"
              onClick={closeModalHandler}
            >
              Close
            </button>
            <button type="submit" className="save_btn">
              Save
            </button>
          </div>
        }
      >
        <div className="profile-edit-panel-layout">
          <div className="profile-pic-panel">
            <div className="profile-panel-heading">Profile Update</div>
            <div className="profile-pic-update">
              <Avatar
                className="user-avatar"
                height="6"
                width="6"
                src={Object.keys(preview).length ? preview : avatarUrl}
                alt="account avatar"
              />
              <div className="pic-edit-cont">
                <TbEditCircle className="pic-edit" onClick={pickImageHandler} />
              </div>
            </div>
          </div>
          <div className="password-chg-panel">
            <div className="password-input-panel">
              <p>First Name</p>
              <div className="input-field">
                <input
                  type="text"
                  name="FirstName"
                  required
                  id="FirstName"
                  placeholder="First Name"
                  value={values.FirstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
            </div>
            <div className="password-input-panel">
              <p>Last Name</p>
              <div className="input-field">
                <input
                  type="text"
                  name="LastName"
                  placeholder="Last Name"
                  id="LastName"
                  value={values.LastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
            </div>
            <div className="password-input-panel">
              <p>Email</p>
              <div className="input-field">
                <input
                  type="Email"
                  name="Email"
                  id="Email"
                  placeholder="Email"
                  required
                  value={values.Email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
            </div>
            <div className="password-input-panel">
              <p>Mobile Number</p>
              <div className="input-field">
                <input
                  type="number"
                  name="PhoneNo"
                  placeholder="Mobile Number"
                  id="PhoneNo"
                  required
                  value={values.PhoneNo}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
            </div>
            <input
              name="file"
              id="file"
              ref={filePicker}
              type="file"
              hidden
              onChange={(e) => {
                setFieldValue("file", e.target.files[0]);
              }}
              onBlur={handleBlur}
            />
          </div>
        </div>
      </Modal>
      <div className="User-panel">
        <div className="user-content">
          <Avatar
            className="user-avatar"
            height="5"
            width="5"
            src={avatarUrl}
            alt="account avatar"
          />
          <div className="pic-edit-cont">
            <TbEditCircle
              className="pic-edit"
              onClick={() => setShowProfileModal(true)}
            />
          </div>

          <div className="greeting">
            <h2>Hello,</h2>
            <h1>{UserName}</h1>
            <h4>{UserMail}</h4>
          </div>
        </div>
        <div className="followers">
          <h3>{followers} Followers</h3>
        </div>
      </div>

      <div className="profile-content">
        <AboutMe />
        {/* <Heatmap /> */}
        <Socials />
        <ProfInfo />
        <Password />
        <Interests />
      </div>
    </>
  );
};

export default ProfilePage;
