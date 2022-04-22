import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import { useNavigate } from "react-router-dom";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./LoggedInNavBarElements";

const LoggedInNavbar = ({ toggle }) => {

  let navigate = useNavigate();

  const [scrollNav, setScrollNav] = useState(false);
  //This is the scroll effect. We define the state as fale for scrollNav and make it run true when the window scroll passes 80 pixles in the Y
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  //This is a live update to changeNav that runs changeNav and waits for scroll to >80
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    return () => {
      setScrollNav({});
    }; //required to demount
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  function signOut(){
    async function signOutUser(){
      try{
        const response = await fetch("http://localhost:3000/signout", {
          credentials: 'include',
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({action: "Sign Out"}),
        })
        const signOutReturn = await response.json();
        console.log("Successful Signout! ", signOutReturn);
      }catch(error){
        console.log("Error logging out user", error)
      }
    }
    signOutUser()
    navigate("/");
    //Delete all state stuff
  }

  return (
    <>
      {/* note IconContext.Provider allows you to set the color of all icons in the children in 1 go */}
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/home" onClick={toggleHome}>
              日本語に勉強しましょう!
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to="/profile">My Profile</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/uploadfile">Upload Image</NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/" onClick = {signOut}>Sign Out</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default LoggedInNavbar;
