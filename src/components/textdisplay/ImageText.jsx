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
            <h2 className="center">{`${imageText}`}</h2>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default ImageText;
