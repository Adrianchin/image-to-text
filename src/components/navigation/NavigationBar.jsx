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
    setRoute("profile")
} 


  if (ifLogin) {
    /* if ifLogin true, show only signout*/
    return (
      /*on click, runs setRoute as 'signout'*/
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
          <p
          onClick={() => setRoute("landing")}
          className="f4 link dim black underline pa2 pointer"
        >
          Landing Page
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
        <p
          onClick={onSignOut}
          className="f4 link dim black underline pa2 pointer"
        >
          Sign Out
        </p>
      </nav>
    );
  } else {
    /* if ifLogin false, show signin and register*/
    return (
      /*on click, runs setRoute as 'signout' or 'register'*/
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => setRoute("landing")}
          className="f4 link dim black underline pa2 pointer"
        >
          Landing Page
        </p>
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
