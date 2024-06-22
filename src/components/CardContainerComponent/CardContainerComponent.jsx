import React from 'react'
import CardComponent from '../CardComponent/CardComponent'
import './CardContainerComponent.css'

const CardContainerComponent = () => {
  return (
    <div className='cards-container'>
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
    </div>
  )
}

export default CardContainerComponent