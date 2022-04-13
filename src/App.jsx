import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
//See UploadFile import ImageSubmit from "./components/imageinput/ImageSubmit";
//See UploadFile import LinkSubmittal from "./components/imageinput/LinkSubmittal";
//See UploadFile import ImageDisplay from "./components/imagedisplay/ImageDisplay";
//See UploadFile import TokenTextTable from "./components/tokenizer/TokenTextTable";
//See UploadFile import TranslatedText from "./components/textdisplay/TranslatedText";
//See UploadFile import ImageText from "./components/textdisplay/ImageText";
//See Signin import SignIn from "./components/login/SignIn";
//See Register import Register from "./components/login/Register";
//DELETE import NavigationBar from "./components/navigation/NavigationBar";
//SEE HOME import NavBar from "./components/navigation/NavBar";
//SEE HOME import SideBar from "./components/navigation/SideBar/SideBar";
//See Profile import Profile from "./components/profile/Profile";
//import DisplayData from "./components/userdata/DisplayData";
//DELETE - SEE HOME import LandingPage from "./components/landingpage/LandingPage";

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

  /* SEE HOME
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  };
  */

  //console.log("This is userData.Profile: ", userData);

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
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
/*
    {route === "main" && ifLogin === true
        ?(<div>
          <div>
            <ImageSubmit
              setImageText={setImageText}
              setUploadBox={setUploadBox}
              setImageURL={setImageURL}
              setUploadOriginalImageSize={setUploadOriginalImageSize}
              setUploadImagePath={setUploadImagePath}
              setLinkImagePath={setLinkImagePath}
              setTranslatedText={setTranslatedText}
              setTokenizedText={setTokenizedText}
              userData={userData}
            />
          </div>
          <div>
            <LinkSubmittal
              setLinkOriginalImageSize={setLinkOriginalImageSize}
              setLinkBox={setLinkBox}
              setImageText={setImageText}
              setTranslatedText={setTranslatedText}
              setImageURL={setImageURL}
              setUploadImagePath={setUploadImagePath}
              setLinkImagePath={setLinkImagePath}
              setTokenizedText={setTokenizedText}
              userData={userData}
            />
          </div>
          <div>
            <TranslatedText
              translatedText={translatedText}
            />
          <div>
            <ImageText
              imageText={imageText}
            />
          </div>
          </div>
          <div>
          <TokenTextTable 
            tokenizedText={tokenizedText}
          />
          </div>
          <div>
            <ImageDisplay
              linkImagePath={linkImagePath}
              linkOriginalImageSize={linkOriginalImageSize}
              linkBox={linkBox}
              uploadImagePath={uploadImagePath}
              uploadOriginalImageSize={uploadOriginalImageSize}
              uploadBox={uploadBox}
              imageURL={imageURL}
            />
          </div>
        </div>)

REMOVE THIS

        :route === "signin" || route === "signout" 
        ?(<div>
            <SignIn
              setIfLogin={setIfLogin}
              setRoute={setRoute}
              setUserData={setUserData}
            />
          </div>) 
        :route === "register"
          ?(<div>
            <Register
              setIfLogin={setIfLogin}
              setRoute={setRoute}
              setUserData={setUserData}
            />
          </div>)
          :route === "profile"
          ?(<div>
            <Profile
            userData={userData}
            setUserDisplayData={setUserDisplayData}
            setRoute={setRoute}
            setUserData={setUserData}
            />
          </div>)
         :route === "displaydata"
         ?(<div>
           <DisplayData
           userDisplayData={userDisplayData}
           setUserData={setUserData}
           />
         </div>)
        :(<div>
        </div>)
      }


      
      <SideBar isOpen={isOpen} toggle={toggle}/>
      <NavBar toggle={toggle}/>

      <div>
      <NavigationBar
        ifLogin={ifLogin}
        setIfLogin={setIfLogin}
        setRoute={setRoute}
        setUserData={setUserData}
        userData={userData}
      />
    </div>


      DELETE THIS
      <LandingPage/>
*/