import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  UploadButton,
  InputURL,
  InputContainer,
  SubmitContainer,
} from "./ImageInputElements";

const linkSubmitEndpoint = "http://35.233.167.60:3000/uploads/linkupload";
const signinLink = "/signin";

function LinkSubmittal(props) {
  let navigate = useNavigate();

  const setSubmitImageData = props.setSubmitImageData;
  const setRawImageBox = props.setRawImageBox;
  const setNotes = props.setNotes;
  const setImageText = props.setImageText;
  const setTranslatedText = props.setTranslatedText;
  const setImageURL = props.setImageURL;
  const setTokenizedText = props.setTokenizedText;
  const setOriginalImageSize = props.setOriginalImageSize;

  //Live update of input for image url. May be dubplicated, see imageURL. May be changed to global var?
  const [imageInput, setImageInput] = useState(null);

  async function onImageSubmitTest() {
    if (imageInput) {
      let originalImageSize;
      async function imageDimensions() {
        //IMPORTANT:
        //Note. I made a promise beause otherwise, onload will be async and we need the outputs
        //for the box calculations.
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
      await imageDimensions();

      await imageDimensions();
      async function fetchImageInfo() {
        try {
          let imageData = JSON.stringify({
            link: imageInput,
            originalImageSize: originalImageSize,
          });
          const response = await fetch(linkSubmitEndpoint,{
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: imageData,
              credentials: "include",
            }
          );
          let imageInformation = await response.json();

          //console.log("Information back from server:", imageInformation)

          if (response.status === 401) {
            console.log("Error user needs to sign in", response.status);
            navigate(signinLink);
          }

          setNotes(imageInformation.notes);
          setImageText(imageInformation.imageInformation[0].description);
          setRawImageBox(imageInformation.rawImageBox);
          setImageURL(imageInformation.imageURL);
          setOriginalImageSize(imageInformation.originalImageSize);
          setTranslatedText(imageInformation.translatedText);
          setTokenizedText(imageInformation.tokenizedText);

          setSubmitImageData(imageInformation); //Not using yet
        } catch (error) {
          console.log("Error fetching API responses for image, try again");
        }
      }
      await fetchImageInfo();
    }
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