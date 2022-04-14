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

  function onSubmitSignin(){
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
          setUserData(signInReturn);
          setIfLogin(true);
          navigate("/profile");
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
          <Form action="#">
            <FormH1>Sign In</FormH1>
            <FormLabel htmlFor='for'>Username</FormLabel>
            <FormInput type='name' required onChange={onUsernameInput}/>
            <FormLabel htmlFor='for'>Password</FormLabel>
            <FormInput type='password' required onChange={onPasswordInput}/>
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

/*
  return (
    <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Username
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
                id="email-address"
                onChange={onUsernameInput}
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">
                Password
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
                onChange={onPasswordInput}
              />
            </div>
          </fieldset>
          <div className="">
            <input
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Sign in"
              onClick={onSubmitSignin}
            />
          </div>
          <div className="lh-copy mt3">
            <p 
              onClick={() => navigate("/register")}
              className="f6 link dim black db pointer"
            >
              Register
            </p>
          </div>
        </div>
      </main>
    </article>
  );
*/

}


export default SignIn;
