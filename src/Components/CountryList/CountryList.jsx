import React from 'react'
import Country from '../Country/Country'
import './countryList.css'

function CountryList(props) {
  return ( <div className='countryList'>
    { props.allCountries.map(v => 
        <Country key={v.name.common} name={v.name.common} imgSrc={v.flags.png} capital={v.capital} region={v.region} />
        )} 
        
        </div>
  )
}

export default CountryList;