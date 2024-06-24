import React, { useEffect, useState } from 'react'
import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import './App.css'
import MenuBarComponent from './components/MenuBarComponent/MenuBarComponent';
import CardContainerComponent from './components/CardContainerComponent/CardContainerComponent';
import FooterComponent from './components/FooterComponent/FooterComponent';
import data from './data/data.json';
import { Toaster } from 'react-hot-toast';

const App = () => {
  const [filteredData , setFilteredData ]= useState(data);
  const [sortOption , setSortOption] = useState("Following");
  const [category , setCategory] = useState("Discover");
  const [searchTerm , setSearchTerm] = useState('');

  useEffect(()=>{
    let filtered = [...data];

    if(searchTerm){
      filtered = filtered.filter((card) =>{
        return (card.name && card.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (card.authorname && card.authorname.toLowerCase().includes(searchTerm.toLowerCase()))
      })
    }

    if(sortOption==="Popular"){
      filtered = filtered.sort((a,b) => b.viewcount - a.viewcount)
    }
    else if(sortOption === "Noteworthy"){
      filtered = filtered.sort((a,b) => b.likecount - a.likecount)
    }

    if(category!="Discover"){
      filtered = filtered.filter((card)=>{return  card && card.category === category})
    }

    setFilteredData(filtered);
  },[sortOption , category ,searchTerm])

  return (
    <React.Fragment>
      <NavBarComponent searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <MenuBarComponent sortOption={sortOption} setSortOption={setSortOption}
                        category={category} setCategory={setCategory}/>
      <CardContainerComponent data={filteredData}/>
      <FooterComponent/>
      <Toaster />
    </React.Fragment>
    )
}

export default App