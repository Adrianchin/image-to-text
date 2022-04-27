import React, { useState } from "react";
import Video from "../../../main_page_images/reading.mp4";
import { Button } from "../NormalButton";
import { useNavigate } from "react-router-dom";
import {
  VideoLandingContainer,
  VideoLandingBg,
  VideoBg,
  VideoLandingContent,
  VideoLandingH1,
  VideoLandingP,
  VideoLandingBtnWrapper,
} from "./VideoLandingElements";

const uploadFileLink = "/uploadfile"

const VideoLandingLoggedIn = () => {
  let navigate = useNavigate();
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <VideoLandingContainer id="home">
      <VideoLandingBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </VideoLandingBg>
      <VideoLandingContent>
        <VideoLandingH1>About This App</VideoLandingH1>
        <VideoLandingP>
        While locked inside during the Covid pandemic I chose to learn Japanese and software engineering 
        </VideoLandingP>
        <VideoLandingBtnWrapper>
          <Button
            onClick={()=>{navigate(uploadFileLink)}}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            big="true"
            fontBig="true"
          >
            行きましょう
          </Button>
        </VideoLandingBtnWrapper>
      </VideoLandingContent>
    </VideoLandingContainer>
  );
};

export default VideoLandingLoggedIn;
