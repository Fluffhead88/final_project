import React, { Component } from 'react';
import AlbumSearch from "./AlbumSearch.js"
// import $ from 'jquery';
import image4 from './images/records_small.png'
import ProfileUpdateModal from './ProfileUpdateModal'
// import Materialize from 'materialize-css/dist/js/materialize.min.js';
// import image2 from './images/records.jpg'
import './MyCollection.css';
import Accordion from './Accordion.js';

import $ from 'jquery';

const URL     = "http://127.0.0.1:8000/"
const URLPROD = "https://morning-beyond-85234.herokuapp.com/"

class MyCollection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      album: {},
      mycollection:[],

    }

  this._getSearchResults = this._getSearchResults.bind(this);
  this._postAddAlbum = this._postAddAlbum.bind(this);
  this._deleteAlbum = this._deleteAlbum.bind(this);

  // this._editAlbum = this._editAlbum.bind(this);
  }

// function to process search parameters and get back album info from last.fm api
_getSearchResults(searchParams) {
  let self = this;


  fetch(`${URL}album/proxy/?artist=${searchParams.artistSearch}&album=${searchParams.albumSearch}`)
  .then(function(response){
    if(!response.ok){
      throw Error(response.statusText);
    }
    return response.json()
  })
  .then(function(responseJSON){
    console.log('response', responseJSON)
    self.setState({album: responseJSON.album});
  })
  .catch(function(error){
    console.log('Looks like there was a problem: \n', error);
  });
}

// loads users collection on page load
componentDidMount() {
  let self = this;
  let token = sessionStorage.getItem('auth_token');
  fetch(`${URL}myalbums/`,{
    method:'GET',
    headers:{
      'Content-Type': 'application/json',
      'Authorization': token
    }
  })
  .then(function(response){
    if(!response.ok){
      throw Error(response.statusText);
    }
    return response.json()
  })
  .then(function(responseJSON){
    console.log('api response', responseJSON);
    self.setState({mycollection: responseJSON})
  })
  .catch(function(error){
    console.log('Looks like there was a problem \n,', error)
  });
}

// adds searched album to users collection upon clicking save
_postAddAlbum(){

  let data = {};

  let tracks = this.state.album.tracks;
  let mytracks = tracks.track.map(function(track){
    return {title:track.name};
  })
  data["artist"] = this.state.album.artist;
  data["album"] = this.state.album.name;
  data["url"] = this.state.album.url;
  data["tracks"] = mytracks;
  data["image"] = this.state.album.image[3]['#text'];
  data['notes'] = '';

  let token = sessionStorage.getItem('auth_token');

  console.log('data', data)
  console.log('this state', this.state.mycollection)

  let collection = this.state.mycollection;
  collection.push(data);
  this.setState({mycollection: collection});

  fetch(`${URL}album/`,{
    method:'POST',
    body:JSON.stringify(data),
    headers:{
      'Content-Type': 'application/json',
      'Authorization': token
    }
  })
  .then(function(response){
    console.log(response);
  })
  .catch(function(error){
    console.log('Looks like there was a problem \n,', error)
  });
}

// function to delete album from user's collection - need to figure out ID issue
_deleteAlbum(event, album){

  // let data: {};

  // prevent li from getting ative class added

  let id = album.id;
  let token = sessionStorage.getItem('auth_token');
  // console.log('delete album', id)
// need to get this updating state

  let collection = this.state.mycollection;
  // find index of object inside array
  let index = collection.indexOf(album);
  // remove object using index
  collection.splice(index, 1);

  this.setState({mycollection: collection});

  fetch(`${URL}myalbums/${id}/`,{
    method:'DELETE',
    headers:{
      'Content-Type': 'application/json',
      'Authorization': token
    }
  })
  .then(function(response){
    console.log(response);
  })
  .catch(function(error){
    console.log('Looks like there was a problem \n,', error)
  });
}


  render() {
    console.log('mystate', this.state.mycollection)
    let self = this;
    let deleteAlbum = this.state.mycollection.map(function(Item){
      let tracks = Item.tracks.map(function(track, index){
        return (<div key={index}>{track.title}</div>)
      })
      return(
        <div key={Item.id} className="row album_info">
          <div className="col s4 m4">
{/* this is only good for the delete function - need to refactor */}
            <div><button type="button" className="waves-effect waves-light red lighten-2 btn-small delete_btn" onClick={()=>self._deleteAlbum(Item)}>delete</button></div>
          </div>
        </div>
      )
    })

    // digging into the data from last.fm api to display for album search

    // maps over track to return all tracks - weird part of last.fm nesting
    let tracks;
      if(this.state.album.tracks) {
        tracks = this.state.album.tracks.track.map(function(trackItem, index){
          return(
            <div key={index}>{trackItem.name}</div>
        )
      })
    }

    // gets single image URL from list to be displayed in image tag
    let imageURL;
      if(this.state.album.image) {
        imageURL = this.state.album.image[3]['#text'];
    }

    // currently returning content from wikipedia, good info but all albums don't
    // have wiki info, may turn into if statement to show if it exists for album
    let summary;
      if(this.state.album.wiki){
        summary = this.state.album.wiki.content;
    }

    // returns album name
    let name;
      if(this.state.album.name){
        name = this.state.album.name;
    }

    // returns artist name
    let artist;
      if(this.state.album.artist){
        artist = this.state.album.artist;
    }

    // returns last.fm link - may not use
    let url;
      if(this.state.album.url){
      url = this.state.album.url;
    }

    return (
      <div>
        <ProfileUpdateModal/>
        <div className='row center'>
          <div className='col s12 center'>
            {/* image of albums at top of page */}
            <div className='image'><img src={image4} alt="Unsplashed background img 1"/></div>
          </div>
        </div>
        <div className="myCollection container">
          <h1>My Collection</h1>
          {/* <div>{mycollection}</div> */}
          <Accordion mycollection={this.state.mycollection} deleteAlbum={this._deleteAlbum}/>
          {/* button that fires function to show the collection - change display later */}
          {/* <button type="button" className="waves-effect waves-light red lighten-2 btn-small" onClick={this._getMyCollection}>Show Collection</button> */}

          {/* importing the album search and puts the function to get search results back */}
          <AlbumSearch getSearchResults={this._getSearchResults}/>
          {/* if statement to show search display only if search is done */}
            {this.state.album.name ?
            <div className="row album_info">
              <div className="col s4 m4">
                {/* displays the information from last.fm api */}
                <p className="name">Album Name</p>
                <div>{name}</div>
                  <p className="name">Artist</p>
                <div>{artist}</div>
              </div>
              <div className="col s4 m4">
                <p className="name">Tracks</p>
                  <div>{tracks}</div>
                </div>
              <div className="col s4 m4">
                <img src={imageURL} alt=""/>
                <button type="button" className="waves-effect waves-light red lighten-2 btn-small" onClick={this._postAddAlbum}>Save</button>
              </div>
              {/* button to add album to users collection */}

            <div className="row summary">
              <div className="col s12">
                <a href={url}>Link to album on Last.FM</a>
                <p className="name">Summary</p>
                <div>{summary}</div>
              </div>
            </div>
          </div>
    // end of optional display if statement
              : ""}
        </div>
      </div>
    );
  }
}

export default MyCollection;
