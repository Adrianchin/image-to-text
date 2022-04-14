import React, {useState} from 'react'
import ImageSubmit from "../components/imageinput/ImageSubmit";
import LinkSubmittal from "../components/imageinput/LinkSubmittal";
import TranslatedText from "../components/textdisplay/TranslatedText";
import ImageText from "../components/textdisplay/ImageText";
import TokenTextTable from "../components/tokenizer/TokenTextTable";
import ImageDisplay from "../components/imagedisplay/ImageDisplay";
import LoggedInNavbar from "../components/NavigationLoggedIn/LoggedInNavBar";
import LoggedInSideBar from "../components/NavigationLoggedIn/SideBar/LoggedInSideBar";

import {
    GeneralContainer,
    GeneralColumn,
    PictureColumn,
    InputWrapper,
} from "./PageElements";

function UploadFile(props) {
    const setImageText=props.setImageText;
    const imageText=props.imageText;

    const setUploadBox=props.setUploadBox;
    const uploadBox=props.uploadBox;

    const setImageURL=props.setImageURL;
    const imageURL=props.imageURL;

    const setUploadOriginalImageSize=props.setUploadOriginalImageSize;
    const uploadOriginalImageSize=props.uploadOriginalImageSize;
    
    //remove?
    const setUploadImagePath=props.setUploadImagePath;
    const uploadImagePath=props.uploadImagePath;

    //remove?
    const setLinkImagePath=props.setLinkImagePath;
    const linkImagePath=props.linkImagePath;

    const setTranslatedText=props.setTranslatedText;
    const translatedText=props.translatedText

    const setTokenizedText=props.setTokenizedText;
    const tokenizedText=props.tokenizedText;

    const setLinkOriginalImageSize=props.setLinkOriginalImageSize;
    const linkOriginalImageSize=props.linkOriginalImageSize;

    const setLinkBox=props.setLinkBox;
    const linkBox=props.linkBox;
    
    const userData=props.userData;

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };

  return (
    <>
        <LoggedInSideBar isOpen={isOpen} toggle={toggle}/>
        <LoggedInNavbar toggle={toggle}/>
        <GeneralContainer>
            <GeneralColumn>
            <InputWrapper>

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

            </InputWrapper>
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
                <PictureColumn>
                <ImageDisplay
                    linkImagePath={linkImagePath}
                    linkOriginalImageSize={linkOriginalImageSize}
                    linkBox={linkBox}
                    uploadImagePath={uploadImagePath}
                    uploadOriginalImageSize={uploadOriginalImageSize}
                    uploadBox={uploadBox}
                    imageURL={imageURL}
                />
                </PictureColumn>
            </GeneralColumn>
        </GeneralContainer>
    </>
  )
}

export default UploadFile