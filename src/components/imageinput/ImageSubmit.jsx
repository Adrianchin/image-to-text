import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  UploadFileButton,
  UploadButton,
  ImageUploadForm,
  SubmitContainer,
} from "./ImageInputElements";

function ImageSubmit(props) {
  let navigate = useNavigate();

  const setSubmitImageData = props.setSubmitImageData;
  
  const setNotes = props.setNotes;
  const setImageText = props.setImageText;
  const setUploadBox = props.setUploadBox;
  const setImageURL = props.setImageURL;
  const setUploadOriginalImageSize = props.setUploadOriginalImageSize;
  const setUploadImagePath = props.setUploadImagePath;
  const setTranslatedText = props.setTranslatedText;
  const setLinkImagePath = props.setLinkImagePath;
  const setTokenizedText = props.setTokenizedText;

  const [file, setFile] = useState(null);

  //TEST - IT WORKS
  async function onFormSubmitTest(event) {
    async function initiateUploadImageTest() {
      try {
        event.preventDefault();
        const formData = new FormData();
        formData.append("myImage", file);
        const response = await fetch("http://localhost:3000/uploadTest", {
          method: "POST",
          body: formData,
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
        setUploadBox(imageInformation.rawImageBox);
        setImageURL(imageInformation.imageURL);
        setUploadOriginalImageSize(imageInformation.originalImageSize);
        setUploadImagePath(imageInformation.uploadImagePath);
        setTranslatedText(imageInformation.translatedText);
        setLinkImagePath(imageInformation.linkImagePath);
        setTokenizedText(imageInformation.tokenizedText);

        setSubmitImageData(imageInformation)//Not using yet

      } catch (error) {
        console.log("Error submitting photo", error);
      }
    }
    initiateUploadImageTest()
  }

/*
  async function onFormSubmit(event) {

    const requestData = {
      linkImagePath: false,
      uploadImagePath: true,
      originalImageSize: null,
      imageInformation: null,
      imageURL: null,
      rawImageBox: null,
      translatedText: null,
      tokenizedText: null,
      date: new Date(),
      imageFileName: null,
      //id: userData._id, Not Needed, relying on cookies
      //username: userData.username, Not Needed, relying on cookies
    };

    let imageInformation;
    let imageLocation;
    let ImageTextSubmitted;

    
    setLinkImagePath(false); //prevents both calculations from triggering, in onClick so ONLY activated by onclick
    async function initiateUploadImage() {
      try {
        event.preventDefault();
        const formData = new FormData();
        formData.append("myImage", file);
        const response = await fetch("http://localhost:3000/upload", {
          method: "POST",
          body: formData,
          credentials: 'include',
        });
        imageInformation = await response.json();

        if(response.status===401){
          console.log("Error user needs to sign in", response.status);
          navigate("/signin");
        }

        //const GoogleDataSubmitted=imageInformation;
       //console.log("This is the Google Data Return:" ,GoogleDataSubmitted)
        ImageTextSubmitted = imageInformation[0].description;

        imageLocation = imageInformation[imageInformation.length - 3];
        const imageSize = imageInformation[imageInformation.length - 2];
        requestData.imageFileName = imageInformation[imageInformation.length - 1];

        //Note: Google API is 0,1,2,3, counterclockwise top left, 0,0 is top left.
        const rawImageBox = {
          top: imageInformation[0].boundingPoly.vertices[0].y,
          right: imageInformation[0].boundingPoly.vertices[1].x,
          left: imageInformation[0].boundingPoly.vertices[0].x,
          bottom:
            imageSize.height - imageInformation[0].boundingPoly.vertices[2].y,
        };
        //console.log("This is the raw image box: ", rawImageBox)
        requestData.imageURL = `http://localhost:3000/getuploadedpicture?imageLocation=${imageLocation}`
        requestData.imageInformation = imageInformation; //For MongoDB
        requestData.rawImageBox = rawImageBox; //For MongoDB
        requestData.originalImageSize = imageSize; //For MongoDB
        setImageURL(requestData.imageURL)
        setImageText(ImageTextSubmitted);
        setUploadBox(rawImageBox);
        setUploadOriginalImageSize(imageSize);

        console.log("returned ImageSubmit from Google API:", imageInformation);
      } catch (error) {
        console.log("Error submitting photo", error);
      }
    }
    await initiateUploadImage(); //1st step
//This is useless - remove

    async function imageFetch() {
      try {
        const uploadedURL = `http://localhost:3000/getuploadedpicture?imageLocation=${imageLocation}`;
        console.log(uploadedURL);

        requestData.imageURL = uploadedURL; //For MongoDB
        setImageURL(uploadedURL);

        await fetch(uploadedURL, {
          method: "GET",
          credentials: 'include',
        });
        //const imageFetchResponse = await response.json(); May remove, no response!!!
        //console.log("This is the image fetchresponse", imageFetchResponse); May remove, no response!!!
      } catch (error) {
        console.log("Error fetching picture from server", error);
      }
    }
    await imageFetch(); //depends on step 1

    //Send to API for translation
    async function translateText() {
      try {
        let textData = JSON.stringify({
          textFromImage: imageInformation[0].description,
        });

        async function fetchTextTranslation() {
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

          //console.log("This is the translated text", translatedTextInfo);
        }
        await fetchTextTranslation();
      } catch (error) {
        console.log("Error fetching API response for text, try again", error);
      }
    }
    await translateText(); //depends on step 1

    async function tokenizeText() {
      try {
        let textForTokenizing = JSON.stringify({
          text: imageInformation[0].description,
        });

        async function fetchTokenization() {
          const response = await fetch(`http://localhost:3000/tokenizetext`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: textForTokenizing,
            credentials: 'include',
          });
          const tokenizedText = await response.json();

          requestData.tokenizedText = tokenizedText; //For MongoDB
          setTokenizedText(tokenizedText);

          //console.log("This is the tokenized text: ", tokenizedText);
        }
        await fetchTokenization();
      } catch (error) {
        console.log("Error fetching Token response for text, try again", error);
      }
    }
    await tokenizeText(); //depends on step 1

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

    setUploadImagePath(true); //Sets path for box calculation
  }
*/
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
