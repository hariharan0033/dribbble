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

    const handleMouseEnter = () => {
        setClassName('hover');
      };
    
      const handleMouseLeave = () => {
        setClassName('');
      };

  return (
    <React.Fragment>
        <div className="card-container">
            <div className="img-container">
                <img src={card.imagelink} alt="" className='card-image'/>
                <div className={`img-hover-details ${hoverClass}`}>
                    <h3>{card.name}</h3>
                    <div className="img-actions">
                      <div className="actions"><HiOutlineBookmark /></div>
                      {/* <div className="actions"><HiBookmark /></div> */}
                      <div className="actions"><RiHeart3Line /></div>
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
                        <GoHeartFill className='like'/>
                        <span>{card.likecount}</span>
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