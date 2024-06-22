import React from 'react'
import profile from '../../assets/images/profile.jpg'
import './CardComponent.css'
import { GoHeartFill } from "react-icons/go";
import { TbEyeFilled } from "react-icons/tb";
import { RiHeart3Line } from "react-icons/ri";
import { HiOutlineBookmark } from "react-icons/hi";
import { HiBookmark } from "react-icons/hi2";

const CardComponent = ({card}) => {
  return (
    <React.Fragment>
        <div className="card-container">
            <div className="img-container">
                <img src={card.imagelink} alt="" className='card-image'/>
                <div className="img-hover-details">
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
                    <img src={profile} alt="" className='author-image'/>
                    <h3 className='author-name'>{card.authorname}</h3>
                    <span className='pro'>PRO</span>
                </div>
                <div className="img-details">
                    <div className="likes">
                        <GoHeartFill className='like'/>
                        <span>33</span>
                    </div>
                    <div className="views">
                        <TbEyeFilled />
                        <span>565</span>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default CardComponent