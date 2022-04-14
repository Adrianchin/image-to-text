import React from 'react'
import SignInForm from "../components/login/SignIn";
import {
  SignInContainer,
} from "./PageElements";

function Signin(props) {
    const setIfLogin=props.setIfLogin;
    const setRoute=props.setRoute;
    const setUserData=props.setUserData;

  return (
    <>
    <SignInForm
        setIfLogin={setIfLogin}
        setRoute={setRoute}
        setUserData={setUserData}
    />
    </>
  )
}

export default Signin