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
  const[imageText, setImageText] = useState("");

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

  //Loads origonal image size for ratio

//New Async Await function, googleData has the information from the API. Remember, async makes everything in it async, but everything outside is NOT. Await means anything below it awaits.
const onImageSubmit = () => {
      let data = JSON.stringify({
        link: input
      });

      //creats variables for function (placeholder) Image Ratio=1 because if its 0, it will n/0. Might need to fix later
      var img = new Image();
      var originalHeight;
      var originalWidth;
      var imageRatioWidth=1;
      var imageRatioHeight=1;

      //loads hyperlink image properties
      img.onload = function(){
      originalHeight = img.height;
      originalWidth = img.width;
      console.log("this is original height of the image:", originalHeight);
      console.log("this is original width of the image:", originalWidth);
      }
      img.src = input;
    
      //Async fetch
    async function fetchImageInfo() {
      const response = await fetch('http://localhost:3000/image', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: data
      })
      const imageInformation = await response.json();

      //Calculates the image displayed on page
      const image = document.getElementById("inputimage");
      var imageWidth = image.width;
      var imageHeight = image.height;
      console.log("image width:", imageWidth, ", image height:", imageHeight);

      //Calculates ratio for page/original
      imageRatioWidth=imageWidth/originalWidth;
      imageRatioHeight=imageHeight/originalHeight;

      console.log("This is image ratio width",imageRatioWidth);
      console.log("This is image ratio width",imageRatioHeight);

      const imageBox={
      top: imageHeight-imageInformation[0].boundingPoly.vertices[3].y*imageRatioHeight,
      right: imageWidth-imageInformation[0].boundingPoly.vertices[1].x*imageRatioWidth,
      left: imageInformation[0].boundingPoly.vertices[0].x*imageRatioWidth,
      bottom: imageInformation[0].boundingPoly.vertices[0].y*imageRatioHeight
      };
      
      setBox(imageBox);
      setGoogleData(imageInformation);
      setImageText(imageInformation[0].description);
    };
  fetchImageInfo();
};
console.log("This is google data in box state", box);
console.log("Fetched GoogleData", googleData);
console.log("Image Text", imageText);

const JapaneseText = () => {
  return(
    <div className = "center">
      <h3>{`This is the image text`}</h3>
      <h5>{`${imageText}`}</h5>
    </div>
  );
}

const ImageWithText = () => {  
  return(
    <div className = "center">
      <div className = "absolute">
        <img id="inputimage" src={imageURL} width='800px' height='auto'/>
        <div className = "boundingbox" 
        style={{top: box.top, right: box.right, left: box.left, bottom: box.bottom}}></div>
      </div>
    </div>
  );
};

const onButtonSubmit = () => {
    setImageURL(input);
    onImageSubmit();
  };
// console.log("imageURL is", imageURL);

  const onImageInput = (event) => {
    setInput(event.target.value);
  };
//  console.log("Input is", input);

return (
  <div>
    <p className = 'f3 center'>
        Test for google api
    </p>
    <JapaneseText/>
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
};

export default App;
