import React, { useState, useEffect } from "react";
import ImageDisplay from "../imagedisplay/ImageDisplay";
import ImageText from "../textdisplay/ImageText";
import TranslatedText from "../textdisplay/TranslatedText";
import TextToDeepL from "../texttodeepl/TextToDeepL";
import Tokenizer from "../tokenizer/Tokenizer";
import { useNavigate } from "react-router-dom";
import TokenSortingTable from "../tokenizer/TokenSortingTable";

import {
  TokenizedTableContainer,
  TokenizerTableBackground,
  UpdateButton,
  InputContainer,
} from "./DisplayDataElements";

const updateUserEndpoint = `http://localhost:3000/uploads/updatehistory`;
const signinLink = "/signin";

function DisplayData(props) {
  let navigate = useNavigate();
  const userDisplayData = props.userDisplayData;
  const notes = props.notes

  const [userDisplayTranslatedText, setUserDisplayTranslatedText] = useState(
    userDisplayData.translatedText
  );
  const [userDisplayTokenizedText, setUserDisplayTokenizedText] = useState(
    userDisplayData.tokenizedText
  );
  const [userDataUpload, setUserDataUpload] = useState(null);

  useEffect(() => {
    const userDisplayDataPlaceholder = { ...userDisplayData };
    userDisplayDataPlaceholder.translatedText = userDisplayTranslatedText;
    userDisplayDataPlaceholder.tokenizedText = userDisplayTokenizedText;
    userDisplayDataPlaceholder.date = new Date();
    setUserDataUpload(userDisplayDataPlaceholder);
  }, [userDisplayTranslatedText, userDisplayTokenizedText]);

  async function onUpdateData() {
    async function updateUserData() {
      try {
        const data = JSON.stringify({
          _id: userDataUpload._id,
          translatedText: userDataUpload.translatedText,
          tokenizedText: userDataUpload.tokenizedText,
          date: userDataUpload.date,
        });
        const updateUserDataURL = updateUserEndpoint;
        const response = await fetch(updateUserDataURL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: data,
          credentials: "include",
        });
        const updateDataReturn = await response.json();
        console.log(updateDataReturn)
        if(response.status===401){
          console.log("Error user needs to sign in", response.status);
          navigate(signinLink);
        }
      } catch (error) {
        console.log("Error getting profile data: ", error);
      }
    }
    updateUserData();
  }

  return (
    <>
          <InputContainer>
            <UpdateButton onClick={onUpdateData}>Update Data</UpdateButton>
            <h5>{`${userDisplayData.date}`}</h5>
          </InputContainer>
          <TextToDeepL setTranslatedText={setUserDisplayTranslatedText} />
          <Tokenizer setTokenizedText={setUserDisplayTokenizedText} />
          {userDisplayTokenizedText
          ?<TokenSortingTable
            tokenizedText={userDisplayTokenizedText} 
            notes={userDisplayData.notes}/>
          :<TokenizedTableContainer>
            <TokenizerTableBackground />
                  <h1>Error with Tokenization and table. Review input and tokenize again</h1>
          </TokenizedTableContainer>}
          <ImageText
            imageText={userDisplayData.imageInformation[0].description}
          />
          <TranslatedText translatedText={userDisplayTranslatedText} />

            <ImageDisplay
              rawImageBox={userDisplayData.rawImageBox}
              originalImageSize={userDisplayData.originalImageSize}
              imageURL={userDisplayData.imageURL}
            />
    </>
  );
}

export default DisplayData;
