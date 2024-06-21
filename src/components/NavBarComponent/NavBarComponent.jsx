import React from 'react';
import logo from '../../assets/images/Dribbble-Logo.png';
import profile from '../../assets/images/profile.jpg';
import './NavBarComponent.css';
import { CiSearch } from "react-icons/ci";
import { RiArrowDownSLine } from "react-icons/ri";
const NavBarComponent = () => {
  return (
    <React.Fragment>
        <div className="navbar">
            <div className="nav-main">
                <ul className='menu'>
                    <li><a href="">Find designers</a><RiArrowDownSLine /></li>
                    <li><a href="">Inspiration</a></li>
                    <li><a href="">Courses</a><RiArrowDownSLine /></li>
                    <li><a href="">Jobs</a></li>
                    <li><a href="">GoPro</a></li>
                </ul>
            </div>

            <div className="nav logo">
                <a href=""><img src={logo} alt="Dribbble Logo" className='logo' /></a>
            </div>

            <div className="nav-right">
                <div className="search">
                    <CiSearch  className='search-icon'/>
                    <input type="search" placeholder="Search..." />
                </div>
                <img className='profile-img' src={profile} alt="Profile" />
            </div>
            
        </div>
    </React.Fragment>
)
}

export default NavBarComponent