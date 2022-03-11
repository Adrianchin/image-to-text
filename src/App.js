import React, {useState} from 'react';
import ImageInput from './components/imageinput';
import 'tachyons';
import './App.css';

function App() {
/*Note setstate is async, remember that 
you want to use consol log (or other stuff inside code) 
outside the function, otehrwise it will return with async properties*/

  const [input, setInput] = useState('');
  const [imageURL, setImageURL] = useState('');

  const onImageSubmit = () => {
    let data = JSON.stringify({
      link: input
    });
    console.log("This is data to be put into my post request", data)
    console.log("On image submit", input)
    fetch('http://localhost:3000/image', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: data
    })
    .then(response => response.json())
    .then(console.log)
  }

  const onImageInput = (event) => {
    setInput(event.target.value);
  };

  console.log("Input is", input);

  const onButtonSubmit = () => {
    setImageURL(input);
    onImageSubmit();
  }

  console.log("imageURL is", imageURL);

return (
  <div>
    <p className = 'f3 center'>
        Test for google api
    </p>
    <div className='center'>
      <div 
      className='form center pa4 br3 shadow-5'
      >
        <input 
        className='f4 pa2 w-70 center' 
        type='text' 
        onChange={onImageInput}/>
        <button 
        className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
        onClick={onButtonSubmit}
        >
          Img URL Please
        </button>
      </div>
    </div>
  </div>
  );
}

export default App;
