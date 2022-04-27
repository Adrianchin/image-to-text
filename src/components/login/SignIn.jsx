import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  IconDiv,
  TextDiv,
  Text,
} from "./LoginElements";

const signinEndpoint = "http://localhost:3000/users/signin";
const loginHomeLink = "/home";
const registerLink = "/register";
const logoutHomeLink = "/";

function SignIn() {
  let navigate = useNavigate();

  const [signInUsername, setSignInUsername] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  function onUsernameInput(event) {
    setSignInUsername(event.target.value);
  }

  function onPasswordInput(event) {
    setSignInPassword(event.target.value);
  }

  function onSubmitSignin(event) {
    event.preventDefault(); //Added to prevent auto refresh. Why? React refreshed auto when submit form is completed.
    const signInContent = {
      username: signInUsername,
      password: signInPassword,
    };
    async function signInUser() {
      try {
        const response = await fetch(signinEndpoint, {
          credentials: "include",
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: signInContent.username,
            password: signInContent.password,
          }),
        });
        const signInReturn = await response.json();
        console.log(signInReturn);
        navigate(loginHomeLink);
      } catch (error) {
        console.log("Error logging in", error);
      }
    }
    signInUser();
  }

  return (
    <FormWrap>
      <IconDiv>
        <Icon to={logoutHomeLink}>返る</Icon>
      </IconDiv>
      <FormContent>
        <Form>
          <FormH1>Sign In</FormH1>
          <FormLabel htmlFor="for">Username</FormLabel>
          <FormInput type="name" onChange={onUsernameInput} />
          <FormLabel htmlFor="for">Password</FormLabel>
          <FormInput type="password" onChange={onPasswordInput} />
          <FormButton type="submit" onClick={onSubmitSignin}>
            Continue
          </FormButton>
          <TextDiv>
            <Text onClick={() => navigate(registerLink)}>Register</Text>
          </TextDiv>
        </Form>
      </FormContent>
    </FormWrap>
  );
}

export default SignIn;
