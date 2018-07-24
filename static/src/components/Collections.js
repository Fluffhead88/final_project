import React, { Component } from 'react';
import UserSeach from './UserSearch.js'
import image4 from './images/records_sun_small.png'
// import image2 from './images/records.jpg'

import './Collections.css';

class Collections extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className='row center'>
          <div className='col s12 center'>
            <div className='image'><img src={image4} alt="Unsplashed background img 1"/></div>
          </div>
        </div>
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

    </div>
    );
  }
}

export default Collections;
