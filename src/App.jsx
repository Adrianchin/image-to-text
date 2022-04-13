import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Signin from './pages/Signin';
import Register from './pages/Register';
import Profile from "./pages/Profile"
import DisplayData from "./pages/DisplayData"
import UploadFile from "./pages/UploadFile"

import "tachyons";
import "./App.css";

function App() {

  //Displays the image URL of the picture. I think I need so we dont display the image in a moving text
  const [imageURL, setImageURL] = useState(null);

  //Required to move image size from child to parent in upload
  const [uploadOriginalImageSize, setUploadOriginalImageSize] = useState(null);
  //Required to move image size from child to parent in link
  const [linkOriginalImageSize, setLinkOriginalImageSize] = useState(null);
  //Required to trigger image function from uploaded image
  const [uploadImagePath, setUploadImagePath] = useState(false);
  //Required to trigger image function from link submitted image
  const [linkImagePath, setLinkImagePath] = useState(false);
  //required to send the box from the back end. Can't use the other box as I do not want to upload box and render before updating box again
  const [uploadBox, setUploadBox] = useState(null);
  //required to send the box from the back end. Can't use the other box as I do not want to upload box and render before updating box again
  const [linkBox, setLinkBox] = useState(null);

  //Displays translated text from DeepL
  const [translatedText, setTranslatedText] = useState(null);
  //Displays to user what is on the image
  const [imageText, setImageText] = useState(null);

  const [tokenizedText, setTokenizedText] = useState(null);

  const [ifLogin, setIfLogin] = useState(false);
  const [route, setRoute] = useState("other");
  const [userData, setUserData] = useState("");
  const [userDisplayData, setUserDisplayData] = useState(null);

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/home" element={
          <Home
          />}
        />
        <Route path="/signin" element={
          <Signin         
            setIfLogin={setIfLogin}
            setRoute={setRoute}
            setUserData={setUserData}
          />}
        />
        <Route path="/register" element={
          <Register
            setIfLogin={setIfLogin}
            setRoute={setRoute}
            setUserData={setUserData}
          />}
        />
        <Route path="/profile" element={
          <Profile
            userData={userData}
            setUserDisplayData={setUserDisplayData}
            setRoute={setRoute}
            setUserData={setUserData}
          />}
        />
        <Route path="/displaydata" element={
          <DisplayData
            userDisplayData={userDisplayData}
            setUserData={setUserData}
          />}
        />
        <Route path="/uploadfile" element={
          <UploadFile
            setImageText={setImageText}
            imageText={imageText}
            setUploadBox={setUploadBox}
            uploadBox={uploadBox}
            setLinkBox={setLinkBox}
            linkBox={linkBox}
            setImageURL={setImageURL}
            imageURL={imageURL}
            setUploadOriginalImageSize={setUploadOriginalImageSize}
            uploadOriginalImageSize={uploadOriginalImageSize}
            setLinkOriginalImageSize={setLinkOriginalImageSize}
            linkOriginalImageSize={linkOriginalImageSize}
            setUploadImagePath={setUploadImagePath}
            uploadImagePath={uploadImagePath}
            setLinkImagePath={setLinkImagePath}
            linkImagePath={linkImagePath}
            setTranslatedText={setTranslatedText}
            translatedText={translatedText}
            setTokenizedText={setTokenizedText}
            tokenizedText={tokenizedText}
            userData={userData}
          />}
        />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;