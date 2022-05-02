import React, { useEffect } from "react";
import Cards from "./cards/Cards";
import { useNavigate } from "react-router-dom";

const serverURL=process.env.REACT_APP_SERVER_URL;
const endpoint = "/users/getProfileData";
const getProfileDataEndpoint = serverURL+endpoint;

const signinLink = "/signin";

function Profile(props) {
  let navigate = useNavigate();

  const userData = props.userData;
  const setUserDisplayData = props.setUserDisplayData;
  const setUserData = props.setUserData;

  //Adds update from history to profile upon load
  useEffect(() => {
    async function getUserData() {
      try {
        const placeholderDataObject = { ...userData };
        const getUserDataURL = getProfileDataEndpoint;
        const response = await fetch(getUserDataURL, {
          method: "GET",
          credentials: 'include',
        });
        const getProfileDataReturn = await response.json();
        if(response.status===401){
          console.log("Error user needs to sign in", response.status);
          navigate(signinLink);
        }
        //console.log(getProfileDataReturn)
        placeholderDataObject.profile = getProfileDataReturn;
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
        setUserData={setUserData}
      />)
      :(<></>)
    }
    </>
  );
}

export default Profile;
