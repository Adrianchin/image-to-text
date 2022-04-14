import React, { useState } from "react";

function Tokenizer(props) {
  const setTokenizedText = props.setTokenizedText;

  //Text Input for Json.
  const [textInput, setTextInput] = useState(null);

  function onTextSubmit() {
    let textForTokenizing = JSON.stringify({
      text: textInput,
    });

    async function fetchTokenization() {
      try{
        const response = await fetch(`http://localhost:3000/tokenizetext`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: textForTokenizing,
        });
        const tokenizedText = await response.json();
        setTokenizedText(tokenizedText);
        //console.log(tokenizedText);
      }catch (error) {
        console.log(
          "Error fetching Token response for text, try again", error
        );
      }
    }
    fetchTokenization();
  }

  function onTextButtonSubmit() {
    onTextSubmit();
  };

  function onTextInput(event) {
    setTextInput(event.target.value);
  };

  return (
    <div className="center">
      <div className="form center pa4 br3 shadow-5">
        <input
          className="f5 pa2 w-70 center"
          type="text"
          onChange={onTextInput}
        />
        <button
          className="w-30 grow f6 link ph3 pv1 dib white bg-black"
          onClick={onTextButtonSubmit}
        >
          Text to Tokenized 
        </button>
      </div>
    </div>
  );
}

export default Tokenizer;
