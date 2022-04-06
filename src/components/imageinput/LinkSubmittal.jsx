import React, { useState } from "react";

function LinkSubmittal(props) {
  const setLinkOriginalImageSize = props.setLinkOriginalImageSize;
  const setLinkBox = props.setLinkBox;
  const setImageText = props.setImageText;
  const setTranslatedText = props.setTranslatedText;
  const setImageURL = props.setImageURL;
  const setLinkImagePath = props.setLinkImagePath;
  const setUploadImagePath = props.setUploadImagePath;
  const setTokenizedText = props.setTokenizedText;

  //Live update of input for image url. May be dubplicated, see imageURL. May be changed to global var?
  const [imageInput, setImageInput] = useState("");

  function onImageSubmit() {
    setUploadImagePath(false); //prevents both calculations from triggering, in onClick so ONLY activated by onclick

    let imageData = JSON.stringify({
      link: imageInput,
    });

    //Async fetch for google image to text
    async function fetchImageInfo() {
      try {
        const response = await fetch("http://localhost:3000/imagelinkphoto", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: imageData,
        });
        const imageInformation = await response.json();

        console.log("returned linkSubmit from Google API:", imageInformation);

        let originalHeight;
        let originalWidth;

        //IMPORTANT: onload is async, so you need to put shit in it and whatever you are
        //doing with it in the onload function!
        //Note. I made a promise beause otherwise, onload will be async and we need the outputs
        //for the box calculations. This is a general onload promise, which we then use for the image
        function onLoadPromiseImageFunction(image) {
          return new Promise((resolve, reject) => {
            image.onload = () => resolve(image);
            image.onerror = reject;
          });
        }

        let img = new Image();
        let imgpromise = onLoadPromiseImageFunction(img);
        img.src = imageInput;
        await imgpromise;

        originalHeight = img.height;
        originalWidth = img.width;

        setLinkOriginalImageSize({
          height: originalHeight,
          width: originalWidth,
        });
        setImageText(imageInformation[0].description);
        //Note: Google API is 0,1,2,3, counterclockwise top left, 0,0 is top left. I have to take away the Original height from the bottom value
        //Updates the box for render
        setLinkBox({
          top: imageInformation[0].boundingPoly.vertices[0].y,
          right: imageInformation[0].boundingPoly.vertices[1].x,
          left: imageInformation[0].boundingPoly.vertices[0].x,
          bottom:
            originalHeight - imageInformation[0].boundingPoly.vertices[2].y,
        });
        setLinkImagePath(true); //Sets path for box calculation

        //Send to API for translation
        const linkTextSubmit = () => {
          let textData = JSON.stringify({
            textFromImage: imageInformation[0].description,
          });

          async function fetchTextTranslation() {
            try {
              const response = await fetch(
                `http://localhost:3000/textfortranslation`,
                {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: textData,
                }
              );
              const translatedTextInfo = await response.json();
              setTranslatedText(translatedTextInfo.translations[0].text);
            } catch (error) {
              console.log(
                "Error fetching translation API response for text, try again"
              );
            }
          }
          fetchTextTranslation();
        };
        linkTextSubmit();

        function tokenizeText() {
          let textForTokenizing = JSON.stringify({
            text: imageInformation[0].description,
          });
      
          async function fetchTokenization() {
            try{
              const response = await fetch(`http://localhost:3000/tokenizetext`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: textForTokenizing,
              });
              const tokenizedText = await response.json();
              setTokenizedText(tokenizedText);
              console.log(tokenizedText);
            }catch (error) {
              console.log(
                "Error fetching Token response for text, try again", error
              );
            }
          }
          fetchTokenization();
        }
        tokenizeText()

      } catch (error) {
        console.log("Error fetching API responses for image, try again");
      }
    }
    fetchImageInfo();
  }

  const onImageButtonSubmit = () => {
    //Note: I think this is async, so I cannot use imageInput as it is in que, and onImageSubmit runs and imageInput is old!
    //This is reset to setState because we need to render the image!! Otherwise dont need this.
    setImageURL(imageInput);
    //calls onImageSubmit for API send
    onImageSubmit();
  };
  const onImageInput = (event) => {
    setImageInput(event.target.value);
  };

  return (
    <div className="center">
      <div className="form center pa4 br3 shadow-5">
        <input
          className="f4 pa2 w-70 center"
          type="text"
          onChange={onImageInput}
        />
        <button
          className="w-30 grow f5 link ph3 pv2 dib white bg-light-purple"
          onClick={onImageButtonSubmit}
        >
          Image URL
        </button>
      </div>
    </div>
  );
}

export default LinkSubmittal;
