import React from 'react'
import profile from '../../assets/images/profile.jpg'
import './CardComponent.css'
import { GoHeartFill } from "react-icons/go";
import { TbEyeFilled } from "react-icons/tb";
import { RiHeart3Line } from "react-icons/ri";
import { HiOutlineBookmark } from "react-icons/hi";
import { HiBookmark } from "react-icons/hi2";

const CardComponent = () => {
  return (
    <React.Fragment>
        <div className="card-container">
            <div className="img-container">
                <img src={profile} alt="" className='card-image'/>
                <div className="img-hover-details">
                    <h3>img-name</h3>
                    <div className="img-actions">
                        <RiHeart3Line />
                        <HiOutlineBookmark /><HiBookmark />
                    </div>
                </div>
            </div>
            <div className="card-details">
                <div className="author-details">
                    <img src={profile} alt="" className='author-image'/>
                    <h3>Author</h3>
                    <span>pro</span>
                </div>
                <div className="img-details">
                    <div className="likes">
                        <GoHeartFill style={{color:'#ea64d9'}}/>
                        <span>like-count</span>
                    </div>
                    <div className="views">
                        <TbEyeFilled />
                        <span>view-count</span>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default CardComponent