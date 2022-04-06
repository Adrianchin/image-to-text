import React from "react";

function Navigation(props) {
  const setRoute = props.setRoute;
  const ifLogin = props.ifLogin;

  if (ifLogin) {
    /* if ifLogin true, show only signout*/
    return (
      /*on click, runs setRoute as 'signout'*/
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => setRoute("signout")}
          className="f4 link dim black underline pa2 pointer"
        >
          Sign Out
        </p>
        <p
          onClick={() => setRoute("mainpage")}
          className="f4 link dim black underline pa2 pointer"
        >
          To Main Page
        </p>
      </nav>
    );
  } else {
    /* if ifLogin false, show signin and register*/
    return (
      /*on click, runs setRoute as 'signout' or 'register'*/
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
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
        <p
          onClick={() => setRoute("mainpage")}
          className="f4 link dim black underline pa2 pointer"
        >
          To Main Page
        </p>
      </nav>
    );
  }
}

export default Navigation;
