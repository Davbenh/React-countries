import React from 'react';
import CountryList from '../CountryList/CountryList';
import './main.css';

function Main(props) {
  return (
    <div className='main'>
        <CountryList allCountries={props.allCountries} returnData={props.returnData} />
    </div>
  )
}

export default Main