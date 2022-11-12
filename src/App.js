import React from 'react';
import { useState } from 'react';
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main"
import './App.css';
import {data} from "./data";



function App() {

  const [allCountries,setAllCountries] = useState(data);

 function returnData(e) {
      setAllCountries(data.filter(v => v.name.common.toLowerCase().includes(e) ? v : false))
  }

  return (
    <>
     <Header allCountries={allCountries} returnData={returnData}/>
     <Main allCountries={allCountries} returnData={returnData}/>
   
     </>
  );
}

export default App;
