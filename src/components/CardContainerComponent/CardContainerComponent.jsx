import React from 'react'
import CardComponent from '../CardComponent/CardComponent'
import './CardContainerComponent.css'

const CardContainerComponent = ({data}) => {
  return (
    <div className='cards-container'>
      {data.map((card)=>{
          return <CardComponent key={card.name} card={card}/>
      })}
      
    </div>
  )
}

export default CardContainerComponent