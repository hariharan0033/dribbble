import React from 'react'
import './FooterLowerComponent.css';

const FooterLowerComponent = () => {
  return (
    <React.Fragment>
      <div className="footer-lower">
      <div className="footer-lower-left">
          <ul>
            <li>&copy; 2024 Dribbble</li>
            <li><a href="">Terms</a></li>
            <li><a href="">Privacy</a></li>
            <li><a href="">Cookies</a></li>
          </ul>
      </div>

      <div className="footer-lower-right">
          <ul>
            <li><a href="">Jobs</a></li>
            <li><a href="">Designers</a></li>
            <li><a href="">Freelancers</a></li>
            <li><a href="">Tags</a></li>
            <li><a href="">Places</a></li>
            <li><a href="">Resources</a></li>
          </ul>
      </div>
      </div>
    </React.Fragment>
  )
}

export default FooterLowerComponent