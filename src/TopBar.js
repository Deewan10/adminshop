import React from 'react';
import userImage from './1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TopBar({ toggleNav }) {
  return (
    <div className="topbar">
      
      <div className="search">
        <label>
          <input type="text" placeholder="Search here" />
          <i className="fas fa-search"></i>
        </label>
      </div>
      <div className="user">
        <img src={userImage} alt="" style={{ width: '50px', height: '50px' }} />           
      </div>
    </div>
  );
}

export default TopBar;
