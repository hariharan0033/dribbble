import React, { useState } from 'react'
import { RiArrowDownSLine } from "react-icons/ri";
import { BiMenuAltLeft } from "react-icons/bi";
import './MenuBarComponent.css'

const MenuBarComponent = ({sortOption , setSortOption ,category , setCategory }) => {
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
                        <li className={category ==="Discover" ? 'active' : ''} onClick={()=>setCategory("Discover")} >Discover</li>
                        <li className={category ==="Animation" ? 'active' : ''} onClick={()=>setCategory("Animation")} >Animation</li>
                        <li className={category ==="Branding" ? 'active' : ''} onClick={()=>setCategory("Branding")} >Branding</li>
                        <li className={category ==="Illustration" ? 'active' : ''} onClick={()=>setCategory("Illustration")} >Illustration</li>
                        <li className={category ==="Mobile" ? 'active' : ''} onClick={()=>setCategory("Mobile")} >Mobile</li>
                        <li className={category ==="Print" ? 'active' : ''} onClick={()=>setCategory("Print")} >Print</li>
                        <li className={category ==="Product Design" ? 'active' : ''} onClick={()=>setCategory("Product Design")} >Product Design</li>
                        <li className={category ==="Typography" ? 'active' : ''} onClick={()=>setCategory("Typography")} >Typography</li>
                        <li className={category ==="Web Design" ? 'active' : ''} onClick={()=>setCategory("Web Design")} >Web Design</li>
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