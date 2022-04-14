import React from "react";

function TranslatedText(props) {
  const translatedText = props.translatedText;

  return (
    <>
      {translatedText != null 
      ?(
        <div>
          <div>
            <h3 className="center">{`This is the translated text`}</h3>
            <h5 className="center">{`${translatedText}`}</h5>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default TranslatedText;
