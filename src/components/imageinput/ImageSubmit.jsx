import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  UploadFileButton,
  UploadButton,
  ImageUploadForm,
  SubmitContainer,
} from "./ImageInputElements";

const serverURL=process.env.REACT_APP_SERVER_URL;
const endpoint ="/uploads/uploadimage"
const imageSubmitEndpoint = serverURL+endpoint;

const signinLink = "/signin";

function ImageSubmit(props) {
  let navigate = useNavigate();

  const setSubmitImageData = props.setSubmitImageData;
  
  const setNotes = props.setNotes;
  const setImageText = props.setImageText;
  const setRawImageBox= props.setRawImageBox;
  const setImageURL = props.setImageURL;
  const setTranslatedText = props.setTranslatedText;
  const setTokenizedText = props.setTokenizedText;
  const setOriginalImageSize = props.setOriginalImageSize;

  const [file, setFile] = useState(null);

  //TEST - IT WORKS
  async function onFormSubmitTest(event) {
    event.preventDefault();
    if(file){
      async function initiateUploadImageTest() {
        try {
          const formData = new FormData();
          formData.append("myImage", file);
          const response = await fetch(imageSubmitEndpoint, {
            method: "POST",
            body: formData,
            credentials: 'include',
          });
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

          setSubmitImageData(imageInformation)//Not using yet

        } catch (error) {
          console.log("Error submitting photo", error);
        }
      }
      initiateUploadImageTest()
    }
  }


  const onChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <ImageUploadForm onSubmit={onFormSubmitTest}>
      <h2 className="center"> File Upload </h2>
      <SubmitContainer>
        <label htmlFor={"upload-button"}>
          <UploadFileButton>Choose JPG File</UploadFileButton>
        </label>
        <input
          type="file"
          name="myImage"
          id="upload-button"
          style={{ display: "none" }}
          onChange={onChange}
        />
        <UploadButton type="submit">Upload</UploadButton>
      </SubmitContainer>
    </ImageUploadForm>
  );
}

export default ImageSubmit;