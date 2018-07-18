import React from 'react';
import {NavLink} from 'react-router-dom';

function Header(){
  return(
    <nav>
      <div>Header BOI</div>
      <ul>
        {/* <li><button><NavLink to="/sandwich" activeClassName="selected">Sandwiches</NavLink></button></li> */}
      </ul>
    </nav>
  );
}

export default Header;
