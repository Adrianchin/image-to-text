import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  InputContainer,
  SubmitContainer,
  InputText,
  UploadButton,
} from "./TokenizerElements";

const tokenizeEndpoint = `http://localhost:3000/uploads/tokenizetext`;
const signinLink = "/signin";

function Tokenizer(props) {
  let navigate = useNavigate();
  const setTokenizedText = props.setTokenizedText;

  //Text Input for Json.
  const [textInput, setTextInput] = useState(null);

  function onTextSubmit() {
    let textForTokenizing = JSON.stringify({
      text: textInput,
    });

    async function fetchTokenization() {
      try {
        const response = await fetch(tokenizeEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: textForTokenizing,
          credentials: 'include',
        });
        const tokenizedText = await response.json();
        if(response.status===401){
          console.log("Error user needs to sign in", response.status);
          navigate(signinLink);
        }
        setTokenizedText(tokenizedText);
        //console.log(tokenizedText);
      } catch (error) {
        console.log("Error fetching Token response for text, try again", error);
        setTokenizedText(null)
      }
    }
    fetchTokenization();
  }

  function onTextInput(event) {
    setTextInput(event.target.value);
  }

  return (
    <InputContainer>
      <SubmitContainer>
        <InputText type="text" onChange={onTextInput} />
        <UploadButton onClick={onTextSubmit}>
          Text to Tokenize
        </UploadButton>
      </SubmitContainer>
    </InputContainer>
  );
}

export default Tokenizer;
