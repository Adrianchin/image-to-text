import React from 'react'
import ImageDisplay from "../imagedisplay/ImageDisplay";
import ImageText from "../textdisplay/ImageText";
import TranslatedText from "../textdisplay/TranslatedText";
import Tokenizer from "../tokenizer/Tokenizer";
import TokenTextTable from "../tokenizer/TokenTextTable";

function DisplayData(props) {
    const userDisplayData=props.userDisplayData;

  return (
      <>
    <div>
        <ImageText
            imageText={userDisplayData.imageInformation[0].description}
        />
    </div>
    <div>
        <TranslatedText
            translatedText={userDisplayData.translatedText}
        />
    </div>
    <div>
        <TokenTextTable 
            tokenizedText={userDisplayData.tokenizedText}
        />
    </div>
    <div>
        <ImageDisplay
            linkImagePath={userDisplayData.linkImagePath}
            linkOriginalImageSize={userDisplayData.originalImageSize}
            linkBox={userDisplayData.rawImageBox}
            uploadImagePath={userDisplayData.uploadImagePath}
            uploadOriginalImageSize={userDisplayData.originalImageSize}
            uploadBox={userDisplayData.rawImageBox}
            imageURL={userDisplayData.imageURL}
        />
    </div>
    </>
  )
}

export default DisplayData