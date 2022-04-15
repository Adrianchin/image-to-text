import React from "react";
import { TextContainer, TextBackground } from "./TextElements";

function ImageText(props) {
  const imageText = props.imageText;

  return (
    <>
      {imageText != null ? (
        <TextContainer>
          <h5 className="center">{`${imageText}`}</h5>
          <TextBackground />
        </TextContainer>
      ) : (
        <></>
      )}
    </>
  );
}

export default ImageText;
