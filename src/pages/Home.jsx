import React, {useState} from 'react'
import LoggedOutSideBar from "../components/NavigationLoggedOut/SideBar/LoggedOutSideBar";
import LoggedOutNavbar from "../components/NavigationLoggedOut/LoggedOutNavBar";
import LoggedInSideBar from "../components/NavigationLoggedIn/SideBar/LoggedInSideBar";
import LoggedInNavbar from "../components/NavigationLoggedIn/LoggedInNavBar";
import VideoLanding from "../components/landingpage/VideoSection/VideoLanding";
import InfoSection from "../components/landingpage/InfoSection/index";
import Services from "../components/landingpage/Services/index";
import Connect from "../components/landingpage/Connect/Connect";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from '../components/landingpage/InfoSection/Data';


function Home(props) {

    const ifLogin = props.ifLogin;

    const [isOpen, setIsOpen] = useState(false)
    
    const toggle = () => {
        setIsOpen(!isOpen)
    };

  return (
    <>
        {ifLogin
        ?<>
        <LoggedInSideBar isOpen={isOpen} toggle={toggle}/>
        <LoggedInNavbar toggle={toggle}/>
        </>
        :<>
        <LoggedOutSideBar isOpen={isOpen} toggle={toggle}/>
        <LoggedOutNavbar toggle={toggle}/>
        </>
        }
        <VideoLanding/>
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
        <Services/>
        <InfoSection {...homeObjThree}/>
        <InfoSection {...homeObjFour}/>
        <Connect/>
    </>
  )
}

export default Home