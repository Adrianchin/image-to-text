import React from "react";

function Navigation(props) {
  const setRoute = props.setRoute;
  const ifLogin = props.ifLogin;
  const setIfLogin = props.setIfLogin;
  const setUserData = props.setUserData;
  const userData = props.userData;

  function onSignOut(){
    setRoute("signout");
    setIfLogin(false);
    setUserData(null);
  }

  async function onProfile(){
    /*async function getUserData(){
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
    await getUserData();*/
    
    async function getUserData(){
      try{
        const placeholderDataObject = Object.create(userData)
        const getUserDataURL = `http://localhost:3000/getProfileData?id=${userData._id}`;
        const response = await fetch(getUserDataURL,{
          method: "GET"
        })
        const signInReturn = await response.json();
        placeholderDataObject.profile = signInReturn;
        console.log("This is placeholderDataObject Profile: ", placeholderDataObject)
        console.log("This is signin return on Profile: ", signInReturn)
        setUserData(placeholderDataObject)
      }catch(error) {
        console.log(
          "Error getting profile data: ", error
          );
        }
      }
    getUserData();
    setRoute("profile")
} 


  if (ifLogin) {
    /* if ifLogin true, show only signout*/
    return (
      /*on click, runs setRoute as 'signout'*/
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={onSignOut}
          className="f4 link dim black underline pa2 pointer"
        >
          Sign Out
        </p>
        <p
          onClick={() => setRoute("main")}
          className="f4 link dim black underline pa2 pointer"
        >
          Main Page
        </p>
        <p
          onClick={onProfile}
          className="f4 link dim black underline pa2 pointer"
        >
          Profile
        </p>
      </nav>
    );
  } else {
    /* if ifLogin false, show signin and register*/
    return (
      /*on click, runs setRoute as 'signout' or 'register'*/
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => setRoute("signin")}
          className="f4 link dim black underline pa2 pointer"
        >
          Sign in
        </p>
        <p
          onClick={() => setRoute("register")}
          className="f4 link dim black underline pa2 pointer"
        >
          Register
        </p>
      </nav>
    );
  }
}

export default Navigation;
