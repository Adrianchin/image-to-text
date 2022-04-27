import React from 'react'

function ColumnFilter(props) {
    const {filterValue, setFilter} = props.column

  return (
    <span>
        Search:{""}
        <input value={filterValue || ""} onChange={(event) => setFilter(event.target.value)}/>
    </span>
  )
}

export default ColumnFilter