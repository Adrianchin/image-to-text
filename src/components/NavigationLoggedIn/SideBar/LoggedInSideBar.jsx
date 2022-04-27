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

const signoutEndpoint = "http://localhost:3000/users/signout";
const loginHomeLink = "/home";
const profileLink = "/profile";
const uploadLink = "/uploadfile";
const logoutHomeLink ="/";

const LoggedInSideBar = ({ isOpen, toggle }) => {

  let navigate = useNavigate();
  
  function signOut(){
    async function signOutUser(){
      try{
        const response = await fetch(signoutEndpoint, {
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
    navigate(logoutHomeLink);
  }

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to={loginHomeLink} onClick={toggle}>
            Home
          </SidebarLink>
          <SidebarLink to={profileLink} onClick={toggle}>
            My Profile
          </SidebarLink>
          <SidebarLink to={uploadLink} onClick={toggle}>
            Upload Image
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to={logoutHomeLink} onClick = {signOut}>Sign Out</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default LoggedInSideBar;
