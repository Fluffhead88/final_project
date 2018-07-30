import React, { Component } from 'react';
import UserSeach from './UserSearch.js'
import CreateEmail from './CreateEmail.js'
import image4 from './images/records_sun_small.png'
import CollectionsAccordion from './CollectionsAccordion.js'
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
  // loads all albums on page
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
    console.log('HEYstate', this.state.collections)
    let collections = this.state.collections.map(function(Item){

      return(
        <div key={Item.id} className="col s12 m5 l4 collections_cards">
          <div>
            <img src={Item.image} className='collections_image' alt=""/>
          </div>
          {/* maybe show username */}
          {/* <div className="col s3 m4">
            {Item.user}
          </div> */}
          <div key={Item.id}>
            {/* displays the information from last.fm api */}
            <p className="artist_name"></p>
            <h5>{Item.artist}</h5>
            <p className="album_name"></p>
            <h6>{Item.album}</h6>
            <div className="contact_button"><CreateEmail album={Item.id}/></div>
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
            <UserSeach/>
          </div>
        </div>
        <div className="user_collections">
          <div className="row">
            <CollectionsAccordion collections={this.state.collections}/>
              {/* area to display several user's collections - card type display */}
              {collections}
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Collections;
