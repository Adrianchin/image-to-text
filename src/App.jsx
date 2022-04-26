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

  const [originalImageSize, setOriginalImageSize] = useState(null);

  const [rawImageBox, setRawImageBox] = useState(null);

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
            setImageURL={setImageURL}
            imageURL={imageURL}
            setTranslatedText={setTranslatedText}
            translatedText={translatedText}
            setTokenizedText={setTokenizedText}
            tokenizedText={tokenizedText}
            notes={notes}
            setNotes={setNotes}
            setOriginalImageSize={setOriginalImageSize}
            originalImageSize={originalImageSize}
            rawImageBox={rawImageBox}
            setRawImageBox={setRawImageBox}

            setSubmitImageData={setSubmitImageData}
          />}
        />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;