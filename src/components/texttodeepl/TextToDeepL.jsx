import React, { useState } from "react";
import {
  InputContainer,
  SubmitContainer,
  InputText,
  UploadButton,
} from "./TextToDeepLElements";

function TextToDeepL(props) {
  const setTranslatedText = props.setTranslatedText;

  //Text Input for Json.
  const [textInput, setTextInput] = useState("");

  function onTextSubmit() {
    let textData = JSON.stringify({
      textFromImage: textInput,
    });

    async function fetchTextTranslation() {
      try {
        const response = await fetch(
          `http://localhost:3000/textfortranslation`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: textData,
          }
        );
        const translatedTextInfo = await response.json();
        setTranslatedText(translatedTextInfo.translations[0].text);
      } catch (error) {
        console.log("Error fetching Token response for text, try again", error);
      }
    }
    fetchTextTranslation();
  }

  function onTextButtonSubmit() {
    onTextSubmit();
  }

  function onTextInput(event) {
    setTextInput(event.target.value);
  }

  return (
    <InputContainer>
      <SubmitContainer>
        <InputText type="text" onChange={onTextInput} />
        <UploadButton onClick={onTextButtonSubmit}>
          Text to Translate
        </UploadButton>
      </SubmitContainer>
    </InputContainer>
  );
}

export default TextToDeepL;
