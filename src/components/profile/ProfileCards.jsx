import React, { useEffect } from "react";
import Cards from "./cards/Cards";

function Profile(props) {
  const userData = props.userData;
  const setUserDisplayData = props.setUserDisplayData;
  const setRoute = props.setRoute;
  const setUserData = props.setUserData;

  //Adds update from history to profile upon load
  useEffect(() => {
    async function getUserData() {
      try {
        const placeholderDataObject = { ...userData };
        const getUserDataURL = `http://localhost:3000/getProfileData?id=${userData._id}`;
        const response = await fetch(getUserDataURL, {
          method: "GET",
        });
        const signInReturn = await response.json();
        placeholderDataObject.profile = signInReturn;
        setUserData(placeholderDataObject);
      } catch (error) {
        console.log("Error getting profile data: ", error);
      }
    }
    getUserData();
  }, []);

  return (
    <>
      <Cards
        userData={userData}
        setUserDisplayData={setUserDisplayData}
        setRoute={setRoute}
        setUserData={setUserData}
      />
    </>
  );
}

export default Profile;
