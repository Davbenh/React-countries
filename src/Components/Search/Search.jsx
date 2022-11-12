import React from 'react'
import './search.css';


export default function Search(props) {
  return (
    <div className='search'>
        <label>search for country</label><input type="text" onInput={(e) =>props.returnData(e.target.value.toLowerCase()) }></input>
    </div>
  )
}
