import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';
import {Link as LinkScroll} from 'react-scroll';
import {Link as LinkRoute} from 'react-router-dom';

export const SidebarContainer=styled.aside`
  position: fixed;
  z-index: 999;
  width:100%;
  height: 100%;
  background-color: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  //This is a way to write a function in styles. Here, we are declaring opacency as a function that accepts isOpen, and if isOpen=true, 100% (show), else 0% (do not show)
  opacity: ${({isOpen})=>(isOpen ? '100%': '0')};
  //This is a way to write a function in styles. Here, we are declaring the top (to show) as a function that accepts isOpen, and if isOpen=true, 100% (show), else 0% (do not show)
  top: ${({isOpen})=>(isOpen ? '0' : '-100%')};

`;

export const CloseIcon = styled(FaTimes)`
    color: #fff;  
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
  color:#fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1ft;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

//for showing on mobile
  @media screen and (max-width: 480px){
    grid-template-rows: repeat()(6, 60px);
  }
`;

export const SidebarLink = styled(LinkScroll)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  line-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #16B8BB;
    transition: 0.2s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;  
`;

export const SidebarRoute = styled(LinkRoute)`
  border-radius: 50px;
  background: #16B8BB;
  white-space: nowrap;
  padding: 16px 64px;
  color: #010606;
  font-size: 16px;
  outline: none;
  boarder: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;