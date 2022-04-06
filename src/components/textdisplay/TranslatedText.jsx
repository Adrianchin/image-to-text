import React from "react";

function TranslatedText(props){
    const translatedText=props.translatedText

    return(
        <div>
            <h3 className="center">{`This is the translated text`}</h3>
            <h3 className="center">{`${translatedText}`}</h3>
        </div>
    );
}

export default TranslatedText;