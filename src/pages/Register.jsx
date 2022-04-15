import React from "react";
import RegisterForm from "../components/login/Register";

function Register(props) {
  const setIfLogin = props.setIfLogin;
  const setRoute = props.setRoute;
  const setUserData = props.setUserData;

  return (
    <>
      <RegisterForm
        setIfLogin={setIfLogin}
        setRoute={setRoute}
        setUserData={setUserData}
      />
    </>
  );
}

export default Register;
