import React from "react";
import "./ProfilePage.css";
import Avatar from "../components/UIElements/Avatar";
import { TbEditCircle } from "react-icons/tb";
import AboutMe from "../components/User/AboutMe";
import Socials from "../components/User/Socials";
import ProfInfo from "../components/User/ProfInfo";
import Password from "../components/User/Password";
import Interests from "../components/User/Interests";

let avatarUrl =
  "https://lh3.googleusercontent.com/a/AGNmyxYRv_XBjPojMWq3Uv__44TEpK3JMtkqfPTxTo-oBw=s96-c";

let UserName = "Shivang verma";
let UserMail = "shivang260279@gmail.com";
let followers = 0;

const ProfilePage = () => {
  return (
    <>
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
            <TbEditCircle className="pic-edit" />
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
        <Socials />
        <ProfInfo />
        <Password />
        <Interests />
      </div>

    </>
  );
};

export default ProfilePage;
