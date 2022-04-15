import React, {useState} from 'react'
import ProfileCards from "../components/profile/ProfileCards";
import LoggedInNavbar from "../components/NavigationLoggedIn/LoggedInNavBar";
import LoggedInSideBar from "../components/NavigationLoggedIn/SideBar/LoggedInSideBar";

import {
  NavBarPlaceholder,
  ProfileBackgrounImage,
  ProfileContainer,
  ProfileColumn
} from "./PageElements";

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
        <LoggedInSideBar isOpen={isOpen} toggle={toggle}/>
        <LoggedInNavbar toggle={toggle}/>
        <ProfileContainer>
          <ProfileColumn>
            <ProfileBackgrounImage/>
            <NavBarPlaceholder/>
        <ProfileCards
            userData={userData}
            setUserDisplayData={setUserDisplayData}
            setRoute={setRoute}
            setUserData={setUserData}
        />
        </ProfileColumn>
        </ProfileContainer>
    </>
  )
}

export default Profile