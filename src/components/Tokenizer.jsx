import React, {useState} from 'react';

function Tokenizer() {
    
    //Text Input for Json.
    const [textInput, setTextInput] = useState('');
    const [tokenizedText, setTokenizedText] = useState('');

    function onTextSubmit() {
        let textForTokenizing = JSON.stringify({
        text: textInput
        });
        
        async function fetchTokenization() {
        const response = await fetch(`http://localhost:3000/tokenizetext`, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: textForTokenizing
        })
        const tokenizedText = await response.json();
        setTokenizedText(tokenizedText);
        console.log(tokenizedText);
        };
        fetchTokenization();
    };

  const onTextButtonSubmit = () => {
    onTextSubmit();
  };

  const onTextInput = (event) => {
    setTextInput(event.target.value);
  };
  

  return(
    <div>
        <p className = 'f3 center'>
        Tokenized Text
        </p>
            <div>
                <h3>{`This is the tokenized text`}</h3>
                <h5>{`${tokenizedText}`}</h5>
            </div>
        <div>
        <p className = 'f3 center'>
          Tokenized Text Input
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
                    Tokenized Text Please
                </button>
                </div>
            </div>
        </div>
    </div> 
  )
};

export default Tokenizer;