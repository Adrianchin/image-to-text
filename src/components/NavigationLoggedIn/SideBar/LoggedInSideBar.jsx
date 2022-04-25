import React from "react";
import { useNavigate } from "react-router-dom";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu,
  SideBtnWrap,
  SidebarRoute,
} from "./LoggedInSideBarElements";

const LoggedInSideBar = ({ isOpen, toggle }) => {

  let navigate = useNavigate();
  
  function signOut(){


    async function signOutUser(){
      try{
        const response = await fetch("http://localhost:3000/users/signout", {
          credentials: 'include',
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({action: "Sign Out"}),
        })
        const signOutReturn = await response.json();
        console.log(signOutReturn);
      }catch(error){
        console.log("Error logging out user", error)
      }
    }
    signOutUser()
    navigate("/");
  }

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/home" onClick={toggle}>
            Home
          </SidebarLink>
          <SidebarLink to="/profile" onClick={toggle}>
            My Profile
          </SidebarLink>
          <SidebarLink to="/uploadfile" onClick={toggle}>
            Upload Image
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/" onClick = {signOut}>Sign Out</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default LoggedInSideBar;
