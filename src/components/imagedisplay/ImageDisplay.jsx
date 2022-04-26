import React, { useState, useEffect } from "react";
import "./ImageDisplay.css"

function ImageDisplay(props) {
  const imageURL = props.imageURL;
  const rawImageBox= props.rawImageBox
  const originalImageSize = props.originalImageSize;

  const [box, setBox] = useState("");
  const [currentWidth, setCurrentWidth] = useState("");
  const [currentHeight, setCurrentHeight] = useState("");

  const imageWidth = 600; //initial image size, max size
  const imgTagWidth = String(imageWidth); // needs to be a string for the input

  const onImgLoad = ({ target: img }) => {
    const { offsetHeight, offsetWidth } = img;
    setCurrentHeight(offsetHeight);
    setCurrentWidth(offsetWidth);
  };

  useEffect(() => {
    if (currentWidth && currentHeight && originalImageSize && rawImageBox) {
        let imageRatioWidth = currentWidth / originalImageSize.width;
        let imageRatioHeight = currentHeight / originalImageSize.height;

        setBox({
          top: rawImageBox.top * imageRatioHeight,
          right: currentWidth - rawImageBox.right * imageRatioWidth,
          left: rawImageBox.left * imageRatioWidth,
          bottom: rawImageBox.bottom * imageRatioHeight,
        });
    }
  }, [
    currentHeight,
    currentWidth,
    originalImageSize,
    rawImageBox
  ]);

  return (
    <>
      {imageURL ? (
        <div
          className="center"
          style={{
            height: currentHeight,
          }}
        >
          <div className="absolute">
            <img
              id="inputimage"
              alt="submittedimage"
              src={imageURL}
              width={imgTagWidth}
              height="auto"
              onLoad={onImgLoad}
            />
            <div
              className="boundingbox"
              style={{
                top: box.top,
                right: box.right,
                left: box.left,
                bottom: box.bottom,
              }}
            />
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default ImageDisplay;
