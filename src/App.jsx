import React, { useEffect, useState } from 'react'
import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import './App.css'
import MenuBarComponent from './components/MenuBarComponent/MenuBarComponent';
import CardContainerComponent from './components/CardContainerComponent/CardContainerComponent';
import FooterComponent from './components/FooterComponent/FooterComponent';
import data from './data/data.json';

const App = () => {
  const[filteredData , setFilteredData ]= useState(data);
  const [sortOption , setSortOption] = useState("Following");

  useEffect(()=>{
    let filtered = [...data];

    if(sortOption==="Popular"){
      filtered = filtered.sort((a,b) => b.viewcount - a.viewcount)
    }
    else if(sortOption === "Noteworthy"){
      filtered = filtered.sort((a,b) => b.likecount - a.likecount)
    }

    setFilteredData(filtered);
  },[sortOption])

  return (
    <React.Fragment>
      <NavBarComponent/>
      <MenuBarComponent sortOption={sortOption} setSortOption={setSortOption}/>
      <CardContainerComponent data={filteredData}/>
      <FooterComponent/>
    </React.Fragment>
    )
}

export default App