import React, {useState, useEffect} from 'react';
import ImageInput from './components/imageinput';
import 'tachyons';
import './App.css';

function App() {
/*Note setstate is async, remember that 
you want to use consol log (or other stuff inside code) 
outside the function, otherwise it will return with async properties*/

  const [input, setInput] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [googleData, setGoogleData] = useState('');
  const [box, setBox] = useState("");

/* Old promise function below
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
*/

//New Async Await function, googleData has the information from the API
const onImageSubmit = () => {
  let data = JSON.stringify({
    link: input
  });
  async function fetchImageInfo() {
    const response = await fetch('http://localhost:3002/image', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: data
    })
    const imageInformation = await response.json();
    //console.log("This is the image info returned", imageInformation);
    setGoogleData(imageInformation);
  }
  fetchImageInfo();
}

/*
var img = new Image();
  img.onload = function () {
  var imageWidth = this.width;
  var imageHeight = this.height;
  console.log("image width:", imageWidth, ", image height:", imageHeight)
  console.log("this is one value", googleData[0].boundingPoly.vertices)
    return {
    topRow: imageHeight-googleData[3].boundingPoly.vertices[0].y,
    rightColumn: imageWidth-googleData[0].boundingPoly.vertices[1].x,
    leftColumn: googleData[0].boundingPoly.vertices[0].x,
    bottomRow: googleData[0].boundingPoly.vertices[0].y
    };
  }
  img.src = imageURL;
*/
const ImageWithText = () => {  
  return(
    <div className = "center">
      <div className = "absolute">
        <img id="inputimage" src={imageURL}/>
        <div className = "boundingbox" style={{top: 1, right: 1, left: 1, bottom: 1}}></div>
      </div>
    </div>
  );
}


//Note: We place console log outside the async function because anything inside it will be async, so it will consol log earty! We only wany after everything runs!!
console.log("Fetched setGoogleData", googleData)

  const onButtonSubmit = () => {
    setImageURL(input);
    onImageSubmit();
  }
  console.log("imageURL is", imageURL);

  const onImageInput = (event) => {
    setInput(event.target.value);
  };
  console.log("Input is", input);

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
    <div>
      <ImageWithText/>
    </div>
  </div>
  );
}

export default App;
