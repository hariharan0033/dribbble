import React, { useState } from 'react';
import logo from '../../assets/images/Dribbble-Logo.png';
import profile from '../../assets/images/profile.jpg';
import './NavBarComponent.css';
import { CiSearch } from "react-icons/ci";
import { RiArrowDownSLine } from "react-icons/ri";
const NavBarComponent = ({searchTerm , setSearchTerm}) => {

    const [isFindDesignersOpen , setFindDesignersOpen] = useState(false);
    const [isCoursesOpen , setCoursesOpen] = useState(false);

    const toggleFindDesigner = () => setFindDesignersOpen(!isFindDesignersOpen);
    const toggleCourses = () => setCoursesOpen(!isCoursesOpen);

    const [inputValue , setInputValue] = useState('')

    const handleInputChange = (e) =>{
        setInputValue(e.target.value)
    }
    const handleKeyDown = (e) => {
        if(e.key === 'Enter'){
            setSearchTerm(inputValue);
        }
    }

  return (
    <React.Fragment>
        <div className="navbar">
            <div className="nav-main">
                <ul className='menu'>
                    <li onMouseEnter={toggleFindDesigner} onMouseLeave={toggleFindDesigner}>
                        Find designers
                        {isFindDesignersOpen && (
                            <ul className='drop-down'>
                                <li><a href="">Designer search
                                    <p>Quickly find your next designer</p>
                                    </a></li>
                                <li><a href="">Post a job
                                    <p>The #1 job board for design talent</p>
                                    </a></li>
                            </ul>
                        )}
                        <RiArrowDownSLine /></li>
                    <li><a href="">Inspiration</a></li>
                    <li onMouseEnter={toggleCourses} onMouseLeave={toggleCourses}>
                        <a href="">Courses
                    {isCoursesOpen && (
                            <ul className='drop-down'>
                                <li><a href="">UX Diploma
                                    <p>Learn UX design from scratch in 6 months</p>
                                    </a></li>
                                <li><a href="">UI Certificate
                                    <p>12-week UI skill building for designers</p>
                                    </a></li>
                                <li id='workshop'><a href="">Workshop
                                    <p>with design professionals</p>    
                                    </a></li>
                            </ul>
                        )}
                        </a><RiArrowDownSLine /></li>
                    <li><a href="">Jobs</a></li>
                    <li><a href="">GoPro</a></li>
                </ul>
            </div>

            <div className="nav logo">
                <a href="#"><img src={logo} alt="Dribbble Logo" className='logo' /></a>
            </div>

            <div className="nav-right">
                <div className="search">
                    <CiSearch  className='search-icon'/>
                    <input type="search" 
                            placeholder="Search..." 
                            value={inputValue}
                            onChange={handleInputChange}
                            onKeyDown={handleKeyDown}/>
                </div>
                <img className='profile-img' src={profile} alt="Profile" />
            </div>
            
        </div>
    </React.Fragment>
)
}

export default NavBarComponent