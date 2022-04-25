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
        While everyone was locked inside during the Covid pandemic, I chose to learn Japanese and jump to software 
        </VideoLandingP>
        <VideoLandingBtnWrapper>
          <Button
            onClick={()=>{navigate("/uploadfile")}}
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
