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
        <h1>Collections</h1>
        <UserSeach/>
      </div>
    );
  }
}

export default Collections;
