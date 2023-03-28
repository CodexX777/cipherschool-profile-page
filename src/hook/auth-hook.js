import { useState, useCallback, useEffect } from "react";

let logoutTimer;

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  const [tokenExpirationDate, setTokenExpirationDate] = useState();

  const [uid, setUid] = useState(null);
  const [firstName, setfirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [links, setLinks] = useState({});
  const [interest, setInterests] = useState([]);
  const [professionalInfo, setProfessionalInfo] = useState({});
  const [profilePic, setprofilePic] = useState(null);
  const [aboutMe, setAboutMe] = useState(null);
  const [phoneNo, setPhoneNo] = useState(null);
  const login = useCallback(
    (
      id,
      token,
      firstName,
      lastName,
      email,
      links,
      interests,
      professionalInfo,
      expirationDate,
      profilePic,
      aboutMe,
      phoneNo
    ) => {
      setUid(id);
      setIsLoggedIn(token);
      setfirstName(firstName);
      setEmail(email);
      setInterests(interests);
      setLastName(lastName);
      setLinks(links);
      setProfessionalInfo(professionalInfo);
      setprofilePic(profilePic);
      setAboutMe(aboutMe);
      setPhoneNo(phoneNo);
      const tokenExpirationDate =
        expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);

      setTokenExpirationDate(tokenExpirationDate);
      localStorage.setItem(
        "userData",
        JSON.stringify({
          userId: id,
          token: token,
          expiration: tokenExpirationDate.toISOString(),
        })
      );
    },
    []
  );

  const logout = useCallback(() => {
    setUid(null);
    setIsLoggedIn(null);
    setfirstName(null);
    setEmail(null);
    setInterests(null);
    setLastName(null);
    setLinks(null);
    setProfessionalInfo(null);
    setAboutMe(null);
    setPhoneNo(null);
    setprofilePic(null);
    setTokenExpirationDate(null);
    localStorage.removeItem("userData");
  }, []);

  useEffect(() => {
    if (isLoggedIn && tokenExpirationDate) {
      const remainingTime =
        tokenExpirationDate.getTime() - new Date().getTime();

      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [isLoggedIn, logout, tokenExpirationDate]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date()
    ) {
      login(
        storedData.userId,
        storedData.address,
        storedData.token,
        new Date(storedData.expiration)
      );
    }
  }, [login]);

  return {
    uid,
    login,
    logout,
    isLoggedIn,
    firstName,
    lastName,
    interest,
    links,
    profilePic,
    professionalInfo,
    email,
    aboutMe,
    phoneNo,
  };
};
