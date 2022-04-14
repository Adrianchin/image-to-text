import styled from 'styled-components';

export const GeneralContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: top;
    height:100%;
    min-height:100vh;
    width:100%;
    align-items: center;
    background: #010606;
    background-size: cover;

`;

export const GeneralColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: center;
    background: #ffffff;
    padding: 0 50px;
    width:85%;
    height:100%;
    min-height:100vh;
`;

export const InputWrapper = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: stretch;
    grid-gap: 10px;
    padding: 10px;

    //Becomes 1 columns on small screens
    @media screen and (max-width: 1400px){
        grid-template-columns: 1fr;
    }
`;

export const PictureColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: center;
    background: #ffffff;
`;

export const SignInContainer = styled.div`
    background-image: url(${require("../main_page_images/geisha.jpg")});
    background-size: cover;
    opacity: 1;
    justify-content: center;
    background-attachment: fixed;
    background-position:center;
    background-repeat: no-repeat;
    position: fixed;
    z-index: -1;
    top: 0;
    width: 100%;
    left: 0;
    right: 0;
    bottom: 0%;
`;