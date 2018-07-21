import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';

function Header(props) {
  return (

    <nav class="white" role="navigation">
      <div class="nav-wrapper container">
        <a id="logo-container" href="#" class="material-icons">album</a>
        <ul class="right hide-on-med-and-down">
          <button className="waves-effect waves-light red lighten-2 btn nav_button"><NavLink to='/'>Home</NavLink></button>
          <button className="waves-effect waves-light red lighten-2 btn nav_button"><NavLink to='/collections'>Collections</NavLink></button>
          <button className="waves-effect waves-light red lighten-2 btn nav_button"><NavLink to='/mycollection'>My Collection</NavLink></button>
        </ul>

        <ul id="nav-mobile" class="sidenav">
          <button className="waves-effect waves-light btn nav_button"><NavLink to='/'>Home</NavLink></button>
          <button className="waves-effect waves-light btn nav_button"><NavLink to='/collections'>Collections</NavLink></button>
          <button className="waves-effect waves-light btn nav_button"><NavLink to='/mycollection'>My Collection</NavLink></button>
        </ul>
        <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      </div>
    </nav>
  );
}

export default Header;
