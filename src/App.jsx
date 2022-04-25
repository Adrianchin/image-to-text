import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import HomeLoggedIn from './pages/HomeLoggedIn';
import Signin from './pages/Signin';
import Register from './pages/Register';
import Profile from "./pages/Profile";
import DisplayCard from "./pages/DisplayCard";
import UploadFile from "./pages/UploadFile";
import ScrollToTop from "./ScrollToTop";

import "tachyons";
import "./App.css";

function App() {

  //Displays the image URL of the picture. I think I need so we dont display the image in a moving text
  const [imageURL, setImageURL] = useState(null); //Used for the display image only

  //Required to move image size from child to parent in upload
  const [uploadOriginalImageSize, setUploadOriginalImageSize] = useState(null);//combine 1
  //Required to move image size from child to parent in link
  const [linkOriginalImageSize, setLinkOriginalImageSize] = useState(null);//combine 1
  //Required to trigger image function from uploaded image 
  const [uploadImagePath, setUploadImagePath] = useState(false); //Used to determine if it was uploaded or url - Do I really need?
  //Required to trigger image function from link submitted image
  const [linkImagePath, setLinkImagePath] = useState(false); //Used to determine if it was uploaded or url - Do I really need?
  //required to send the box from the back end. Can't use the other box as I do not want to upload box and render before updating box again
  const [uploadBox, setUploadBox] = useState(null); //combine 2
  //required to send the box from the back end. Can't use the other box as I do not want to upload box and render before updating box again
  const [linkBox, setLinkBox] = useState(null); //combine 2

  //Displays translated text from DeepL
  const [translatedText, setTranslatedText] = useState(null);
  //Displays to user what is on the image
  const [imageText, setImageText] = useState(null);

  const [tokenizedText, setTokenizedText] = useState(null);

  const[submitImageData, setSubmitImageData] = useState();//Not used right now, may convert all states to 1 object

  const [userData, setUserData] = useState(null);//I may need to delete some profile information as I no longer use it, push profile data out so its not nested object with array
  const [userDisplayData, setUserDisplayData] = useState(null); // Used to store history
  const [notes, setNotes] = useState(null); // Used to store notes - right now only for errors with tokenizer

  return (
    <>
      <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={
          <Home
          />}
        />
        <Route path="/home" element={
          <HomeLoggedIn
          />}
        />
        <Route path="/signin" element={
          <Signin         
          />}
        />
        <Route path="/register" element={
          <Register
          />}
        />
        <Route path="/profile" element={
          <Profile
            userData={userData}
            setUserDisplayData={setUserDisplayData}
            setUserData={setUserData}
          />}
        />
        <Route path="/displaycard" element={
          <DisplayCard
            userDisplayData={userDisplayData}
            setUserData={setUserData}
            notes={notes}
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
            notes={notes}
            setNotes={setNotes}

            setSubmitImageData={setSubmitImageData}
          />}
        />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;