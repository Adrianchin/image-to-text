import styled from "styled-components";

export const TextContainer = styled.div`
  //background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  border-radius: 0px;
  width: 100%;
  max-height: auto;
  padding: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
  position: relative;
  transition: all 0.2s ease-in-out;
  margin-top: 0px;
  z-index: 1;
`;
export const TextBackground = styled.div`
  background: #fff;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 0px;
  height: 100%;
  width: 100%;
  opacity: 0.9;
  z-index: -1;
`;
