import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

function Register(props) {

  let navigate = useNavigate();

  const setRoute = props.setRoute;
  const setIfLogin = props.setIfLogin;
  const setUserData = props.setUserData;

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

  function onSubmitRegister() {
    if (newUsername && newEmail && newPassword) {
      const signInContent = {
        username: newUsername,
        email: newEmail,
        password: newPassword
      };
      async function registerUser() {
        try {
          const response = await fetch("http://localhost:3000/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              username: signInContent.username,
              email: signInContent.email,
              password: signInContent.password
            })
          })
          const signInReturn = await response.json();
          if (signInReturn.username) {
            setUserData(signInReturn);
            setIfLogin(true);
            navigate("/main");
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
    <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Register</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="name">
                Username
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="text"
                name="name"
                id="name"
                onChange={onUsernameInput}
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="email">
                Email
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email"
                id="email"
                onChange={onEmailInput}
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
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib pointer"
              type="submit"
              value="Register"
              onClick={onSubmitRegister}
            />
            <div className="lh-copy mt3">
            <p 
              onClick={() => navigate("/signin")}
              className="f6 link dim black db pointer"
            >
              Sign In
            </p>
          </div>
          </div>
        </div>
      </main>
    </article>
  );
}

export default Register;
