import React, {useEffect, useState} from "react";
import Cards from "./cards/Cards";

function Profile(props) {

const userData = props.userData;
const setUserDisplayData = props.setUserDisplayData;
const setRoute=props.setRoute;
const setUserData=props.setUserData

/*const [rerender, setRerender] = useState(false);

useEffect(() => {
  async function getUserData(){
    try{
      const placeholderDataObject = [userData]
      const getUserDataURL = `http://localhost:3000/getProfileData?id=${userData._id}`;
      const response = await fetch(getUserDataURL,{
        method: "GET"
      })
      const signInReturn = await response.json();
      placeholderDataObject[0].profile = signInReturn;
      console.log("This is placeholderDataObject Profile: ", placeholderDataObject)
      console.log("This is signin return on Profile: ", signInReturn)
      setUserData(placeholderDataObject[0])
    }catch(error) {
      console.log(
        "Error getting profile data: ", error
        );
      }
    }
  getUserData();
}, [])*/

  return (
    <div>
        <Cards
            userData={userData}
            setUserDisplayData={setUserDisplayData}
            setRoute={setRoute}
            setUserData={setUserData}
        />
    </div>
  )
}

export default Profile