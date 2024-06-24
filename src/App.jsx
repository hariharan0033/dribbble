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
  const [recommendations , setRecommendations] = useState([]);
  const [recommendationTerm , setRecommendationTerm] = useState('');

  useEffect(()=>{
    let filtered = [...data];

    if(searchTerm){
      filtered = filtered.filter((card) =>{
        
        return (card.name && card.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (card.authorname && card.authorname.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (card.category && card.category.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (card.tag && card.tag.toLowerCase().includes(searchTerm.toLowerCase()))
      })
    }

    
    if (recommendationTerm) {
      const matchedTerms = new Set();
      data.forEach((card) => {
        if (card.name && card.name.toLowerCase().includes(recommendationTerm.toLowerCase()) && card.name.length > 2) {
          matchedTerms.add(card.name);
        }
        if (card.authorname && card.authorname.toLowerCase().includes(recommendationTerm.toLowerCase()) && card.authorname.length > 2) {
          matchedTerms.add(card.authorname);
        }
        if (card.category && card.category.toLowerCase().includes(recommendationTerm.toLowerCase()) && card.category.length > 2) {
          matchedTerms.add(card.category);
        }
        if (card.tag && card.tag.toLowerCase().includes(recommendationTerm.toLowerCase()) && card.tag.length > 2) {
          matchedTerms.add(card.tag);
        }
      });
      setRecommendations([...matchedTerms]);
    } else {
      setRecommendations([]);
    }

    // console.log(recommendations)
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
  },[sortOption , category ,searchTerm , recommendationTerm])

  return (
    <React.Fragment>
      <NavBarComponent searchTerm={searchTerm} setSearchTerm={setSearchTerm}
                        recommendations={recommendations} setRecommendations ={setRecommendations}
                        recommendationTerm ={recommendationTerm} setRecommendationTerm={setRecommendationTerm}
                        />
      <MenuBarComponent sortOption={sortOption} setSortOption={setSortOption}
                        category={category} setCategory={setCategory}/>
      <CardContainerComponent data={filteredData}/>
      <FooterComponent/>
      <Toaster />
    </React.Fragment>
    )
}

export default App