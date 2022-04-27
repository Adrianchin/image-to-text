import styled from "styled-components";

//General items
export const NavBarPlaceholder = styled.div`
  margin-top: 80px;
`;

//SignIn Elements
export const SignInContainer = styled.div`
  min-height: 692px;
  overflow: hidden;
  background-image: url(${require("../main_page_images/geisha.jpg")});
  background-size: cover;
  opacity: 1;
  justify-content: center;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  position: fixed;
  z-index: -1;
  top: 0;
  width: 100%;
  left: 0;
  right: 0;
  bottom: 0%;
`;

export const RegisterContainer = styled.div`
  min-height: 692px;
  overflow: hidden;
  background-image: url(${require("../main_page_images/town.jpg")});
  background-size: cover;
  opacity: 1;
  justify-content: center;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  position: fixed;
  z-index: -1;
  top: 0;
  width: 100%;
  left: 0;
  right: 0;
  bottom: 0%;
`;

//Profile Elements

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: top;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  align-items: center;
  background: #010606;
  background-size: cover;
  z-index: -2;
`;

export const ProfileColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  background: #ffffff;
  padding: 0 50px;
  width: 85%;
  height: 100%;
  min-height: 100vh;
  z-index: 0;
  @media screen and (max-width: 700px) {
    width: 100%;
    padding: 0 0px;
  }
`;

export const ProfileBackgrounImage = styled.div`
  background-image: url(${require("../main_page_images/thousand_gate_shrine_2.jpg")});
  background-size: cover;
  opacity: 0.9;
  justify-content: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  position: fixed;
  z-index: -1;
  top: 0%;
  width: 85%;
  bottom: 0%;
  box-shadow: inset 0 0px 10px 3px #7a7a7a;
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

//UploadFile Elements

export const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: top;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  align-items: center;
  background: #010606;
  background-size: cover;
  z-index: -2;
`;

export const UploadColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  background: #ffffff;
  padding: 0 50px;
  width: 85%;
  height: 100%;
  min-height: 100vh;
  z-index: 0;
  @media screen and (max-width: 700px) {
    width: 100%;
    padding: 0 0px;
  }
`;

export const UploadBackgrounImage = styled.div`
  background-image: url(${require("../main_page_images/writtentoken.jpg")});
  background-size: cover;
  opacity: 0.8;
  justify-content: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  position: fixed;
  z-index: -1;
  top: 0%;
  width: 85%;
  bottom: 0%;
  box-shadow: inset 0 0px 10px 3px #7a7a7a;

  @media screen and (max-width: 700px) {
    width: 100%;
  }
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
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

//for errors on tokenizer
export const TokenizedTableContainer = styled.div`
  padding: 25px;
  position: relative;
  transition: all 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 5px;
  margin-bottom: 0px;
  z-index: 1;
  border-radius: 0px;
`;
export const TokenizerTableBackground = styled.div`
  background: #fff;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0.9;
  z-index: -1;
  border-radius: 0px;
  @media screen and (max-width: 500px) {
    opacity: 1;
  }
`;

//Display Data Elements
export const DisplayDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  background: #010606;
  background-size: cover;
  z-index: -2;
`;

export const DisplayDataColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  background: #ffffff;
  padding: 0 50px;
  width: 85%;
  height: 100%;
  min-height: 100vh;
  z-index: 0;
  @media screen and (max-width: 700px) {
    width: 100%;
    padding: 0 0px;
  }
`;

export const DisplayDataBackgrounImage = styled.div`
  background-image: url(${require("../main_page_images/falltemple.jpg")});
  background-size: cover;
  opacity: 0.9;
  justify-content: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  position: fixed;
  z-index: 0;
  top: 0%;
  width: 85%;
  bottom: 0%;
  box-shadow: inset 0 0px 10px 3px #7a7a7a;

  @media screen and (max-width: 700px) {
    width: 100%;;
  }
`;