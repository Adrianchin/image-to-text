import React, {useEffect, useState} from "react";
import Cards from "./cards/Cards";

function Profile(props) {

const userData = props.userData;
const setUserDisplayData = props.setUserDisplayData;
const setRoute=props.setRoute;
/*
const setUserData=props.setUserData;
const [rerender, setRerender] = useState(false);

useEffect(() => {
  async function getUserData(){
    try{
      const getUserDataURL = `http://localhost:3000/getProfileData?id=${userData._id}`;
      const response = await fetch(getUserDataURL,{
        method: "GET"
      })
      const signInReturn = await response.json();
      userData.profile =signInReturn;
      setUserData(userData)
    }catch(error) {
      console.log(
        "Error getting profile data: ", error
        );
      }
    }
  getUserData();
  setRerender(!rerender);
}, [])
*/
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