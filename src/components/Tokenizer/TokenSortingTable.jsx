import React, {useMemo} from "react";
import {
  TokenizedTableContainer,
  TokenizerTableBackground,
} from "./TokenizerElements";

import {useTable, useSortBy, useGlobalFilter, usePagination} from "react-table";
import GlobalFilter from "./GlobalFilter";
import {Checkbox} from "./Checkbox";

function TokenSortingTable(props) {

  const tokenizedText = props.tokenizedText;
  const notes = props.notes;
    
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
    const data = tokenizedText; //Not using useMemo because we need to update tokenized text live

    const columns = useMemo(() => GROUPEDCOLUMNS,
     []
    )
    
  //destructured useTable made from columns and data, needed to display data
  const {
    getTableProps,//function that needs to be destructured on table tag
    getTableBodyProps, //function that needs to be destructured on table body tag
    headerGroups, //Contains column heading information that belongs on T header tag. Requires a map to render (similar to rendering a list)
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
    state,
    setGlobalFilter,
    allColumns,
  } = useTable({ columns, data }, useGlobalFilter, useSortBy, usePagination) /*useSortBy is a react table hook for sorting added to useTable*/

  const {globalFilter, pageIndex, pageSize} = state;

  if (tokenizedText === null && notes === "Error with Tokenizer") { //To umpliment path with notes
    return (
      <TokenizedTableContainer>
      <TokenizerTableBackground />
              <h1>Error with Tokenization and table. Input character error. Please review and resubmit in profile</h1>
      </TokenizedTableContainer>
    )
  }else {

    return (
      <TokenizedTableContainer>
              <TokenizerTableBackground />
              <>
              <div>
                {
                  allColumns.map(column => (
                    <div key={column.id}>
                      <label>
                        <Checkbox {...column.getToggleHiddenProps()}/>
                        {column.Header}
                      </label>
                    </div>
                  ))
                }
              </div>
              <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
      <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
        <thead>
          {headerGroups.map(headerGroup => (/*for each header group, we render the tr tag*/
            <tr {...headerGroup.getHeaderGroupProps()/*in each tr tag, we destructure getHeaderGroupProps (required to enable layout for header)*/ }>
              {headerGroup.headers.map(column => (/* in each table row, we map in table headers to access each column*/
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps()/* we pass column.getSortByToggleProps to allow sorting */)/* For each th tag, we destructure the column.getHeaderProps (required to enable layout for header) */}
                  style={{
                    borderBottom: 'solid 3px red',
                    background: 'aliceblue',
                    color: 'black',
                    fontWeight: 'bold',
                  }}
                >
                  {column.render('Header')/* for each th (header section) we render the header section */}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? `↑` : `↓`):'' /* if sorted (T, F), isSortedDesc checks (T,F) (desc, asc)*/}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()/*for each body group, we access getTableBodyProps (required to enable layout for body) and render the tbody tag*/}>
          {page.map(row => {/*we map into rows and in each row, we map the prepareRow function and pass in row as argument*/
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
      </table>
      <div>
          <span>
            page{""}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>
          </span>
        <span>
          | Go to page: {''}
          <input 
            type='number' 
            defaultValue={pageIndex+1}
            onChange={(event)=>{
            const pageNumber = event.target.value ? Number(event.target.value) - 1 : 0
            gotoPage(pageNumber)
          }}
          style={{width: "50px"}}/>
        </span>
        <select value={pageSize} onChange={event => setPageSize(Number(event.target.value))}>
          {
            [10, 25, 50].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))
          }
        </select>
        <button onClick={()=> gotoPage (0)} disabled ={!canPreviousPage}>{"<<"}</button>
        <button onClick={()=> previousPage()} disabled={!canPreviousPage}>Previous</button>
        <button onClick={()=> nextPage()} disabled={!canNextPage}>Next</button>
        <button onClick={()=> gotoPage (pageCount -1)} disabled ={!canNextPage}>{">>"}</button>
      </div>
      </>
      </TokenizedTableContainer>
    )
  }
}

export default TokenSortingTable;
