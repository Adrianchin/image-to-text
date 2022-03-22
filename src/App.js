import React, {useState} from 'react';
import ImageInput from './components/imageinput';
import ImageSubmit from './components/imageinput/ImageSubmit';
import 'tachyons';
import './App.css';

//Test, as I cannot get the live loading picture in react to show
import testImage from './myImage-1647915882077.jpg';

function App() {
/*Note setstate is async, remember that 
you want to use consol log (or other stuff inside code) 
outside the function, otherwise it will return with async properties*/

  //Live update of input for image url. May be dubplicated, see imageURL. May be changed to global var?
  const [imageInput, setImageInput] = useState('');
  //Displays the image URL of the picture. I think I need so we dont display the image in a moving text 
  const [imageURL, setImageURL] = useState('');
  //Text Input for Json. May be changed to global var? 
  const [textInput, setTextInput] = useState('');

  //Required to move image size from child to parent
  const [imageSize, setImageSize] = useState('');
  //Required to trigger image function from uploaded image
  const [uploadImageTest, setUploadImageTest] = useState(false);
  //required to send the box from the back end. Can't use the other box as I do not want to upload box and render before updating box again
  const [uploadBox, setUploadBox] = useState("");

  //Displays translated text from DeepL
  const [translatedText, setTranslatedText] = useState('');
  //Displays box from Google API
  const [box, setBox] = useState("");
  //Displays to user what is on the image
  const [imageText, setImageText] = useState("");

//New Async Await function, googleData has the information from the API. Remember, async makes everything in it async, 
//but everything outside is NOT. Await means anything below it awaits.
const onImageSubmit = () => {
      let imageData = JSON.stringify({
        link: imageInput
      });
      
      //Async fetch for google image to text
    async function fetchImageInfo() {
      try{
      const response = await fetch('http://localhost:3000/imagelinkphoto', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: imageData
      })
      const imageInformation = await response.json();
      console.log("This is the return from API:", imageInformation)

      const ImageSubmitBoxCalculation = () => {
        //creates variables for function (placeholder) for html
        var img = new Image();
        img.src = imageInput;
        //IMPORTANT: onload is async, so you need to put shit in it and whatever you are doing with it in the onload function!
        img.onload = function(){
          let originalHeight = img.height;
          let originalWidth = img.width;
          //Calculates the image displayed on page, called with global variables imageWidth and imageHeight
          const image = document.getElementById("inputimage");
          let imageWidth = image.width;
          let imageHeight = image.height;
          //creats variables for function (placeholder) Image Ratio=1 because if its 0, it will n/0. Might need to fix later
          let imageRatioWidth=1;
          let imageRatioHeight=1;
          //Note: Google API is 0,1,2,3, counterclockwise top left, 0,0 is top left. I have to take away the Original height from the bottom value
          imageRatioWidth=imageWidth/originalWidth;
          imageRatioHeight=imageHeight/originalHeight;
          //Updates the box for render
          setBox({
            top: imageInformation[0].boundingPoly.vertices[0].y*imageRatioHeight,
            right: imageWidth-imageInformation[0].boundingPoly.vertices[1].x*imageRatioWidth,
            left: imageInformation[0].boundingPoly.vertices[0].x*imageRatioWidth,
            bottom: (originalHeight-imageInformation[0].boundingPoly.vertices[2].y)*imageRatioHeight
            });
        }
      }
      ImageSubmitBoxCalculation();

      setImageText(imageInformation[0].description);

      //Send to API for translation
      const linkTextSubmit = () => {
        let textData = JSON.stringify({
          textFromImage: imageInformation[0].description
        });
        
        async function fetchTextTranslation() {
          try{
            const response = await fetch(`http://localhost:3000/textfortranslation`, {
              method: "POST",
              headers: {'Content-Type': 'application/json'},
              body: textData
            })
            const translatedTextInfo = await response.json();
            setTranslatedText(translatedTextInfo.translations[0].text);
          }catch(error){
            console.log("Error fetching API response for text, try again")
          };
        };
        fetchTextTranslation();
      };
      linkTextSubmit();
      
    } catch(error) {
      console.log("Error fetching API response for image, try again")
    };
  }
  fetchImageInfo();
};

//Used for manual text input, try to combine, used 3x with just the top changed
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
//console.log("This is the translated text:", translatedText);

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
  //console.log("box dimensions",box)
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

//I need to triger this if I upload, as the function is slightly different from the other calculation. 
//Need to structure like this because of update, render, update requirement.
if (uploadImageTest===true){
  const ImageSubmitBoxCalculationUpload = () => {
    let originalHeight=imageSize.height;
    let originalWidth=imageSize.width;

    console.log("This is the original height: Upload", originalHeight)
    console.log("This is the original width: Upload", originalWidth)

    //Calculates the image displayed on page, called with global variables imageWidth and imageHeight
    const image = document.getElementById("inputimage");
    let imageWidth = image.width;
    let imageHeight = image.height;

    console.log("image width:", imageWidth, ", image height:", imageHeight);
    
    //creats variables for function (placeholder) Image Ratio=1 because if its 0, it will n/0. Might need to fix later
    let imageRatioWidth=1;
    let imageRatioHeight=1;

    imageRatioWidth=imageWidth/originalWidth;

    //THIS IS CAUSING ISSUES
    imageRatioHeight=imageRatioWidth //imageHeight/originalHeight;

    console.log("ImageRatioHeight:",imageRatioHeight)
    console.log("ImageRatiowidth:",imageRatioWidth)
    console.log("UploadBox:",uploadBox)
    
    setBox({
      top: uploadBox.top*imageRatioHeight,
      right: imageWidth-uploadBox.right*imageRatioWidth,
      left: uploadBox.left*imageRatioWidth,
      bottom: uploadBox.bottom*imageRatioHeight
      });
      setUploadImageTest(false);
    }
  ImageSubmitBoxCalculationUpload();
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
    <ImageSubmit 
    setImageText={setImageText} 
    setUploadBox={setUploadBox}
    setImageURL={setImageURL} 
    setImageSize={setImageSize}
    setUploadImageTest={setUploadImageTest}
    setTranslatedText={setTranslatedText}/>
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
