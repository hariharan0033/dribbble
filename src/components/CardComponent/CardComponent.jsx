import React, { useState } from 'react'
import './CardComponent.css'
import { GoHeartFill } from "react-icons/go";
import { TbEyeFilled } from "react-icons/tb";
import { RiHeart3Line } from "react-icons/ri";
import { HiOutlineBookmark } from "react-icons/hi";
import { HiBookmark } from "react-icons/hi2";
import { toast } from 'react-hot-toast';

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
        toast(saved ? 'Removed from bookmarks!' : 'Added to bookmarks!', {
          icon: saved ? '❌' : '🔖',
        });
        
      };
      const handleLikeClick = () => {
        // card.isliked ? setLike(like - 1) : setLike(like + 1) ;
        // card.isliked = !card.isliked ;
        if (card.isliked) {
          setLike(like - 1);
          toast('Post unliked!', { icon: '👎' });
        } else {
          setLike(like + 1);
          // toast.success('Post liked!');
          toast('Post liked!', { icon: '🩷' });

        }
        card.isliked = !card.isliked;
      };

  return (
    <React.Fragment>
        <div className="card-container">
            <div className="img-container"  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <a href=""><img src={card.imagelink} alt="" className='card-image'/></a>
                <div className={`img-hover-details ${hoverClass}`}>
                    <h3><a href="">{card.name}</a></h3>
                    <div className="img-actions">
                      <div className="actions" 
                                onClick={handleSaveClick}>{saved ? <HiBookmark className='saved' />
                                                                  : <HiOutlineBookmark />}</div>

                      <div className="actions" 
                                  onClick={handleLikeClick}>{card.isliked ? <GoHeartFill className='liked' /> 
                                                                          : <RiHeart3Line />}</div>
                    </div>
                </div>
            </div>

            <div className="card-details">
                <div className="author-details">
                    <img src={card.profilephotolink} alt={card.authorname} className='author-image'/>
                    <h4 className='author-name'><a href="">{card.authorname}</a></h4>
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