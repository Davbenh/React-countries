import React from 'react';
import Search from '../Search/Search';
import './header.css';
function Header(props) {
  return (
    <div className='header'>
        <h1>Countries ({props.allCountries.length})</h1>
       
    <Search allCountries={props.allCountries} returnData={props.returnData} />
    </div>
  )
}

export default Header