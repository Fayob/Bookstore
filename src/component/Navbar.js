import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import profileLogo from '../assets/bookstore_profile_icon.jpg';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar_container">
      <Link to="/"><h2>Bookstore CMS</h2></Link>
      <ul className="navbar_lists">
        <li className="navbar_list">
          <Link to="/" className="book"> BOOK </Link>
        </li>
        <li className="navbar_list">
          <Link to="/categories" className="categories"> CATEGORIES </Link>
        </li>
      </ul>
    </div>
    <div className="profile">
      <img
        src={profileLogo}
        alt="profile_icon"
        className="profile_img"
      />
    </div>
  </nav>
);

export default Navbar;
