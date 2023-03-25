import React, { useContext } from "react";
import "./MainNav.css";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { sideBarContext } from "../../context/sideBarContext";


const MainNav = () => {
  const sideBarGlobal = useContext(sideBarContext);

  return (
    <div className="main-nav">
      <div className="hamburger">
        <HiOutlineBars3BottomLeft onClick={sideBarGlobal.sideBarToggle} />
      </div>
    </div>
  );
};

export default MainNav;
