import { createContext } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  token: null,
  login: () => {},
  logout: () => {},
  uid: null,
  email: null,
  firstName: null,
  lastName: null,
  profilePic: null,
  phoneNo:null,
  links:null,
  interests:null,
  professionalInfo:null,
  sideBarToggle:()=>{},
  sideBarOpen:false,
  aboutMe:null,

});
