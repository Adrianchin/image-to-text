import React from 'react'
import { animateScroll as scroll} from 'react-scroll/modules';
import {
    FooterContainer, 
    FooterWrap, 
    FooterLinksContainer, 
    FooterLinksWrapper, 
    FooterLinkItems, 
    FooterLinkTitle, 
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements';
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin
} from 'react-icons/fa'

function Footer() {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle> About Us</FooterLinkTitle>
                            <FooterLink to="/"> How it works</FooterLink>
                            <FooterLink to="/"> Testimonials</FooterLink>
                            <FooterLink to="/"> Careers</FooterLink>
                            <FooterLink to="/"> Investors</FooterLink>
                            <FooterLink to="/"> Terms of Service</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                    <FooterLinkTitle> Contact Us</FooterLinkTitle>
                            <FooterLink to="/"> Contact</FooterLink>
                            <FooterLink to="/"> Support</FooterLink>
                            <FooterLink to="/"> Destinations</FooterLink>
                            <FooterLink to="/"> Sponsorships</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>

                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle> Videos</FooterLinkTitle>
                            <FooterLink to="/"> Submit Video</FooterLink>
                            <FooterLink to="/"> Ambassadors</FooterLink>
                            <FooterLink to="/"> Agency</FooterLink>
                            <FooterLink to="/"> Influiencer</FooterLink>
                            <FooterLink to="/"> Inquiery</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        {/* Note: This social media tags should be used as <a> tags, as they link to something outside your site. Only use Router if it is internal! */}
                    <FooterLinkTitle> Social Media</FooterLinkTitle>
                            <FooterLink to="/"> Instagram</FooterLink>
                            <FooterLink to="/"> Facrbook</FooterLink>
                            <FooterLink to="/"> Youtube</FooterLink>
                            <FooterLink to="/"> Twitter</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/" onClick={toggleHome}>
                        Dolla    
                    </SocialLogo>
                    <WebsiteRights>
                        Dolla © {new Date().getFullYear()}
                        All Rights Reserved.
                    </WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="//www.facebook.com/" target="_blank" aria-label="Facebook">
                            <FaFacebook/>    
                        </SocialIconLink>
                        <SocialIconLink href="//wwww.instagram.com/" target="_blank" aria-label="Instagram">
                            <FaInstagram/>    
                        </SocialIconLink>
                        <SocialIconLink href="//www.youtube.com/" target="_blank" aria-label="Youtube">
                            <FaYoutube/>    
                        </SocialIconLink>
                        <SocialIconLink href="//www.twitter.com/" target="_blank" aria-label="Twitter">
                            <FaTwitter/>    
                        </SocialIconLink>
                        <SocialIconLink href="//www.linkedin.com/" target="_blank" aria-label="Linkedin">
                            <FaLinkedin/>    
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer