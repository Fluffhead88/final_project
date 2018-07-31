import React, { Component } from 'react';
import UserSeach from './UserSearch.js'
import CreateEmail from './CreateEmail.js'
import image4 from './images/records_sun_small.png'
import CollectionsAccordion from './CollectionsAccordion.js'
import './Collections.css';
import _ from 'lodash';

const URL     = "http://127.0.0.1:8000/"
const URLPROD = "https://morning-beyond-85234.herokuapp.com/"

class Collections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user : {},
      album: {},
      collections: [],
      filter: '',
    }

    this._handleFilter = this._handleFilter.bind(this);
  }
  // loads all albums on page
  componentDidMount() {
    let self = this;
    fetch(`${URLPROD}album/`,{
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

_handleFilter(event){
  let obj = {filter: event.target.value}
  this.setState(obj)
}
  render() {
    // console.log('HEYstate', this.state.collections)
    let self = this;
    let filteredCollections = this.state.collections.filter(function(item){
      item.filter = item.album + item.artist;
      return _.includes(item.filter.toLowerCase() , self.state.filter.trim().toLowerCase());
    });

    console.log('filtered albums', filteredCollections);

    let collections = filteredCollections.map(function(Item){

      return(
        <div className='album_cards'>
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
            <div className="input-field col s6">
              <input id="input_text" type="text" placeholder="" data-length="120" value={this.state.filter} name='albumSearch' onChange={this._handleFilter}/>
              <label htmlFor="input_text">Album Search</label>
            </div>
          </div>
        </div>
        <div className="user_collections">
          <div className="row">
            {/* ternary statement shows accordion until filter length is greater than zero, if input into filter, displays card */}
            {this.state.filter.length > 3 ? <div>{collections}</div> : <CollectionsAccordion collections={this.state.collections}/>}
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Collections;
