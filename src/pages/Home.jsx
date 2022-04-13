import React, {useState} from 'react'
import LoggedOutSideBar from "../components/navigation/SideBar/LoggedOutSideBar";
import LoggedOutNavbar from "../components/navigation/LoggedOutNavBar";
import VideoLanding from "../components/landingpage/VideoSection/VideoLanding"
import InfoSection from "../components/landingpage/InfoSection/index"
import Services from "../components/landingpage/Services/index"
import Connect from "../components/landingpage/Connect/Connect"
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from '../components/landingpage/InfoSection/Data';


function Home() {

    const [isOpen, setIsOpen] = useState(false)
    
    const toggle = () => {
        setIsOpen(!isOpen)
    };

  return (
    <>
        <LoggedOutSideBar isOpen={isOpen} toggle={toggle}/>
        <LoggedOutNavbar toggle={toggle}/>
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