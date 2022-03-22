import React, {useState} from 'react';
import ImageInput from './components/imageinput';
import ImageSubmit from './components/imageinput/ImageSubmit';
import 'tachyons';
import './App.css';

function App() {
/*Note setstate is async, remember that 
you want to use consol log (or other stuff inside code) 
outside the function, otherwise it will return with async properties*/

  //Live update of input for image url. May be dubplicated, see imageURL. May be changed to global var?
  const [imageInput, setImageInput] = useState('');
  //Displays the image URL of the picture. May not need, combine with imageInput? Linked in image. May be redundant. 
  const [imageURL, setImageURL] = useState('');
  //Text Input for Json. May be changed to global var? 
  const [textInput, setTextInput] = useState('');

  //Displays translated text from DeepL
  const [translatedText, setTranslatedText] = useState('');
  //Displays box from Google API
  const [box, setBox] = useState("");
  //Displays to user what is on the image
  const [imageText, setImageText] = useState("");

  //Global variables
  let imageWidth;
  let imageHeight;
  //let GoogleData;
  let imageBox;
  
  //Used for calculating the original picture diaplayed, need to be global for html and upload
  let originalHeight;
  let originalWidth;

//New Async Await function, googleData has the information from the API. Remember, async makes everything in it async, but everything outside is NOT. Await means anything below it awaits.
const onImageSubmit = () => {
      let imageData = JSON.stringify({
        link: imageInput
      });

      //creates variables for function (placeholder) for html
      let img = new Image();

      img.onload = function(){
      originalHeight = img.height;
      originalWidth = img.width;
      }
      img.src = imageInput;
    
      //Async fetch for google image to text
    async function fetchImageInfo() {
      try{
      const response = await fetch('http://localhost:3000/imagelinkphoto', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: imageData
      })
      const imageInformation = await response.json();

      imageBox={
      top: imageInformation[0].boundingPoly.vertices[3].y,
      right: imageInformation[0].boundingPoly.vertices[1].x,
      left: imageInformation[0].boundingPoly.vertices[0].x,
      bottom: imageInformation[0].boundingPoly.vertices[0].y
      };

      //GoogleData=imageInformation;
      ImageSubmitBoxCalculation();
      setImageText(imageInformation[0].description);
    } catch(error) {
      console.log("Error fetching API response for image, try again")
    };
  }
  fetchImageInfo();
};

//console.log("This is google data in box state", box);
//console.log("Fetched GoogleData", googleData);
//console.log("Image Text", imageText);

const onTextSubmit = () => {
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

//tests for translated text
console.log("This is the translated text:", translatedText);

//Outputs

const JapaneseText = () => {
  return(
    <div className = "center">
      <div>
        <h3>{`This is the image text`}</h3>
        <h5>{`${imageText}`}</h5>
      </div>
      <div>
        <h3>{`This is the translated text`}</h3>
        <h5>{`${translatedText}`}</h5>
      </div>
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

const ImageSubmitBoxCalculation = () => {
  //Calculates the image displayed on page, called with global variables imageWidth and imageHeight
  const image = document.getElementById("inputimage");
  imageWidth = image.width;
  imageHeight = image.height;
  console.log("image width:", imageWidth, ", image height:", imageHeight);

  //creats variables for function (placeholder) Image Ratio=1 because if its 0, it will n/0. Might need to fix later
  let imageRatioWidth=1;
  let imageRatioHeight=1;

  imageRatioWidth=imageWidth/originalWidth;
  imageRatioHeight=imageHeight/originalHeight;
  console.log(originalHeight);
   setBox({
    top: imageHeight-imageBox.top*imageRatioHeight,
    right: imageWidth-imageBox.right*imageRatioWidth,
    left: imageBox.left*imageRatioWidth,
    bottom: imageBox.bottom*imageRatioHeight
    });
}


const onImageButtonSubmit = () => {
  //Note: I think this is async, so I cannot use imageInput as it is in que, and onImageSubmit runs and imageInput is old!
  //This is reset to setState because we need to render the image!! Otherwise dont need this.
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
  //calls onTextSubmit for API send
  onTextSubmit();
};

const onTextInput = (event) => {
  setTextInput(event.target.value);
};
//console.log("Text input is", textInput);

return (
  <div>
    <div>
    <ImageSubmit/>
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
