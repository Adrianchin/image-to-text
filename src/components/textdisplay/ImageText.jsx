import React from "react";

function ImageText(props) {
  const imageText = props.imageText;

  return (
    <>
      {imageText != null 
      ? (
        <div>
          <div>
            <h3 className="center">{`This is the image text`}</h3>
            <h5 className="center">{`${imageText}`}</h5>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default ImageText;
