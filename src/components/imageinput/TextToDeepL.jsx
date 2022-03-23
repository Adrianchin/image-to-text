import React, {useState} from 'react';

function TextToDeepL(props) {
    const setTranslatedText=props.setTranslatedText;
    const translatedText=props.translatedText;
    const imageText=props.imageText; 

    //Text Input for Json.
    const [textInput, setTextInput] = useState('');

    function onTextSubmit() {
        let textData = JSON.stringify({
        textFromImage: textInput
        });
        
        async function fetchTextTranslation() {
        const response = await fetch(`http://localhost:3000/textfortranslation`, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: textData
        })
        const translatedTextInfo = await response.json();
        setTranslatedText(translatedTextInfo.translations[0].text);
        };
        fetchTextTranslation();
    };

  const onTextButtonSubmit = () => {
    onTextSubmit();
  };

  const onTextInput = (event) => {
    setTextInput(event.target.value);
  };
  //console.log("Text input is", textInput);
  
  

  return(
    <div>
        <p className = 'f3 center'>
        Test for Google Image api
        </p>
            <div>
                <h3>{`This is the image text`}</h3>
                <h5>{`${imageText}`}</h5>
            </div>
            <div>
                <h3>{`This is the translated text`}</h3>
                <h5>{`${translatedText}`}</h5>
            </div>
        <div>
        <p className = 'f3 center'>
          Test for DeepL api
        </p>
            <div className='center'>
                <div 
                className='form center pa4 br3 shadow-5'
                >
                <input 
                className='f4 pa2 w-70 center' 
                type='text' 
                onChange={onTextInput}/>
                <button 
                className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
                onClick={onTextButtonSubmit}
                >
                    Translation Text Please
                </button>
                </div>
            </div>
        </div>
    </div> 
  )
};

export default TextToDeepL;