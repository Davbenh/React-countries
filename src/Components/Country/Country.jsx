import React from 'react'
import './country.css'

function Country(props) {
  return (
    <div className='country' key={props.name} alt={props.name}>
        <img src={props.imgSrc} alt={props.name} />
        <h1>Name: {props.name}</h1>
        <h2>Capital: {props.capital}</h2>
        <h2>Region: {props.region}</h2>
    </div>
  )
}

export default Country