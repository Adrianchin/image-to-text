import React, {useState, useRef, useEffect} from 'react';
import ImageSubmit from './components/imageinput/ImageSubmit';
import LinkSubmittal from './components/imageinput/LinkSubmittal';
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

  //Required to move image size from child to parent in upload
  const [uploadOriginalImageSize, setUploadOriginalImageSize] = useState('');
  //Required to move image size from child to parent in link
  const [linkOriginalImageSize, setLinkOriginalImageSize] = useState('');
  //Required to trigger image function from uploaded image
  const [uploadImageTest, setUploadImageTest] = useState(false);
  //Required to trigger image function from link submitted image
  const [linkImageTest, setLinkImageTest] = useState(false);
  //required to send the box from the back end. Can't use the other box as I do not want to upload box and render before updating box again
  const [uploadBox, setUploadBox] = useState("");
  //required to send the box from the back end. Can't use the other box as I do not want to upload box and render before updating box again
  const [linkBox, setLinkBox] = useState("");

  //Displays translated text from DeepL
  const [translatedText, setTranslatedText] = useState('');
  //Displays box from Google API
  const [box, setBox] = useState("");
  //Displays to user what is on the image
  const [imageText, setImageText] = useState("");

  const [currentWidth, setCurrentWidth] = useState("");
  const [currentHeight, setCurrentHeight] = useState("");


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

/*
Current problem: useEffect triggers a refresh of the entire img portion, as does onLoad (the div is tied to the img). Since I need the img for the calculation of the box,
it needs to be rendered once. Unfortunately, anything re-rendered here means useEffect will be triggered (if var compared is part of the component) and the img is refreshed
causing onLoad to trigger the function.

Currenty the only way to mitigate this is the following:
1) Use a true->false evaluation, preventing the 2nd (really, 3rd) pass to not update setBox. Works in both cases
2) Use a straight value for sizing. This might be the way to go, but assumes the image is sized 1:1 ratio (width and height)
3) Pass the image 1st, THEN pass the box data.
4) Maybe evaluate the useEffect with a different setState value that is ONLY triggered when an if statement is true, 
where valueInitial=/=valueFinal, then setBool(or something), else valueInitial=valueFinal, with useEffect a function of setBool.

I think this problem is unique because I need to refresh this component with a second superimposed piece that is a function of the first itteration. 

First section - good based onImgLoad being the controller.
second section - playing around with.
*/ 
function ImageDisplay () { 

//const imageRef = useRef(); 
  //useEffect(() => {
    //let currentHeight=imageRef.current.clientHeight;
    //let currentWidth=imageRef.current.clientWidth; 
    const onImgLoad=({target:img})=>{
      const{offsetHeight,offsetWidth}=img;
      console.log(offsetHeight,offsetWidth);
      let currentHeight=offsetHeight;
      let currentWidth=offsetWidth; 
    
    console.log("Image Current Height Dimenstions", currentHeight);
    console.log("Image Current Width Dimenstions", currentWidth);

    //I need to triger this if I upload, as the function is slightly different from the other calculation. 
    //Need to structure like this because of update, render, update requirement.

      //IMAGE LINK PATH!!!!!
    if (linkImageTest===true){
      //IMAGE LINK PATH!!!!!
      console.log("Test linkImageTest")

      const ImageSubmitBoxCalculationUpload = () => {
        
        //IMAGE LINK PATH!!!!!

        console.log("Image Current Height Dimenstions in linkImagetest", currentHeight);
        console.log("Image Current Width Dimenstions in linkImagetest", currentWidth);

        console.log("This is the original height: Link", linkOriginalImageSize.height)
        console.log("This is the original width: Link", linkOriginalImageSize.width)


        let imageRatioWidth=currentWidth/linkOriginalImageSize.width;
        let imageRatioHeight=currentHeight/linkOriginalImageSize.height;

        console.log("Link ImageRatioHeight:",imageRatioHeight)
        console.log("Link ImageRatiowidth:",imageRatioWidth)
        console.log("linkBox:",linkBox)
        
        setBox({
          top: linkBox.top*imageRatioHeight,
          right: currentWidth-linkBox.right*imageRatioWidth,
          left: linkBox.left*imageRatioWidth,
          bottom: linkBox.bottom*imageRatioHeight
          });
          setLinkImageTest(false);
        }
      ImageSubmitBoxCalculationUpload();
    };

    //I need to triger this if I upload, as the function is slightly different from the other calculation. 
    //Need to structure like this because of update, render, update requirement.

      //IMAGE UPLOAD PATH!!!!!
    if (uploadImageTest===true){
      //IMAGE UPLOAD PATH!!!!!
      console.log("Image Current Height Dimenstions in uploadImagetest", currentHeight);
      console.log("Image Current Width Dimenstions in uploadImagetest", currentWidth);

      console.log("Test uploadImageTest")

      const ImageSubmitBoxCalculationUpload = () => {

        //IMAGE UPLOAD PATH!!!!!

        let originalHeight=uploadOriginalImageSize.height;
        let originalWidth=uploadOriginalImageSize.width;

        console.log("This is the original height: Upload", originalHeight)
        console.log("This is the original width: Upload", originalWidth)

        let imageRatioWidth=currentWidth/originalWidth;
        let imageRatioHeight=currentHeight/originalHeight;

        console.log("Upload ImageRatioHeight:",imageRatioHeight)
        console.log("Upload ImageRatiowidth:",imageRatioWidth)
        console.log("UploadBox:",uploadBox)
        
        setBox({
          top: uploadBox.top*imageRatioHeight,
          right: currentWidth-uploadBox.right*imageRatioWidth,
          left: uploadBox.left*imageRatioWidth,
          bottom: uploadBox.bottom*imageRatioHeight
          });
          setUploadImageTest(false);
        }
      ImageSubmitBoxCalculationUpload();
      console.log("This is Box after calculation", box)
      };
    }
  //}, [imageRef]);
  


/*
  useEffect(() => {

    //I need to triger this if I upload, as the function is slightly different from the other calculation. 
    //Need to structure like this because of update, render, update requirement.

      //IMAGE LINK PATH!!!!!
    if (linkImageTest===true){
      //IMAGE LINK PATH!!!!!
      console.log("Test linkImageTest")

      const ImageSubmitBoxCalculationUpload = () => {
        
        //IMAGE LINK PATH!!!!!

        console.log("Image Current Height Dimenstions in linkImagetest", currentHeight);
        console.log("Image Current Width Dimenstions in linkImagetest", currentWidth);

        console.log("This is the original height: Link", linkOriginalImageSize.height)
        console.log("This is the original width: Link", linkOriginalImageSize.width)


        let imageRatioWidth=currentWidth/linkOriginalImageSize.width;
        let imageRatioHeight=currentHeight/linkOriginalImageSize.height;

        console.log("Link ImageRatioHeight:",imageRatioHeight)
        console.log("Link ImageRatiowidth:",imageRatioWidth)
        console.log("linkBox:",linkBox)
        
        let Box=({
          top: linkBox.top*imageRatioHeight,
          right: currentWidth-linkBox.right*imageRatioWidth,
          left: linkBox.left*imageRatioWidth,
          bottom: linkBox.bottom*imageRatioHeight
          });
          //setLinkImageTest(false);
          console.log("Test for useEffect")
        }
      ImageSubmitBoxCalculationUpload();
    };

    //I need to triger this if I upload, as the function is slightly different from the other calculation. 
    //Need to structure like this because of update, render, update requirement.

      //IMAGE UPLOAD PATH!!!!!
    if (uploadImageTest===true){
      //IMAGE UPLOAD PATH!!!!!
      console.log("Image Current Height Dimenstions in uploadImagetest", currentHeight);
      console.log("Image Current Width Dimenstions in uploadImagetest", currentWidth);

      console.log("Test uploadImageTest")

      const ImageSubmitBoxCalculationUpload = () => {

        //IMAGE UPLOAD PATH!!!!!

        let originalHeight=uploadOriginalImageSize.height;
        let originalWidth=uploadOriginalImageSize.width;

        console.log("This is the original height: Upload", originalHeight)
        console.log("This is the original width: Upload", originalWidth)

        let imageRatioWidth=currentWidth/originalWidth;
        let imageRatioHeight=currentHeight/originalHeight;

        console.log("Upload ImageRatioHeight:",imageRatioHeight)
        console.log("Upload ImageRatiowidth:",imageRatioWidth)
        console.log("UploadBox:",uploadBox)
        
        setBox({
          top: uploadBox.top*imageRatioHeight,
          right: currentWidth-uploadBox.right*imageRatioWidth,
          left: uploadBox.left*imageRatioWidth,
          bottom: uploadBox.bottom*imageRatioHeight
          });
          //setUploadImageTest(false);
        }
      ImageSubmitBoxCalculationUpload();
      console.log("This is Box after calculation", box)
      };
  }, [currentHeight, currentWidth]);

  console.log("Test2")
  console.log("This is Box before render", box)

  const onImgLoad=({target:img})=>{
    const{offsetHeight,offsetWidth}=img;
    console.log(offsetHeight,offsetWidth);
    setCurrentHeight(offsetHeight);
    setCurrentWidth(offsetWidth); 
  }
*/
  return(
    <div className="center">
      <div className="absolute">
        <img id="inputimage" src={imageURL} width='600px' height='auto' onLoad={onImgLoad} /*ref={imageRef}*//>
        <div className = "boundingbox" 
        style={{top: box.top, right: box.right, left: box.left, bottom: box.bottom}}>
        </div>
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
    setUploadOriginalImageSize={setUploadOriginalImageSize}
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
      <LinkSubmittal
      setLinkOriginalImageSize={setLinkOriginalImageSize}
      setLinkBox={setLinkBox}
      setImageText={setImageText}
      setTranslatedText={setTranslatedText}
      setImageURL={setImageURL}
      setLinkImageTest={setLinkImageTest}
      />
      <div>
        <ImageDisplay/>
      </div>
    </div>
  </div>
  );
};

export default App;