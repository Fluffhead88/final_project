import React, { Component } from 'react';
import UserSeach from './UserSearch.js'
import image4 from './images/records_sun_small.png'
// import image2 from './images/records.jpg'

import './Collections.css';

const URL     = "http://127.0.0.1:8000/"
const URLPROD = "https://morning-beyond-85234.herokuapp.com/"

class Collections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user : {},
      album: {},
      collections: [],
    }

    // this._getSearchResults = this._getSearchResults.bind(this);
  }
  componentDidMount() {
    let self = this;
    fetch(`${URL}album/`,{
      method:'GET',
      headers:{
        'Content-Type': 'application/json',
      }
    })
    .then(function(response){
      if(!response.ok){
        throw Error(response.statusText);
      }
      // console.log(response.json())
      return response.json()
    })
    .then(function(responseJSON){
      console.log('response', responseJSON);
      self.setState({collections: responseJSON})
    })
    .catch(function(error){
      console.log('Looks like there was a problem \n,', error)
    });
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
    console.log('state', this.state)
    let self = this;
    let collections = this.state.collections.map(function(Item){

      return(
        <div key={Item.id} className="row album_info">
          <div className="col s4 m4">
            {/* displays the information from last.fm api */}
            <p className="artist_name"></p>
            <h5>{Item.artist}</h5>
              <p className="album_name"></p>
            <h6>{Item.album}</h6>
            <button type="submit" className="waves-effect waves-light red lighten-2 btn-small">Contact</button>
          </div>
          <div className="col s4 m4">
            <img src={Item.image} alt=""/>
          </div>
        </div>
      )
    })
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
              {collections}
            </div>
          </div>
        </div>
      </div>

    </div>
    );
  }
}

export default Collections;
