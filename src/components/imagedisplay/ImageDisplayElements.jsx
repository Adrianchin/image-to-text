import styled from "styled-components";

export const ImageContainer = styled.div`
  padding: 25px;
  position: relative;
  transition: all 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 0px;
  margin-bottom: 0px;
  z-index: 1;
  border-radius: 0px;
`;
export const ImageBackground = styled.div`
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