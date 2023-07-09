import {  Link } from "react-router-dom";
import "./App.css";
import React from "react";


const Sidebar = () => {
    return (
      
      <div className="sidebar">
        <div className="logo">
          <img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social-logo.png" alt="Logo" />
          <h2>My Sidebar</h2>
        </div>
        <ul className="sidebar-menu">
          <li className="sidebar-menu-item active">
         <i className="fas fa-home"></i>
            <span>Home</span>
          </li>
          <li className="sidebar-menu-item">
            <i className="fas fa-user"></i>
            <Link to="comitte/List">
              <span>Comitte List</span>
            </Link>
            
          </li>
          <li className="sidebar-menu-item">
            <i className="fas fa-person"></i>
            <Link to="person/list">
            <span>Person List</span>

            </Link>
          </li>
          <li className="sidebar-menu-item">
            <i className="fas fa-image"></i>
            <Link to="image/list">
            <span>Image List</span>

            </Link>
          </li>
          
        </ul>
      </div>
      
    );
  };
  
export default Sidebar;
