import React from 'react'
import ProfileCards from "../components/profile/Profile";

function Profile(props) {
    const userData = props.userData;
    const setUserDisplayData = props.setUserDisplayData;
    const setRoute = props.setRoute;
    const setUserData = props.setUserData;

  return (
    <>
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