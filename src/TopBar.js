// TopBar.js
import React from 'react';

function TopBar() {
  return (
    <div className="topbar">
      <div className="toggle">
        <i className="fas fa-bars"></i>
      </div>
      <div className="search">
        <label>
          <input type="text" placeholder="Search here" />
          <i className="fas fa-search"></i>
        </label>
      </div>
      <div className="user">
        <img src="1.png" alt="" />
      </div>
    </div>
  );
}

export default TopBar;
