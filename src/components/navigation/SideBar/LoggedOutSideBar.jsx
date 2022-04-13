import React from 'react';
import {
  SidebarContainer, 
  Icon, 
  CloseIcon, 
  SidebarWrapper, 
  SidebarLink, 
  SidebarMenu, 
  SideBtnWrap, 
  SidebarRoute} from './LoggedOutSideBarElements';

const LoggedOutSideBar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="upload" onClick={toggle}>
            Upload
            </SidebarLink>
            <SidebarLink to="translation" onClick={toggle}>
            Translate
            </SidebarLink>
            <SidebarLink to="services" onClick={toggle}>
            Services
            </SidebarLink>
            <SidebarLink to="tokenizing" onClick={toggle}>
            Tokenize
            </SidebarLink>
            <SidebarLink to="profiles" onClick={toggle}>
            Storage
            </SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute to="/signin">
              Sign In
            </SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default LoggedOutSideBar