import React, { useState, useEffect } from "react";
import LoggedInNavbar from "../components/NavigationLoggedIn/LoggedInNavBar";
import LoggedInSideBar from "../components/NavigationLoggedIn/SideBar/LoggedInSideBar";

import DisplayData from "../components/userdata/DisplayData";

import {
  DisplayDataContainer,
  DisplayDataColumn,
  DisplayDataBackgrounImage,
} from "./PageElements";
function DisplayCard(props) {
  
  const userDisplayData = props.userDisplayData;
  const setUserDisplayData = props.setUserDisplayData;
  const notes=props.notes

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <LoggedInSideBar isOpen={isOpen} toggle={toggle} />
      <LoggedInNavbar toggle={toggle} />
      <DisplayDataContainer>
      <DisplayDataColumn>
        <DisplayDataBackgrounImage />
        {userDisplayData != null
        ?<DisplayData
          setUserDisplayData={setUserDisplayData}
          userDisplayData={userDisplayData}
          notes={notes}
          />
        :<></>
        }
        </DisplayDataColumn>
      </DisplayDataContainer>
    </>
  );
}

export default DisplayCard;