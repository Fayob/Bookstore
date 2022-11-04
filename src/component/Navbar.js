import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div>
    <ul className="navbar_lists">
      <li className="navbar_list">
        <Link to="/"> Home </Link>
      </li>
      <li className="navbar_list">
        <Link to="/categories"> Categories </Link>
      </li>
    </ul>
  </div>
);

export default Navbar;
