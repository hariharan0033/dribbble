import React, { useState } from 'react'
import profile from '../../assets/images/profile.jpg'
import './CardComponent.css'
import { GoHeartFill } from "react-icons/go";
import { TbEyeFilled } from "react-icons/tb";
import { RiHeart3Line } from "react-icons/ri";
import { HiOutlineBookmark } from "react-icons/hi";
import { HiBookmark } from "react-icons/hi2";

const CardComponent = ({card}) => {
    const [hoverClass , setHoverClass] = useState('');
    const [saved , setSaved] = useState(false)
    const [like , setLike] = useState(card.likecount)

      const handleMouseEnter = () => {
        setHoverClass('hover');
      };
    
      const handleMouseLeave = () => {
        setHoverClass('');
      };
      const handleSaveClick = () => {
        setSaved(!saved);
        
      };
      const handleLikeClick = () => {
        card.isliked ? setLike(like - 1) : setLike(like + 1) ;
        card.isliked = !card.isliked ;
      };

  return (
    <React.Fragment>
        <div className="card-container">
            <div className="img-container"  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img src={card.imagelink} alt="" className='card-image'/>
                <div className={`img-hover-details ${hoverClass}`}>
                    <h3>{card.name}</h3>
                    <div className="img-actions">
                      <div className="actions" onClick={handleSaveClick}>{saved ? <HiBookmark /> : <HiOutlineBookmark />}</div>

                      <div className="actions" onClick={handleLikeClick}>{card.isliked ? <GoHeartFill className='liked' /> : <RiHeart3Line />}</div>
                    </div>
                </div>
            </div>

            <div className="card-details">
                <div className="author-details">
                    <img src={card.profilephotolink} alt={card.authorname} className='author-image'/>
                    <h4 className='author-name'>{card.authorname}</h4>
                    <span className='pro'>PRO</span>
                </div>
                <div className="img-details">
                    <div className="likes">
                        {card.isliked?<GoHeartFill className="like liked"  onClick={handleLikeClick}/>
                                     :<GoHeartFill className="like"  onClick={handleLikeClick}/>}
                        <span>{like}</span>
                    </div>
                    <div className="views">
                        <TbEyeFilled />
                        <span>{card.viewcount}</span>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default CardComponent