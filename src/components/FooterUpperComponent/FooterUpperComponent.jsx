import React from 'react'
import logo from '../../assets/images/Dribbble-Logo.png';
import { FaTwitter ,FaFacebookSquare ,FaInstagram ,FaPinterest} from "react-icons/fa";
import './FooterUpperComponent.css';

const FooterUpperComponent = () => {
  return (
        <React.Fragment>
            <div className="footer-upper">
            <div className="footer-logo">
                <a href="#"><img src={logo} alt="logo" className='logo' /></a>
            </div>

            <div className="footer-upper-menus">
                <ul>
                    <li><a href="">For designers</a></li>
                    <li><a href="">Hire talent</a></li>
                    <li><a href="">Inspiration</a></li>
                    <li><a href="">Advertising</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Careers</a></li>
                    <li><a href="">Support</a></li>
                </ul>
            </div>

            <div className="footer-icons">
                <a href=""><FaTwitter /></a>
                <a href=""><FaFacebookSquare /></a>
                <a href=""><FaInstagram /></a>
                <a href=""><FaPinterest /></a>
            </div>
            </div>
        </React.Fragment>
    )
}

export default FooterUpperComponent