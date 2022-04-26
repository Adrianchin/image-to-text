import React, {useState} from 'react'
import {useAsyncDebounce} from "react-table";//note allowes a delay before the search, reduces the amount of renders that may occur if you dont do this

function GlobalFilter(props) {
    const filter = props.filter;
    const setFilter = props.setFilter

    const [value, setValue] = useState(filter)

    const onChange = useAsyncDebounce((value) => {
        setFilter(value || undefined)
    }, 300)

  return (
    <span>
        Search:{""}
        <input 
        value={value || ""} 
        onChange={(event) => {
            setValue(event.target.value) 
            onChange(event.target.value)
            }}
        />
    </span>
  )
}

export default GlobalFilter