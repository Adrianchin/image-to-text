import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  UploadButton,
  InputURL,
  InputContainer,
  SubmitContainer,
} from "./ImageInputElements";

function LinkSubmittal(props) {
  let navigate = useNavigate();

  const setSubmitImageData = props.setSubmitImageData;

  const setNotes = props.setNotes;
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

  async function onImageSubmitTest() {

    let originalImageSize;

    async function imageDimensions() {
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

      const originalHeight = img.height;
      const originalWidth = img.width;

      originalImageSize = {
        height: originalHeight,
        width: originalWidth,
        type: "url",
      };
    }
    await imageDimensions()

  await imageDimensions(); 
    async function fetchImageInfo() {
      try {
        let imageData = JSON.stringify({
          link: imageInput,
          originalImageSize: originalImageSize,
        });
        const response = await fetch("http://localhost:3000/uploads/linkupload", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: imageData,
          credentials: 'include',
        });
        let imageInformation = await response.json();
        console.log(imageInformation)

        if(response.status===401){
          console.log("Error user needs to sign in", response.status);
          navigate("/signin");
        }

        setNotes(imageInformation.notes);
        setImageText(imageInformation.imageInformation[0].description);
        setLinkBox(imageInformation.rawImageBox);
        setImageURL(imageInformation.imageURL);
        setLinkOriginalImageSize(imageInformation.originalImageSize);
        setUploadImagePath(imageInformation.uploadImagePath);
        setTranslatedText(imageInformation.translatedText);
        setLinkImagePath(imageInformation.linkImagePath);
        setTokenizedText(imageInformation.tokenizedText);

        setSubmitImageData(imageInformation)//Not using yet

      } catch (error) {
        console.log("Error fetching API responses for image, try again");
      }
    }
    await fetchImageInfo(); //Step 1
  }
  
  function onImageInput(event) {
    setImageInput(event.target.value);
  }

  return (
    <InputContainer>
      <h3 className="center"> Image URL </h3>
      <SubmitContainer>
        <InputURL type="text" onChange={onImageInput} />
        <UploadButton onClick={onImageSubmitTest}>Image URL</UploadButton>
      </SubmitContainer>
    </InputContainer>
  );
}

export default LinkSubmittal;


/*
  async function onImageSubmit() {
    setUploadImagePath(false); //prevents both calculations from triggering, in onClick so ONLY activated by onclick

    const requestData = {
      linkImagePath: true,
      uploadImagePath: false,
      originalImageSize: null,
      imageInformation: null,
      imageURL: null,
      rawImageBox: null,
      translatedText: null,
      tokenizedText: null,
      date: new Date(),
      imageFileName: null,
      //id: userData._id, Not Needed, relying on cookies
      //username: userData.username,
    };

    let imageInformation;

    //Async fetch for google image to text
    async function fetchImageInfo() {
      try {
        requestData.imageURL = imageInput; //For MongoDB
        setImageURL(imageInput);

        let imageData = JSON.stringify({
          link: imageInput,
        });
        const response = await fetch("http://localhost:3000/imagelinkphoto", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: imageData,
          credentials: 'include',
        });
        imageInformation = await response.json();
        
        if(response.status===401){
          console.log("Error user needs to sign in", response.status);
          navigate("/signin");
        }

        requestData.imageInformation = imageInformation; //For MongoDB
        setImageText(imageInformation[0].description);

        console.log("returned linkSubmit from Google API:", imageInformation);
      } catch (error) {
        console.log("Error fetching API responses for image, try again");
      }
    }
    await fetchImageInfo(); //Step 1

    async function imageDimensions() {
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

      const originalHeight = img.height;
      const originalWidth = img.width;

      const originalImageSize = {
        height: originalHeight,
        width: originalWidth,
      };

      requestData.originalImageSize = originalImageSize; //For MongoDB
      setLinkOriginalImageSize(originalImageSize);

      //Note: Google API is 0,1,2,3, counterclockwise top left, 0,0 is top left. I have to take away the Original height from the bottom value
      //Updates the box for render
      const linkBox = {
        top: imageInformation[0].boundingPoly.vertices[0].y,
        right: imageInformation[0].boundingPoly.vertices[1].x,
        left: imageInformation[0].boundingPoly.vertices[0].x,
        bottom: originalHeight - imageInformation[0].boundingPoly.vertices[2].y,
      };

      requestData.rawImageBox = linkBox; //For MongoDB
      setLinkBox(linkBox);
    }
    await imageDimensions(); //Step 2, Requires step 1

    //Send to API for translation
    async function linkTextSubmit() {
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
              credentials: 'include',
            }
          );
          const translatedTextInfo = await response.json();

          requestData.translatedText = translatedTextInfo.translations[0].text; //For MongoDB
          setTranslatedText(translatedTextInfo.translations[0].text);
        } catch (error) {
          console.log(
            "Error fetching translation API response for text, try again"
          );
        }
      }
      await fetchTextTranslation();
    }
    await linkTextSubmit(); //Step 2, Requires step 1

    async function tokenizeText() {
      let textForTokenizing = JSON.stringify({
        text: imageInformation[0].description,
      });

      async function fetchTokenization() {
        try {
          const response = await fetch(`http://localhost:3000/tokenizetext`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: textForTokenizing,
            credentials: 'include',
          });
          const tokenizedText = await response.json();

          requestData.tokenizedText = tokenizedText; //For MongoDB
          setTokenizedText(tokenizedText);

          console.log(tokenizedText);
        } catch (error) {
          console.log(
            "Error fetching Token response for text, try again",
            error
          );
        }
      }
      await fetchTokenization(); //Step 2, Requires step 1
    }
    await tokenizeText();

    async function postData() {
      try {
        //console.log("This is before post data", requestData)
        const response = await fetch(`http://localhost:3000/postdata`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestData),
          credentials: 'include',
        });
        const responsePostData = await response.json();
        console.log(
          "This is the response from the DB Upload: ",
          responsePostData
        );
      } catch (error) {
        console.log("Error posting data to DB", error);
      }
    }
    await postData(); //depends on step 1 and 2

    setLinkImagePath(true); //Sets path for box calculation
  }
*/