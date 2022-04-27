import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  InputContainer,
  SubmitContainer,
  InputText,
  UploadButton,
} from "./TextToDeepLElements";

const translationEndpoint = `http://localhost:3000/uploads/textfortranslation`;
const signinLink = "/signin";

function TextToDeepL(props) {
  let navigate = useNavigate();
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
          translationEndpoint,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: textData,
            credentials: 'include',
          }
        );
        const translatedTextInfo = await response.json();
        if(response.status===401){
          console.log("Error user needs to sign in", response.status);
          navigate(signinLink);
        }
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
