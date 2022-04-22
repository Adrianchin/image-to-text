import React from "react";
import Icon7 from "../../../main_page_images/FSI.jpg";
import Icon8 from "../../../main_page_images/poetry.jpg";
import Icon9 from "../../../main_page_images/google-vision.jpg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>これソフト</ServicesH1>
      <ServicesWrapper>
        <ServicesCard onClick={() => openInNewTab("https://www.state.gov/foreign-language-training/")}>
          <ServicesIcon src={Icon7} />
          <ServicesH2>Foreign Service Institute</ServicesH2>
          <ServicesP>
              Difficulty of Japanese according to the FSI. The FSI provides language and culture training to U.S. government employees
          </ServicesP>
        </ServicesCard>
        <ServicesCard onClick={() => openInNewTab("https://en.wikipedia.org/wiki/MeCab")}>
          <ServicesIcon src={Icon8} />
          <ServicesH2>Tokenization</ServicesH2>
          <ServicesP>
            MeCab is utilized to achieve tokenization. Japanese is written without spaces, and deciding where one word ends and another begins is non-trivial.
          </ServicesP>
        </ServicesCard>
        <ServicesCard onClick={() => openInNewTab("https://cloud.google.com/vision")}>
          <ServicesIcon src={Icon9} />
          <ServicesH2>Cloud Vision AI</ServicesH2>
          <ServicesP>
            Applications include product identification, facial recognition and object recognition. Powerful tool with capability to batch document scans into text.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
