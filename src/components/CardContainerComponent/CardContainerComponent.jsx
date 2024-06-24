import React from 'react'
import CardComponent from '../CardComponent/CardComponent'
import './CardContainerComponent.css'
import CardNotFoundComponent from '../CardNotFoundComponent/CardNotFoundComponent'

const CardContainerComponent = ({data}) => {
  if(!data ||data.length===0){
    return <CardNotFoundComponent/>
  }
  return (
    <div className='cards-container'>
      {data.map((card)=>{
          return <CardComponent key={card.name} card={card}/>
      })}
      
    </div>
  )
}

export default CardContainerComponent