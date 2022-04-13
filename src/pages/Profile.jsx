import React, {useState} from 'react'
import ProfileCards from "../components/profile/Profile";
import NavBar from "../components/NavigationLoggedIn/NavBar";
import SideBar from "../components/NavigationLoggedIn/SideBar/SideBar";

function Profile(props) {
    const userData = props.userData;
    const setUserDisplayData = props.setUserDisplayData;
    const setRoute = props.setRoute;
    const setUserData = props.setUserData;

    const [isOpen, setIsOpen] = useState(false)
    
    const toggle = () => {
        setIsOpen(!isOpen)
    };

  return (
    <>
        <SideBar isOpen={isOpen} toggle={toggle}/>
        <NavBar toggle={toggle}/>
        <ProfileCards
            userData={userData}
            setUserDisplayData={setUserDisplayData}
            setRoute={setRoute}
            setUserData={setUserData}
        />
    </>
  )
}

export default Profile