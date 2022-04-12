import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageSubmit from "./components/imageinput/ImageSubmit";
import LinkSubmittal from "./components/imageinput/LinkSubmittal";
import TextToDeepL from "./components/texttodeepl/TextToDeepL";
import ImageDisplay from "./components/imagedisplay/ImageDisplay";
import Tokenizer from "./components/tokenizer/Tokenizer";
import TokenTextTable from "./components/tokenizer/TokenTextTable";
import TranslatedText from "./components/textdisplay/TranslatedText";
import ImageText from "./components/textdisplay/ImageText";
import SignIn from "./components/login/SignIn";
import Register from "./components/login/Register";
import NavigationBar from "./components/navigation/NavigationBar";
import Profile from "./components/profile/Profile";
import DisplayData from "./components/userdata/DisplayData";
import LandingPage from "./components/landingpage/LandingPage";

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

  //console.log("This is userData.Profile: ", userData);

  return (
    <>
    <div>
      <NavigationBar
        ifLogin={ifLogin}
        setIfLogin={setIfLogin}
        setRoute={setRoute}
        setUserData={setUserData}
        userData={userData}
      />
    </div>
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
          <LandingPage/>
        </div>)
      }
    </>
  );
}

export default App;
