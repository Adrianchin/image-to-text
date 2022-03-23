import React, {useState, useRef} from 'react';
import ImageSubmit from './components/imageinput/ImageSubmit';
import TextSubmittal from './components/imageinput/TextSubmittal';
import TextToDeepL from './components/imageinput/TextToDeepL';
import 'tachyons';
import './App.css';
//import ImageDisplay from './components/ImageDisplay';

//Test, as I cannot get the live loading picture in react to show
import testImage from './myImage-1647915882077.jpg';

function App() {
/*Note setstate is async, remember that 
you want to use consol log (or other stuff inside code) 
outside the function, otherwise it will return with async properties*/

  //Displays the image URL of the picture. I think I need so we dont display the image in a moving text 
  const [imageURL, setImageURL] = useState('');

  //Required to move image size from child to parent
  const [imageSize, setImageSize] = useState('');
  //Required to move image size from child to parent
  const [originalImageSize, setOriginalImageSize] = useState('');
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
/*const onImageSubmit = () => {
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
*/

//Used for manual text input, try to combine, used 3x with just the top changed
/*
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
*/
//tests for translated text
//console.log("This is the translated text:", translatedText);

//Outputs
/*
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
*/

function ImageDisplay () { 
const imageRef = useRef(); 

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
    
      //let imageWidth = width;
      //let imageHeight = height;

      //creats variables for function (placeholder) Image Ratio=1 because if its 0, it will n/0. Might need to fix later
      let imageRatioWidth=1;
      let imageRatioHeight=1;

      imageRatioWidth=imageWidth/originalWidth;

      imageRatioHeight= imageRatioWidth //imageHeight/originalHeight;

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
  //console.log("box dimensions",box)
  return(
    <div className = "center">
      <div className = "absolute">
        <img id="inputimage" src={imageURL} width='600px' height='auto' ref={imageRef}/>
        <div className = "boundingbox" 
        style={{top: box.top, right: box.right, left: box.left, bottom: box.bottom}}></div>
      </div>
    </div>
  );
};

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
      <TextToDeepL
      setTranslatedText={setTranslatedText}
      translatedText={translatedText}
      imageText={imageText}
        />
    </div>
    <div>
      <TextSubmittal
      setOriginalImageSize={setOriginalImageSize}
      setBox={setBox}
      setImageText={setImageText}
      setTranslatedText={setTranslatedText}
      setImageURL={setImageURL}
      />
      <div>
        <ImageDisplay/>
      </div>
    </div>
  </div>
  );
};

export default App;
