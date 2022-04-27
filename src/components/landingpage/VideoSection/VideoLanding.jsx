import React, { useState } from "react";
import Video from "../../../main_page_images/sushi.mp4";
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

const signinLink = "/signin";

const VideoLanding = () => {
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
        <VideoLandingH1>Reading Japanese Made Easy</VideoLandingH1>
        <VideoLandingP>
          {" "}
          Get assistance reading Japanese from anywhere. Difficult literiary
          texts and phrasing made easy!
        </VideoLandingP>
        <VideoLandingBtnWrapper>
          <Button
            onClick={()=>{navigate(signinLink)}}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            big="true"
            fontBig="true"
          >
            Get Started
          </Button>
        </VideoLandingBtnWrapper>
      </VideoLandingContent>
    </VideoLandingContainer>
  );
};

export default VideoLanding;
