import React from "react";
import Icon4 from "../../../main_page_images/umbrella_tokyo.jpg";
import Icon5 from "../../../main_page_images/market.jpg";
import Icon6 from "../../../main_page_images/castle.jpg";
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
      <ServicesH1 >Future Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard onClick={() => openInNewTab("https://en.wikipedia.org/wiki/Korean_language")}>
          <ServicesIcon src={Icon4} />
          <ServicesH2>More Languages</ServicesH2>
          <ServicesP>Tokenization to be expanded for Korean</ServicesP>
        </ServicesCard>
        <ServicesCard onClick={() => openInNewTab("https://en.wikipedia.org/wiki/Tesseract_(software)")}>
          <ServicesIcon src={Icon5} />
          <ServicesH2>Improved Recognition</ServicesH2>
          <ServicesP>
            More machine learning algorythms to be implimented - Improved OCR,
            Tokenization and Translation
          </ServicesP>
        </ServicesCard>
        <ServicesCard onClick={() => openInNewTab("https://en.wikipedia.org/wiki/JMdict")}>
          <ServicesIcon src={Icon6} />
          <ServicesH2>English Dictionary</ServicesH2>
          <ServicesP>
            Addition of a Japanese to English dictionary to assist with
            tokenized text
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
