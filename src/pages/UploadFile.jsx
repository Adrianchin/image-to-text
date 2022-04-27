import React, { useState } from "react";
import ImageSubmit from "../components/imageinput/ImageSubmit";
import LinkSubmittal from "../components/imageinput/LinkSubmittal";
import TranslatedText from "../components/textdisplay/TranslatedText";
import ImageText from "../components/textdisplay/ImageText";
import TokenSortingTable from "../components/tokenizer/TokenSortingTable";
import ImageDisplay from "../components/imagedisplay/ImageDisplay";
import LoggedInNavbar from "../components/NavigationLoggedIn/LoggedInNavBar";
import LoggedInSideBar from "../components/NavigationLoggedIn/SideBar/LoggedInSideBar";

import {
  TokenizedTableContainer,
  TokenizerTableBackground,
  UploadContainer,
  UploadColumn,
  InputWrapper,
  NavBarPlaceholder,
  UploadBackgrounImage,
} from "./PageElements";

function UploadFile(props) {
  const rawImageBox = props.rawImageBox;
  const setRawImageBox = props.setRawImageBox;

  const uploadBox = props.uploadBox;
  const linkBox = props.linkBox;

  const setImageText = props.setImageText;
  const imageText = props.imageText;

  const setSubmitImageData = props.setSubmitImageData;
  const submitImageData = props.submitImageData;

  const setNotes = props.setNotes;
  const notes = props.notes;

  const setImageURL = props.setImageURL;
  const imageURL = props.imageURL;

  const setTranslatedText = props.setTranslatedText;
  const translatedText = props.translatedText;

  const setTokenizedText = props.setTokenizedText;
  const tokenizedText = props.tokenizedText;

  const setOriginalImageSize = props.setOriginalImageSize;
  const originalImageSize = props.originalImageSize;

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <LoggedInSideBar isOpen={isOpen} toggle={toggle} />
      <LoggedInNavbar toggle={toggle} />
      <UploadContainer>
        <UploadColumn>
          <NavBarPlaceholder />
          <UploadBackgrounImage />
          <InputWrapper>
            <ImageSubmit
              setImageText={setImageText}
              setImageURL={setImageURL}
              setTranslatedText={setTranslatedText}
              setTokenizedText={setTokenizedText}
              setNotes={setNotes}
              setRawImageBox={setRawImageBox}
              setOriginalImageSize={setOriginalImageSize}
              setSubmitImageData={setSubmitImageData}
            />

            <LinkSubmittal
              setImageText={setImageText}
              setTranslatedText={setTranslatedText}
              setImageURL={setImageURL}
              setTokenizedText={setTokenizedText}
              setNotes={setNotes}
              setRawImageBox={setRawImageBox}
              setOriginalImageSize={setOriginalImageSize}
              setSubmitImageData={setSubmitImageData}
            />
          </InputWrapper>
          {tokenizedText 
          ?<TokenSortingTable 
          tokenizedText={tokenizedText} 
          notes={notes} />
          :!tokenizedText && notes === "Error with Tokenizer"
            ?<TokenizedTableContainer>
            <TokenizerTableBackground />
                  <h1>Error with Tokenization and table. Review tokenized input in profile and retokenize again</h1>
            </TokenizedTableContainer>
            :<></>
          }
          <ImageText imageText={imageText} />
          <TranslatedText translatedText={translatedText} />
            <ImageDisplay
              imageURL={imageURL}
              rawImageBox={rawImageBox}
              originalImageSize={originalImageSize}
            />
        </UploadColumn>
      </UploadContainer>
    </>
  );
}

export default UploadFile;
