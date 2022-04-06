import React, { useState } from "react";

function ImageSubmit(props) {
  const setImageText = props.setImageText;
  const setUploadBox = props.setUploadBox;
  const setImageURL = props.setImageURL;
  const setUploadOriginalImageSize = props.setUploadOriginalImageSize;
  const setUploadImagePath = props.setUploadImagePath;
  const setTranslatedText = props.setTranslatedText;
  const setLinkImagePath = props.setLinkImagePath;
  const setTokenizedText = props.setTokenizedText;

  const [file, setFile] = useState(null);

  const onFormSubmit = async (event) => {
    setLinkImagePath(false); //prevents both calculations from triggering, in onClick so ONLY activated by onclick
    event.preventDefault();
    const formData = new FormData();
    formData.append("myImage", file);
    try {
      const response = await fetch("http://localhost:3000/upload", {
        method: "POST",
        body: formData,
      });
      const imageInformation = await response.json();
      const imageLocation = imageInformation[imageInformation.length - 2];
      const imageSize = imageInformation[imageInformation.length - 1];

      console.log("returned ImageSubmit from Google API:", imageInformation);

      const uploadedURL = `http://localhost:3000/getuploadedpicture?imageLocation=${imageLocation}`;

      async function imageFetch() {
        try {
          const response = await fetch(uploadedURL, {
            method: "GET",
          });
          const imageFetchResponse = await response.json();
          console.log("This is the image fetchresponse", imageFetchResponse);
        } catch (error) {
          console.log("Error fetching picture from server", error);
        }
      }
      imageFetch();

      console.log("Response for upload:", imageInformation);

      //const GoogleDataSubmitted=uploadresponse;
      const ImageTextSubmitted = imageInformation[0].description;

      //Note: Google API is 0,1,2,3, counterclockwise top left, 0,0 is top left.
      const rawImageBox = {
        top: imageInformation[0].boundingPoly.vertices[0].y,
        right: imageInformation[0].boundingPoly.vertices[1].x,
        left: imageInformation[0].boundingPoly.vertices[0].x,
        bottom:
          imageSize.height - imageInformation[0].boundingPoly.vertices[2].y,
      };

      //Send to API for translation
      function uploadTextSubmit () {
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
            console.log(
              "This is the translated text uploaded",
              translatedTextInfo
            );
          } catch (error) {
            console.log(
              "Error fetching API response for text, try again", error
            );
          }
        }
        fetchTextTranslation();
      };
      uploadTextSubmit();

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
      

      setImageText(ImageTextSubmitted);
      setUploadBox(rawImageBox);
      setImageURL(uploadedURL);
      setUploadOriginalImageSize(imageSize);
      setUploadImagePath(true); //Sets path for box calculation
    } catch (error) {
      console.log("Error submitting photo", error);
    }
  };

  const onChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <h1 className="center"> File Upload </h1>
      <div className="center">
        <input type="file" name="myImage" onChange={onChange} />
        <button type="submit">Upload</button>
      </div>
    </form>
  );
}

export default ImageSubmit;
