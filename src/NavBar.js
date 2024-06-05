
import React, { useEffect } from 'react';
import './styles.css'; 
import logoImage from './37197-removebg-preview.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faUsers, faComment, faQuestion, faCog, faLock, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

function NavBar({ isNavActive, handleToggleClick }) {
  useEffect(() => {
    const list = document.querySelectorAll(".nav li");

    function activeLink() {
      list.forEach((item) => {
        item.classList.remove("hovered");
      });
      this.classList.add("hovered");
    }

    list.forEach((item) => item.addEventListener("mouseover", activeLink));

    return () => {
      list.forEach((item) => item.removeEventListener("mouseover", activeLink));
    };
  }, []);

  return (
    <div className={`container ${isNavActive ? 'nav-active' : ''}`}>
      <div className={`nav ${isNavActive ? 'active' : ''}`}>
        <ul>
          <li>
            <a href="index.html">
              <img src={logoImage} alt="" style={{ width: '50px', height: '50px' }} />           
              <h3>Shop<span>Fast</span></h3>
            </a>
          </li>
          <li>
            <a href="index.html">
              <span className="icon"><FontAwesomeIcon icon={faHome} /></span>
              <span className="title">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="index.html">
              <span className="icon"><FontAwesomeIcon icon={faUsers} /></span>
              <span className="title">Customers</span>
            </a>
          </li>
          <li>
            <a href="index.html">
              <span className="icon"><FontAwesomeIcon icon={faComment} /></span>
              <span className="title">Messages</span>
            </a>
          </li>
          <li>
            <a href="index.html">
              <span className="icon"><FontAwesomeIcon icon={faQuestion} /></span>
              <span className="title">Help</span>
            </a>
          </li>
          <li>
            <a href="index.html">
              <span className="icon"><FontAwesomeIcon icon={faCog} /></span>
              <span className="title">Settings</span>
            </a>
          </li>
          <li>
            <a href="index.html">
              <span className="icon"><FontAwesomeIcon icon={faLock} /></span>
              <span className="title">Password</span>
            </a>
          </li>
          <li>
            <a href="index.html">
              <span className="icon"><FontAwesomeIcon icon={faAngleDoubleRight} /></span>
              <span className="title">Sign out</span>
            </a>
          </li>
          
        </ul>
      </div>
      <div className={`toggle ${isNavActive ? 'active' : ''}`} onClick={handleToggleClick}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </div>
  );
}

export default NavBar;

 

