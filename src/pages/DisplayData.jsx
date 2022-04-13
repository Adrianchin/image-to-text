import React from 'react'
import DisplayDataComponent from "../components/userdata/DisplayData"; 

function DisplayData(props) {
    const userDisplayData= props.userDisplayData;
    const setUserData=props.setUserData;
  return (
    <>
        <DisplayDataComponent
           userDisplayData={userDisplayData}
           setUserData={setUserData}
        />
    </>
  )
}

export default DisplayData