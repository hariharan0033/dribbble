import React from 'react'
import { RiArrowDownSLine } from "react-icons/ri";
import { BiMenuAltLeft } from "react-icons/bi";
import './MenuBarComponent.css'

const MenuBarComponent = () => {
  return (
        <React.Fragment>
            <div className="menu-bar">
                <div className="menu-dropdown">
                    <span>Following</span>
                    <RiArrowDownSLine/>
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