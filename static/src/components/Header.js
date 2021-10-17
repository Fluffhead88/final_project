import React from 'react';
import { NavLink } from 'react-router-dom';
import LoginModal from './LoginModal.js'
import './Header.css';

function Header(props) {
//   console.log('header', props)
  return (

    <nav className="white head">
      <div className="nav-wrapper container">
        <ul className="left">
          <LoginModal history={props.history}/>
        </ul>
        <ul className="nav_list right">
          {/* nav buttons to take user to each page */}
          <button className="waves-effect waves-light red lighten-2 btn nav_button"><NavLink to='/'>Home</NavLink></button>
          <button className="waves-effect waves-light red lighten-2 btn nav_button"><NavLink to='/collections'>Collections</NavLink></button>
          <button className="waves-effect waves-light red lighten-2 btn nav_button"><NavLink to='/mycollection'>My Collection</NavLink></button>
        </ul>
      {/* mobile nav options */}
        {/* <ul id="nav-mobile" className="sidenav">
          <button className="waves-effect waves-light btn nav_button"><NavLink to='/'>Home</NavLink></button>
          <button className="waves-effect waves-light btn nav_button"><NavLink to='/collections'>Collections</NavLink></button>
          <button className="waves-effect waves-light btn nav_button"><NavLink to='/mycollection'>My Collection</NavLink></button>
        </ul>
        <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a> */}
      </div>
    </nav>
  );
}

export default Header;
