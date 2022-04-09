import React from 'react';
import Cards from "./cards/Cards";

function Profile(props) {

const userData = props.userData;
const setUserDisplayData = props.setUserDisplayData;
const setRoute=props.setRoute

  return (
    <div>
        <Cards
            userData={userData}
            setUserDisplayData={setUserDisplayData}
            setRoute={setRoute}
        />
    </div>
  )
}

export default Profile