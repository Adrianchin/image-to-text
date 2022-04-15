import React, {useState} from 'react'
import DisplayDataComponent from "../components/userdata/DisplayData"; 
import LoggedInNavbar from "../components/NavigationLoggedIn/LoggedInNavBar";
import LoggedInSideBar from "../components/NavigationLoggedIn/SideBar/LoggedInSideBar";


function DisplayData(props) {
    const userDisplayData= props.userDisplayData;
    const setUserData=props.setUserData;

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };

  return (
    <>
        <LoggedInSideBar isOpen={isOpen} toggle={toggle}/>
        <LoggedInNavbar toggle={toggle}/>
        <DisplayDataComponent
           userDisplayData={userDisplayData}
           setUserData={setUserData}
        />
    </>
  )
}

export default DisplayData