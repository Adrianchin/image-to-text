import React from "react";
import {
  TextContainer,
} from "./TextElements";

function TranslatedText(props) {
  const translatedText = props.translatedText;

  return (
    <>
      {translatedText != null 
      ?(
          <TextContainer>
            <h5 className="center">{`${translatedText}`}</h5>
          </TextContainer>
      ) : (
        <></>
      )}
    </>
  );
}

export default TranslatedText;
