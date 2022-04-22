import React, { useState } from "react";
import Video from "../../../main_page_images/phone.mp4";
import { Button } from "../NormalButton";
import {
  ConnectContainer,
  ConnectVideoBg,
  VideoBg,
  ConnectContent,
  ConnectH1,
  ConnectBtnWrapper,
} from "./ConnectElements";

const Connect = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <ConnectContainer id="connect">
      <ConnectVideoBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </ConnectVideoBg>
      <ConnectContent>
        <ConnectH1>Connect With Me</ConnectH1>
        <ConnectBtnWrapper>
          <Button
            onClick={() => openInNewTab("https://www.linkedin.com/in/adrianjchin/.com")}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            big="true"
            fontBig="true"
          >
            Meet the Developer
          </Button>
        </ConnectBtnWrapper>
      </ConnectContent>
    </ConnectContainer>
  );
};

export default Connect;
