import styled from "styled-components";

//SignIn Elements
export const SignInContainer = styled.div`
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

export const NavBarPlaceholder = styled.div`
  margin-top: 80px;
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
  box-shadow: inset 0 0px 30px 3px #7a7a7a;
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
  box-shadow: inset 0 0px 30px 3px #7a7a7a;

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

export const UploadPictureColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  background: #ffffff;
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
  box-shadow: inset 0 0px 30px 3px #7a7a7a;
`;
/* Remove, see component
export const DisplayPictureColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  background: #ffffff;
`;

export const UpdateButton = styled.button`
  border-radius: 5px;
  background: #000000;
  white-space: nowrap;
  padding: 10px 10px;
  color: #ffffff;
  font-size: 14px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    background: #13dbdf;
  }
`;
export const InputContainer = styled.div`
  height: auto;
  width: 100%;
  grid-template-columns: 1fr 8fr;
  z-index: 0;
  margin-top: 80px;
`;
*/