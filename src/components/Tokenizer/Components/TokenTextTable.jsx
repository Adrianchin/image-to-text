import React from "react";

function TokenTextTable(props) {
  const tokenizedText = props.tokenizedText;

  function renderHeader() {
    let headerElement = [
      "id",
      "token",
      "wordType",
      "tokenRoot",
      "conjugationType",
      "conjugationForm",
      "pronunciation",
      "pronunciationBase",
      "extraInfo"
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
          wordType,
          tokenRoot,
          conjugationType,
          conjugationForm,
          pronunciation,
          pronunciationBase,
          extraInfo,
        }) => {
          //arrow function means "do this when react detets updates"
          return (
            <tr key={id}>
              <td>{id}</td>
              <td>{token}</td>
              <td>{wordType}</td>
              <td>{tokenRoot}</td>
              <td>{conjugationType}</td>
              <td>{conjugationForm}</td>
              <td>{pronunciation}</td>
              <td>{pronunciationBase}</td>
              <td>{extraInfo}</td>
            </tr>
          );
        }
      )
    );
  }

  return (
    <>
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
    </>
  );
}

export default TokenTextTable;