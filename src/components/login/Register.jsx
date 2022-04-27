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

const registerEndpoint = "http://localhost:3000/users/register";
const loginHomeLink = "/home";
const logoutHomeLink = "/";
const signinLink = "/signin";

function Register() {
  let navigate = useNavigate();

  const [newUsername, setNewUsername] = useState(null);
  const [newEmail, setNewEmail] = useState(null);
  const [newPassword, setNewPassword] = useState(null);

  function onUsernameInput(event) {
    setNewUsername(event.target.value);
  }

  function onEmailInput(event) {
    setNewEmail(event.target.value);
  }

  function onPasswordInput(event) {
    setNewPassword(event.target.value);
  }

  function onSubmitRegister(event) {
    event.preventDefault();
    if (newUsername && newEmail && newPassword) {
      const signInContent = {
        username: newUsername,
        email: newEmail,
        password: newPassword,
      };
      async function registerUser() {
        try {
          const response = await fetch(registerEndpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              username: signInContent.username,
              email: signInContent.email,
              password: signInContent.password,
              credentials: "include",
            }),
          });
          const signInReturn = await response.json();
          if (signInReturn.username) {
            navigate(loginHomeLink);
          }
        } catch (error) {
          console.log("Error registering in");
        }
      }
      registerUser();
    } else {
      return console.log("Require username, email and password");
    }
  }

  return (
    <FormWrap>
      <IconDiv>
        <Icon to={logoutHomeLink}>返る</Icon>
      </IconDiv>
      <FormContent>
        <Form action="#">
          <FormH1>Register</FormH1>
          <FormLabel htmlFor="for">Username</FormLabel>
          <FormInput type="name" required onChange={onUsernameInput} />
          <FormLabel htmlFor="for">Email</FormLabel>
          <FormInput type="email" required onChange={onEmailInput} />
          <FormLabel htmlFor="for">Password</FormLabel>
          <FormInput type="password" required onChange={onPasswordInput} />
          <FormButton type="submit" onClick={onSubmitRegister}>
            Continue
          </FormButton>
          <TextDiv>
            <Text onClick={() => navigate(signinLink)}>Sign In</Text>
          </TextDiv>
        </Form>
      </FormContent>
    </FormWrap>
  );
}

export default Register;
