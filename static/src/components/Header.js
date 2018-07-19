import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';

function Header(props) {
  return (
    <div className="row">
      <nav className="col nav">
        <button className="nav_button"><NavLink to='/'>Home</NavLink></button>
        <button className="nav_button"><NavLink to='/collections'>Collections</NavLink></button>
        <button className="nav_button"><NavLink to='/mycollection'>MyCollection</NavLink></button>
      </nav>

      <div className="login">
        <form action=""></form>

      </div>
    </div>
  );
}

export default Header;
