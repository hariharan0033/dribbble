import React from 'react'
import notFound from '../../assets/images/Dribblenotfound.jpg';
import './CardNotFoundComponent.css'

const CardNotFoundComponent = () => {
  return (
    <div className='card-not-found'>
        <img src={notFound} alt="NoCards :(" className='not-found-img'/>
        <div className="result">
            <h3>No results found</h3>
            <p>It seems we can't find any results based on your search</p>

        </div>
    </div>
  )
}

export default CardNotFoundComponent