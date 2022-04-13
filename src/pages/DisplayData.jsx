import React, {useState} from 'react'
import DisplayDataComponent from "../components/userdata/DisplayData"; 
import NavBar from "../components/NavigationLoggedIn/NavBar";
import SideBar from "../components/NavigationLoggedIn/SideBar/SideBar";

function DisplayData(props) {
    const userDisplayData= props.userDisplayData;
    const setUserData=props.setUserData;

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };

  return (
    <>
        <SideBar isOpen={isOpen} toggle={toggle}/>
        <NavBar toggle={toggle}/>
        <DisplayDataComponent
           userDisplayData={userDisplayData}
           setUserData={setUserData}
        />
    </>
  )
}

export default DisplayData