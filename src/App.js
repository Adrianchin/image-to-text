import React, {useState, useEffect} from 'react';
import ImageInput from './components/imageinput';
import 'tachyons';
import './App.css';

function App() {
/*Note setstate is async, remember that 
you want to use consol log (or other stuff inside code) 
outside the function, otherwise it will return with async properties*/

  const [imageInput, setImageInput] = useState('');
  const [textInput, setTextInput] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [textToDeepL, setTextToDeepL] = useState('');
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
        link: imageInput
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
      // console.log("this is original height of the image:", originalHeight);
      // console.log("this is original width of the image:", originalWidth);
      }
      img.src = imageInput;
    
      //Async fetch
    async function fetchImageInfo() {
      try{
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

     // console.log("This is image ratio width",imageRatioWidth);
     // console.log("This is image ratio width",imageRatioHeight);

      const imageBox={
      top: imageHeight-imageInformation[0].boundingPoly.vertices[3].y*imageRatioHeight,
      right: imageWidth-imageInformation[0].boundingPoly.vertices[1].x*imageRatioWidth,
      left: imageInformation[0].boundingPoly.vertices[0].x*imageRatioWidth,
      bottom: imageInformation[0].boundingPoly.vertices[0].y*imageRatioHeight
      };
      
      setBox(imageBox);
      setGoogleData(imageInformation);
      setImageText(imageInformation[0].description);
    } catch(error) {
      console.log("Error fetching API response for image, try again")
      };
    }
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
        <img id="inputimage" src={imageURL} width='600px' height='auto'/>
        <div className = "boundingbox" 
        style={{top: box.top, right: box.right, left: box.left, bottom: box.bottom}}></div>
      </div>
    </div>
  );
};

const onImageButtonSubmit = () => {
  //Note: I think this is async, so I cannot use imageInput as it is in que, and onImageSubmit runs and imageInput is old!
    setImageURL(imageInput);
    //calls onImageSubmit for API send
    onImageSubmit();
  };
// console.log("imageURL is", imageURL);

  const onImageInput = (event) => {
    setImageInput(event.target.value);
  };
//  console.log("Image Input is", imageInput);

const onTextButtonSubmit = () => {
  setTextToDeepL(textInput);
  //calls onTextSubmit for API send
  //onTextSubmit();
};
// console.log("Text to DeepL is", imageURL);

const onTextInput = (event) => {
  setTextInput(event.target.value);
};
//  console.log("Input is", input);

return (
  <div>
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
            Img URL Please
          </button>
        </div>
      </div>
    </div>
    <div>
      <p className = 'f3 center'>
          Test for Google Image api
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
          onClick={onImageButtonSubmit}
          >
            Img URL Please
          </button>
        </div>
      </div>
      <div>
        <ImageWithText/>
      </div>
    </div>
  </div>
  );
};

export default App;
