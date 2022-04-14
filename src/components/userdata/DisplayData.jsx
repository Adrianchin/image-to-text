import React, {useState, useEffect} from "react";
import ImageDisplay from "../imagedisplay/ImageDisplay";
import ImageText from "../textdisplay/ImageText";
import TranslatedText from "../textdisplay/TranslatedText";
import TextToDeepL from "../texttodeepl/TextToDeepL";
import Tokenizer from "../tokenizer/Tokenizer";
import TokenTextTable from "../tokenizer/TokenTextTable";

import {
  GeneralContainer,
  GeneralColumn,
  PictureColumn,
  InputWrapper
} from "../../pages/PageElements";

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
            body: data
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
     <GeneralContainer>
     <GeneralColumn>
      <InputWrapper>
        <TextToDeepL
          setTranslatedText={setUserDisplayTranslatedText}
        />
        <Tokenizer
          setTokenizedText={setUserDisplayTokenizedText}
        />
      </InputWrapper>
      <div className="">
            <input
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Update Data"
              onClick={onUpdateData}
            />
          </div>
      <div>
        <TranslatedText translatedText={userDisplayTranslatedText}/>
      </div>
      <div>
        <ImageText
          imageText={userDisplayData.imageInformation[0].description}
        />
      </div>
      <div>
        <TokenTextTable tokenizedText={userDisplayTokenizedText}/>
      </div>
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
      </GeneralColumn>
      </GeneralContainer>
    </>
  );
}

export default DisplayData;
