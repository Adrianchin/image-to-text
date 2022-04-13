import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll';
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavBarElements';

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)
//This is the scroll effect. We define the state as fale for scrollNav and make it run true when the window scroll passes 80 pixles in the Y
    const changeNav=() => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }
//This is a live update to changeNav that runs changeNav and waits for scroll to >80
    useEffect( ()=> {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
    <>
    {/* note IconContext.Provider allows you to set the color of all icons in the children in 1 go */}
    <IconContext.Provider value={{color: '#fff'}}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        {/* Note that links to="..." refer to the data sections, ie. getelementbyid. Finds by id=... */}
                        <NavLinks 
                        to="upload"
                        smooth={true}
                        duration={500}
                        /* spy tells you which element you are clicking on */
                        spy={true}
                        exact='true'
                        /* -80 is used to offset the toolbar */
                        offset={-80}
                        >
                            Upload
                        </NavLinks>
                    </NavItem>
                    {/* Note that links to="..." refer to the data sections, ie. getelementbyid. Finds by id=... */}
                    <NavItem>
                        <NavLinks 
                        to="translation"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >
                            Translate
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        {/* Note that links to="..." refer to the data sections, ie. getelementbyid. Finds by id=... */}
                        <NavLinks 
                        to="services" 
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >
                            Services
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        {/* Note that links to="..." refer to the data sections, ie. getelementbyid. Finds by id=... */}
                        <NavLinks 
                        to="tokenizing" 
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >
                            Tokenize
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        {/* Note that links to="..." refer to the data sections, ie. getelementbyid. Finds by id=... */}
                        <NavLinks to="profiles"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >
                            Storage
                        </NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">
                        Sign In
                    </NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar