import React, { useState, useRef, useEffect } from "react";

function ImageDisplay(props) {
  const linkImagePath = props.linkImagePath;
  const linkOriginalImageSize = props.linkOriginalImageSize;
  const linkBox = props.linkBox;
  const uploadImagePath = props.uploadImagePath;
  const uploadOriginalImageSize = props.uploadOriginalImageSize;
  const uploadBox = props.uploadBox;
  const imageURL = props.imageURL;

  const [box, setBox] = useState("");
  const [currentWidth, setCurrentWidth] = useState("");
  const [currentHeight, setCurrentHeight] = useState("");

  const imageWidth=600; //initial image size, max size
  const imgTagWidth=String(imageWidth);// needs to be a string for the input

  const imageRef = useRef();// Not using, remove?
  const onImgLoad = ({ target: img }) => {
    const { offsetHeight, offsetWidth } = img;
    setCurrentHeight(offsetHeight);
    setCurrentWidth(offsetWidth);
  };

  useEffect(() => {
    //I need to triger this if I upload, as the function is slightly different from the other calculation.
    //Need to structure like this because of update, render, update requirement.

    //IMAGE LINK PATH!!!!!
    if (linkImagePath === true) {
      //IMAGE LINK PATH!!!!!
      function ImageSubmitBoxCalculationUpload() {
        let imageRatioWidth = currentWidth / linkOriginalImageSize.width;
        let imageRatioHeight = currentHeight / linkOriginalImageSize.height;

        setBox({
          top: linkBox.top * imageRatioHeight,
          right: currentWidth - linkBox.right * imageRatioWidth,
          left: linkBox.left * imageRatioWidth,
          bottom: linkBox.bottom * imageRatioHeight,
        });
      }
      ImageSubmitBoxCalculationUpload();
    }

    //I need to triger this if I upload, as the function is slightly different from the other calculation.
    //Need to structure like this because of update, render, update requirement.

    //IMAGE UPLOAD PATH!!!!!
    if (uploadImagePath === true) {
      //IMAGE UPLOAD PATH!!!!!

      function ImageSubmitBoxCalculationUpload() {
        //IMAGE UPLOAD PATH!!!!!

        let originalHeight = uploadOriginalImageSize.height;
        let originalWidth = uploadOriginalImageSize.width;

        let imageRatioWidth = currentWidth / originalWidth;
        let imageRatioHeight = currentHeight / originalHeight;

        setBox({
          top: uploadBox.top * imageRatioHeight,
          right: currentWidth - uploadBox.right * imageRatioWidth,
          left: uploadBox.left * imageRatioWidth,
          bottom: uploadBox.bottom * imageRatioHeight,
        });
      }
      ImageSubmitBoxCalculationUpload();
    }
  }, [
    linkBox,
    uploadImagePath,
    linkImagePath,
    currentHeight,
    currentWidth,
    uploadOriginalImageSize,
    linkOriginalImageSize,
    uploadBox,
  ]);

  return (
    <div className="center">
      <div className="absolute">
        <img
          id="inputimage"
          alt=""
          src={imageURL}
          width={imgTagWidth}
          height="auto"
          onLoad={onImgLoad}
          ref={imageRef}
        />
        <div
          className="boundingbox"
          style={{
            top: box.top,
            right: box.right,
            left: box.left,
            bottom: box.bottom,
          }}
        ></div>
      </div>
    </div>
  );
}

export default ImageDisplay;
