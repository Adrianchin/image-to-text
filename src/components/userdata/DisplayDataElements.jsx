//Delete this - Moved to Pages

import styled from "styled-components";

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