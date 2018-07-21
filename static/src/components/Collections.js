import React, { Component } from 'react';
import UserSeach from './UserSearch.js'

import './Collections.css';

class Collections extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div className="collections container">
          <div className="row search">
          <div className="col s12 m4 l8">
        <h1>Collections</h1>
        <UserSeach/>
        </div>
        </div>
        <div className="user_collections">
          <div className="row">
            <div className="col s12 m4 l8">
              <h1>Exmaple Collection Area</h1>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Collections;
