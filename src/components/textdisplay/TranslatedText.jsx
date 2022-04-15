import React from "react";
import {
  TextContainer,
  TextBackground,
} from "./TextElements";

function TranslatedText(props) {
  const translatedText = props.translatedText;

  return (
    <>
      {translatedText != null 
      ?(
          <TextContainer>
            <TextBackground/>
            <h5 className="center">{`${translatedText}`}</h5>
          </TextContainer>
      ) : (
        <></>
      )}
    </>
  );
}

export default TranslatedText;
