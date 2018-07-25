import React, { Component } from 'react';
import UserSeach from './UserSearch.js'
import image4 from './images/records_sun_small.png'
// import image2 from './images/records.jpg'

import './Collections.css';

class Collections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user : {},
      album: {}
    }

    this._getSearchResults = this._getSearchResults.bind(this);
  }

// function to return search results - redundant to user search import - keeping for reference
  // _getSearchResults(searchParams) {
  //   let self = this;
  //
  //
  //   fetch(`http://localhost:8000/users/?user=${searchParams.userSearch}&album=${searchParams.albumSearch}`)
  //   .then(function(response){
  //     if(!response.ok){
  //       throw Error(response.statusText);
  //     }
  //     return response.json()
  //   })
  //   .then(function(responseJSON){
  //     console.log('response', responseJSON)
  //     self.setState({album: responseJSON.album});
  //   })
  //   .catch(function(error){
  //     console.log('Looks like there was a problem: \n', error);
  //   });
  // }

  render() {
    return (
      <div>
        <div className='row center'>
          <div className='col s12 center'>

            {/* image at top */}
            <div className='image'><img src={image4} alt="Unsplashed background img 1"/></div>
          </div>
        </div>
      <div className="collections container">
        <div className="row search">
          <div className="col s12 m4 l8">
            <h1>Collections</h1>

            {/* user search import */}
            <UserSeach getSearchResults={this._getSearchResults}/>
          </div>
        </div>
        <div className="user_collections">
          <div className="row">
            <div className="col s12 m4 l8">

              {/* area to display several user's collections - card type display */}
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
