import React from 'react';

function NavBar() {
  return (
    <div className="container">
      <div className="nav">
        <ul>
          <li>
            <a href="#">
              <img src="37197-removebg-preview.png" alt="" width="50px" height="50px" />
              <h3>Shop<span>Fast</span></h3>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon"><i className="fas fa-home"></i></span>
              <span className="title">Dashboard</span>
            </a>
          </li>
        

            <li>
                <a href="customer.html">
                    <span class="icon"><i class="fa fa-users"></i></span>
                    <span class="title">Customers</span>
                </a>
            </li>

            <li>
                <a href="#">
                    <span class="icon"><i class="fa fa-comment"></i></span>
                    <span class="title">Messages</span>
                </a>
            </li>

            <li>
                <a href="#">
                    <span class="icon"><i class="fa fa-question"></i></span>
                    <span class="title">Help</span>
                </a>
            </li>

            <li>
                <a href="#">
                    <span class="icon"><i class="fa fa-cog"></i></span>
                    <span class="title">Settings</span>
                </a>
            </li>

            <li>
                <a href="#">
                    <span class="icon"><i class="fa fa-lock"></i></span>
                    <span class="title">Password</span>
                </a>
            </li>

            <li>
                <a href="#">
                    <span class="icon"><i class="fa fa-angle-double-right"></i></span>
                    <span class="title">Sign out</span>
                </a>
            </li>       
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
