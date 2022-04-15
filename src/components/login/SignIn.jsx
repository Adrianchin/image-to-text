import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import {
  SignInContainer,
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
  Text
} from "./LoginElements";

function SignIn(props) {

  let navigate = useNavigate();

  const setRoute = props.setRoute;
  const setIfLogin = props.setIfLogin;
  const setUserData = props.setUserData;

  const [signInUsername, setSignInUsername] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  function onUsernameInput(event){
    setSignInUsername(event.target.value);
  };

  function onPasswordInput(event){
    setSignInPassword(event.target.value);
  };

  function onSubmitSignin(event){
    event.preventDefault(); //Added to prevent auto refresh. Why? React refreshed auto when submit form is completed.
    const signInContent ={
      username: signInUsername,
      password: signInPassword
    }
    async function signInUser(){
      try{
        const response = await fetch("http://localhost:3000/signin",{
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body:  JSON.stringify({
            username: signInContent.username,
            password: signInContent.password
          })
        })
        const signInReturn = await response.json();
        console.log(signInReturn)
        if(signInReturn.username){
          navigate("/uploadfile");
          setUserData(signInReturn);
          setIfLogin(true);
        }
      }catch(error) {
        console.log(
          "Error logging in"
        );
      }
    }
  signInUser();
  };

  return(
    <>
    <SignInContainer>
      <FormWrap>
        <IconDiv>
        <Icon to="/">返る</Icon>
        </IconDiv>
        <FormContent>
          <Form>
            <FormH1>Sign In</FormH1>
            <FormLabel htmlFor='for'>Username</FormLabel>
            <FormInput type='name' onChange={onUsernameInput}/>
            <FormLabel htmlFor='for'>Password</FormLabel>
            <FormInput type='password' onChange={onPasswordInput}/>
            <FormButton type="submit" onClick={onSubmitSignin}>Continue</FormButton>
            <TextDiv>
            <Text onClick={() => navigate("/register")}>Register</Text>
            </TextDiv>
          </Form>
        </FormContent>
      </FormWrap>
    </SignInContainer>
    </>

  );

}


export default SignIn;
