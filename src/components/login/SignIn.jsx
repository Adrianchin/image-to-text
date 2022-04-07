import React, {useState} from "react";

function SignIn(props) {
  
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
          setRoute("main");
        }
      }catch(error) {
        console.log(
          "Error logging in"
        );
      }
    }
  signInUser();
  };

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
              onClick={() => setRoute('register')}
              className="f6 link dim black db pointer"
            >
              Register
            </p>
          </div>
        </div>
      </main>
    </article>
  );
}

export default SignIn;
