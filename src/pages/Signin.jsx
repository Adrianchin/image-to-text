import React from "react";
import SignInForm from "../components/login/SignIn";
import { SignInContainer } from "./PageElements";

function Signin() {
  return (
    <SignInContainer>
      <SignInForm />
    </SignInContainer>
  );
}

export default Signin;
