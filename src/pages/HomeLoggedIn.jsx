import React, { useState } from "react";
import LoggedInSideBar from "../components/NavigationLoggedIn/SideBar/LoggedInSideBar";
import LoggedInNavbar from "../components/NavigationLoggedIn/LoggedInNavBar";
import VideoLandingLoggedIn from "../components/landingpage/VideoSection/VideoLandingLoggedIn";
import InfoSection from "../components/landingpage/InfoSection/Index";
import Services from "../components/landingpage/Services/IndexLoggedIn";
import Connect from "../components/landingpage/Connect/Connect";
import {
  homeObjFive,
  homeObjSix,
  homeObjSeven,
  homeObjEight,
} from "../components/landingpage/InfoSection/Data";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <LoggedInSideBar isOpen={isOpen} toggle={toggle} />
      <LoggedInNavbar toggle={toggle} />
      <VideoLandingLoggedIn />
      <InfoSection {...homeObjFive} />
      <InfoSection {...homeObjSix} />
      <Services />
      <InfoSection {...homeObjSeven} />
      <InfoSection {...homeObjEight} />
      <Connect />
    </>
  );
}

export default Home;
