import React, { useEffect } from "react";
import Cards from "./cards/Cards";
import { useNavigate } from "react-router-dom";

function Profile(props) {
  let navigate = useNavigate();

  const userData = props.userData;
  const setUserDisplayData = props.setUserDisplayData;
  const setRoute = props.setRoute;
  const setUserData = props.setUserData;

  //Adds update from history to profile upon load
  useEffect(() => {
    async function getUserData() {
      let placeholderDataObject=null;
      try {
        const placeholderDataObject = { ...userData };
        const getUserDataURL = `http://localhost:3000/users/getProfileData`;
        const response = await fetch(getUserDataURL, {
          method: "GET",
          credentials: 'include',
        });
        const signInReturn = await response.json();
        if(response.status===401){
          console.log("Error user needs to sign in", response.status);
          navigate("/signin");
        }
        console.log(signInReturn)
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
    {userData != null
      ?(<Cards
        userData={userData}
        setUserDisplayData={setUserDisplayData}
        setRoute={setRoute}
        setUserData={setUserData}
      />)
      :(<></>)
    }
    </>
  );
}

export default Profile;
