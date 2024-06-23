import React, { useState } from 'react'
import { RiArrowDownSLine } from "react-icons/ri";
import { BiMenuAltLeft } from "react-icons/bi";
import './MenuBarComponent.css'

const MenuBarComponent = ({sortOption , setSortOption}) => {
    const [dropDown , setDropDown] = useState(false);

    const toggleDropDown = () => {
        setDropDown(!dropDown)
    }

    const handleClickOption = (option) =>{
        setSortOption(option);
        setDropDown(false);
    }

  return (
        <React.Fragment>
            <div className="menu-bar">
                <div className="menu-dropdown" onClick={toggleDropDown} >
                    <span >{sortOption}<RiArrowDownSLine/> </span>
                    {dropDown && 
                        <ul className='drop-down-popular'>
                         <li onClick={() => handleClickOption("Following")}>Following</li>
                        <li onClick={() => handleClickOption("Popular")}>Popular</li>
                        <li onClick={() => handleClickOption("Noteworthy")}>Noteworthy</li>
                    </ul>}
                   
                            
                </div>

                <div className='menus'>
                    <ul className="menu-option">
                        <li><a href="#">Discover</a></li>
                        <li><a href="#">Animation</a></li>
                        <li><a href="#">Branding</a></li>
                        <li><a href="#">Illustration</a></li>
                        <li><a href="#">Mobile</a></li>
                        <li><a href="#">Print</a></li>
                        <li><a href="#">Product Design</a></li>
                        <li><a href="#">Typography</a></li>
                        <li><a href="#">Web Design</a></li>
                    </ul>
                </div>

                <div className="filter">
                    <BiMenuAltLeft />
                    <span>Filters</span>
                </div>
            </div>
        </React.Fragment>
    )
}

export default MenuBarComponent