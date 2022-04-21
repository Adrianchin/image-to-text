//Delete this - Moved to Pages

import React, {useState, useEffect} from "react";
import ImageDisplay from "../imagedisplay/ImageDisplay";
import ImageText from "../textdisplay/ImageText";
import TranslatedText from "../textdisplay/TranslatedText";
import TextToDeepL from "../texttodeepl/TextToDeepL";
import Tokenizer from "../tokenizer/Tokenizer";
import TokenTextTable from "../tokenizer/TokenTextTable";

import {
  DisplayDataContainer,
  DisplayDataColumn,
  PictureColumn,
  UpdateButton,
  InputContainer,
  DisplayDataBackgrounImage,
} from "./DisplayDataElements";

function DisplayData(props) {
  const userDisplayData = props.userDisplayData;
  const setUserDisplayData = props.setUserDisplayData;

  const [userDisplayTranslatedText, setUserDisplayTranslatedText] = useState(userDisplayData.translatedText);
  const [userDisplayTokenizedText, setUserDisplayTokenizedText] = useState(userDisplayData.tokenizedText);
  const [userDataUpload, setUserDataUpload] = useState(null);

  useEffect(() => {
    const userDisplayDataPlaceholder = {...userDisplayData};
    //console.log("This is initial userDisplayDataPlaceholder: ", userDisplayDataPlaceholder)
    userDisplayDataPlaceholder.translatedText = userDisplayTranslatedText;
    userDisplayDataPlaceholder.tokenizedText = userDisplayTokenizedText;
    userDisplayDataPlaceholder.date = new Date();
    setUserDataUpload(userDisplayDataPlaceholder)
}, [userDisplayTranslatedText, userDisplayTokenizedText])
console.log("This is userDataUpload: ", userDataUpload)

async function onUpdateData(){
    async function updateUserData(){
        try{
        //console.log("This is userDataUpload ON UPLOAD: ", userDataUpload)
        const data = JSON.stringify({
            _id: userDataUpload._id,
            translatedText: userDataUpload.translatedText,
            tokenizedText: userDataUpload.tokenizedText,
            date: userDataUpload.date
          })
          console.log("This is the data to be sent: ", data)
          const updateUserDataURL = `http://localhost:3000/updatehistory`;
          const response = await fetch(updateUserDataURL,{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: data,
            credentials: 'include',
          })
          const updateDataReturn = await response.json();
          console.log("userData Return: ", updateDataReturn)
        }catch(error) {
          console.log(
            "Error getting profile data: ", error
            );
        }
    }
    updateUserData();
}

  return (
    <>
     <DisplayDataContainer>
     <DisplayDataColumn>
        <DisplayDataBackgrounImage/>
        <InputContainer>
          <UpdateButton onClick={onUpdateData}>Update Data</UpdateButton>
          <h5>{`${userDisplayData.date}`}</h5>
        </InputContainer>
        <TextToDeepL
          setTranslatedText={setUserDisplayTranslatedText}
        />
        <Tokenizer
          setTokenizedText={setUserDisplayTokenizedText}
        />
        <TranslatedText translatedText={userDisplayTranslatedText}/>
        <ImageText
          imageText={userDisplayData.imageInformation[0].description}
        />
        <TokenTextTable tokenizedText={userDisplayTokenizedText}/>
      <PictureColumn>
        <ImageDisplay
          linkImagePath={userDisplayData.linkImagePath}
          linkOriginalImageSize={userDisplayData.originalImageSize}
          linkBox={userDisplayData.rawImageBox}
          uploadImagePath={userDisplayData.uploadImagePath}
          uploadOriginalImageSize={userDisplayData.originalImageSize}
          uploadBox={userDisplayData.rawImageBox}
          imageURL={userDisplayData.imageURL}
        />
      </PictureColumn>
      </DisplayDataColumn>
      </DisplayDataContainer>
    </>
  );
}

export default DisplayData;
