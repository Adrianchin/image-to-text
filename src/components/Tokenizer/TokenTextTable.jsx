import React from "react";

function TokenTextTable(props) {
  const tokenizedText = props.tokenizedText;

  function renderHeader() {
    let headerElement = [
      "id",
      "token",
      "token Kana",
      "Root",
      "Root kana",
      "Type",
      "conj-Type",
      "conj-Form",
    ];
    //renders the headers
    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }
  //renders the body of the table
  function renderBody() {
    //use the && so it only runs when the data is returned so no errors occur
    return (
      tokenizedText &&
      tokenizedText.map(
        ({
          id,
          token,
          pronunciation,
          tokenRoot,
          pronunciationBase,
          wordType,
          conjugationType,
          conjugationForm,
        }) => {
          //arrow function means "do this when react detets updates"
          return (
            <tr key={id}>
              <td>{id}</td>
              <td>{token}</td>
              <td>{pronunciation}</td>
              <td>{tokenRoot}</td>
              <td>{pronunciationBase}</td>
              <td>{wordType}</td>
              <td>{conjugationType}</td>
              <td>{conjugationForm}</td>
            </tr>
          );
        }
      )
    );
  }

  return (
    <>
      {tokenizedText != null 
      ? (
        <div>
          <div className="center">
            <h1 id="title">Tokenized Table</h1>
          </div>
          <div className="center">
            <table id="tokenizedTable">
              <thead>
                <tr>{renderHeader()}</tr>
              </thead>
              <tbody>{renderBody()}</tbody>
            </table>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default TokenTextTable;
