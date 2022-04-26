import React, {useMemo} from "react";
import {
  TokenizedTableContainer,
  TokenizerTableBackground,
} from "./TokenizerElements";

import {useTable} from "react-table";

function TokenReactTable(props) {

  const tokenizedText = props.tokenizedText;
  const notes = props.notes;
  
  console.log(tokenizedText)

  
  //The blueprint, could import a seperate file
  const COLUMNS = [
    {
      Header: 'ID',
      Footer:'ID',
      accessor: 'id', // accessor is the "key" in the data
    },
    {
      Header: 'Token',
      Footer: 'Token',
      accessor: 'token',
    },
      {
        Header: 'Kana',
        Footer: 'Kana',
        accessor: 'pronunciation', // accessor is the "key" in the data
      },
      {
        Header: 'Root',
        Footer: 'Root',
        accessor: 'tokenRoot',
      },
      {
        Header: 'Kana',
        Footer: 'Kana',
        accessor: 'pronunciationBase', // accessor is the "key" in the data
      },
      {
        Header: 'Type',
        Footer: 'Type',
        accessor: 'wordType',
      },
      {
        Header: 'Conj-Type',
        Footer: 'Conj-Type',
        accessor: 'conjugationType', // accessor is the "key" in the data
      },
      {
        Header: 'Conj-Form',
        Footer: 'Conj-Form',
        accessor: 'conjugationForm', // accessor is the "key" in the data
      },
    ]
    
    const GROUPEDCOLUMNS = [
      {
        Header: 'ID',
        Footer:'ID',
        accessor: 'id',
      },
      {
        Header: 'Tokenized Text',
        Footer: 'Tokenized Text',
        columns: [
          {
            Header: 'Token',
            Footer: 'Token',
            accessor: 'token',
          },
          {
            Header: 'Kana',
            Footer: 'Kana',
            accessor: 'pronunciation', 
          },
          {
            Header: 'Root',
            Footer: 'Root',
            accessor: 'tokenRoot',
          },
          {
            Header: 'Kana',
            Footer: 'Kana',
            accessor: 'pronunciationBase', 
          },
        ]
      },
      {
        Header: 'Grammar',
        Footer: 'Grammar',
        columns: [
          {
            Header: 'Conj-Type',
            Footer: 'Conj-Type',
            accessor: 'conjugationType', 
          },
          {
            Header: 'Conj-Form',
            Footer: 'Conj-Form',
            accessor: 'conjugationForm', 
          },
        ]
      },
    ]

    //The data itself, could import a seperate file
    const data = useMemo(() => tokenizedText,
      []
    )
    const columns = useMemo(() => GROUPEDCOLUMNS,
     []
    )
    
  //destructured useTable made from columns and data, needed to display data
  const {
    getTableProps,//function that needs to be destructured on table tag
    getTableBodyProps, //function that needs to be destructured on table body tag
    headerGroups, //Contains column heading information that belongs on T header tag. Requires a map to render (similar to rendering a list)
    footerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })

  if (tokenizedText === null && notes === "Error with Tokenizer") { //To umpliment path with notes
    return (
      <TokenizedTableContainer>
      <TokenizerTableBackground />
              <p>Error with Tokenization and table. Input character error. Please review and resubmit in profile</p>
      </TokenizedTableContainer>
    )
  }else {

    return (
      <TokenizedTableContainer>
              <TokenizerTableBackground />
      <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
        <thead>
          {headerGroups.map(headerGroup => (/*for each header group, we render the tr tag*/
            <tr {...headerGroup.getHeaderGroupProps()/*in each tr tag, we destructure getHeaderGroupProps (required to enable layout for header)*/ }>
              {headerGroup.headers.map(column => (/* in each table row, we map in table headers to access each column*/
                <th
                  {...column.getHeaderProps()/* For each th tag, we destructure the column.getHeaderProps (required to enable layout for header) */}
                  style={{
                    borderBottom: 'solid 3px red',
                    background: 'aliceblue',
                    color: 'black',
                    fontWeight: 'bold',
                  }}
                >
                  {column.render('Header')/* for each th (header section) we render the header section */}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()/*for each body group, we access getTableBodyProps (required to enable layout for body) and render the tbody tag*/}>
          {rows.map(row => {/*we map into rows and in each row, we map the prepareRow function and pass in row as argument*/
            prepareRow(row)
            return ( /*we need to return the tr tag for each row */
              <tr {...row.getRowProps() /* On each tr tag we destructure row.getRowProps (required to enable layout for rows) and map over the row.cells*/}>
                {row.cells.map(cell => {/* gives us access to individual row cells */
                  return (
                    <td/* return the td tag for each cell */
                      {...cell.getCellProps()/* On each td tag we destructure cell.getCellProps (required to enable layout for cells) */}
                      style={{
                        padding: '10px',
                        border: 'solid 1px gray',
                        background: 'papayawhip',
                      }}
                    >
                      {cell.render('Cell')/* on each cell, we render the cell */}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
        <tfoot>
          {footerGroups.map(footerGroup => (
              <tr{...footerGroup.getFooterGroupProps()}>
                {
                  footerGroup.headers.map(column => (
                    <td {...column.getFooterProps()}
                    style={{
                      borderTop: 'solid 3px red',
                      background: 'aliceblue',
                      color: 'black',
                      fontWeight: 'bold',}}
                      >
                      {
                        column.render("Footer")
                      }
                    </td>
                  ))
                }
              </tr>
            ))
          }
        </tfoot>
      </table>
      </TokenizedTableContainer>
    )
  }
}

  /*
  const tokenizedText = props.tokenizedText;
  const notes = props.notes;

  if (tokenizedText === null && notes === "Error with Tokenizer") { //To umpliment path with notes
    return (
      <TokenizedTableContainer>
      <TokenizerTableBackground />
              <p>Error with Tokenization and table. Input character error. Please review and resubmit in profile</p>
      </TokenizedTableContainer>
    )
  }else {
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
        {tokenizedText != null || tokenizedText === String ? (
          <TokenizedTableContainer>
            <TokenizerTableBackground />
            <table id="tokenizedTable">
              <thead>
                <tr>{renderHeader()}</tr>
              </thead>
              <tbody>{renderBody()}</tbody>
            </table>
          </TokenizedTableContainer>
        ) : (
          <></>
        )}
      </>
    );
  }
}
*/
export default TokenReactTable;
