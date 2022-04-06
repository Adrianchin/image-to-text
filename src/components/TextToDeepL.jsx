import React, { useState } from "react";

function TextToDeepL(props) {
  const setTranslatedText = props.setTranslatedText;

  //Text Input for Json.
  const [textInput, setTextInput] = useState("");

  function onTextSubmit() {
    let textData = JSON.stringify({
      textFromImage: textInput,
    });

    async function fetchTextTranslation() {
      try{
        const response = await fetch(`http://localhost:3000/textfortranslation`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: textData,
        });
        const translatedTextInfo = await response.json();
        setTranslatedText(translatedTextInfo.translations[0].text);
      }catch (error) {
        console.log(
          "Error fetching Token response for text, try again", error
        );
      }
    }
    fetchTextTranslation();
  }

  const onTextButtonSubmit = () => {
    onTextSubmit();
  };

  const onTextInput = (event) => {
    setTextInput(event.target.value);
  };

  return (
    <div className="center">
      <div className="form center pa4 br3 shadow-5">
        <input
          className="f4 pa2 w-70 center"
          type="text"
          onChange={onTextInput}
        />
        <button
          className="w-30 grow f5 link ph3 pv1 dib white bg-light-purple"
          onClick={onTextButtonSubmit}
        >
          Text to Translation
        </button>
      </div>
    </div>
  );
}

export default TextToDeepL;
