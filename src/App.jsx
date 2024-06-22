import React, { useEffect, useState } from 'react'
import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import './App.css'
import MenuBarComponent from './components/MenuBarComponent/MenuBarComponent';
import CardContainerComponent from './components/CardContainerComponent/CardContainerComponent';
import FooterComponent from './components/FooterComponent/FooterComponent';
import data from './data/data.json';

const App = () => {
  const[filteredData , setFilteredData ]= useState(data);
  useEffect(()=>{
    let filteredData = data;
    setFilteredData(filteredData);
  })
  return (
    <React.Fragment>
      <NavBarComponent/>
      <MenuBarComponent/>
      <CardContainerComponent data={filteredData}/>
      <FooterComponent/>
    </React.Fragment>
    )
}

export default App