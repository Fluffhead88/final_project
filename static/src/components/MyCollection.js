import React, { Component } from 'react';
import AlbumSearch from "./AlbumSearch.js"
// import $ from 'jquery';
import image4 from './images/records_small.png'
// import image2 from './images/records.jpg'

import './MyCollection.css';

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

// function to get current user's collection - fires and works but need to figure out
// display and possible change to componentDidMount to show on page load
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
    console.log('response', responseJSON);
    self.setState({mycollection: responseJSON})
  })
  .catch(function(error){
    console.log('Looks like there was a problem \n,', error)
  });
}

// function to edit album information - not needed except for possibly notes
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

// _editAlbum(obj){
//
//   let id = {}
//   let token = sessionStorage.getItem('auth_token');
//   fetch("http://localhost:8000/album/",{
//     method:'PUT',
//     headers:{
//       'Content-Type': 'application/json',
//       'Authorization': token
//     }
//   })
//   .then(function(response){
//     console.log(response);
//   })
//   .catch(function(error){
//     console.log('Looks like there was a problem \n,', error)
//   });
// }

// function to delete album from user's collection - need to figure out ID issue
_deleteAlbum(album){

  let id = album.id;
  let token = sessionStorage.getItem('auth_token');
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

// _showSearchResults() {
//   if(this.state.album.name) {
//     return (
//       <div className="row album_info">
//         <div className="col s4 m4">
//
//           {/* displays the information from last.fm api */}
//
//           <p className="name">Album Name</p>
//           <div>{name}</div>
//             <p className="name">Artist</p>
//           <div>{artist}</div>
//         </div>
//         <div className="col s4 m4">
//           <p className="name">Tracks</p>
//             <div>{tracks}</div>
//           </div>
//         <div className="col s4 m4">
//           <img src={imageURL} alt=""/>
//         </div>
//
//         {/* button to add album to users collection */}
//         <button type="button" className="waves-effect waves-light red lighten-2 btn-small" onClick={this._postAddAlbum}>Save</button>
//
//       <div className="row summary">
//         <div className="col s12">
//         <a href={url}>Link to album on Last.FM</a>
//         <p className="name">Summary</p>
//         <div>{summary}</div>
//         </div>
//         </div>
//       </div>
//     )
//   }
//   return;
// }

  render() {
    console.log('state', this.state)
    let self = this;
    let mycollection = this.state.mycollection.map(function(Item){
      let tracks = Item.tracks.map(function(track, index){
        return (<div key={index}>{track.title}</div>)
      })
      return(
        <div key={Item.id} className="row album_info">
          <div className="col s4 m4">

            {/* displays the information from last.fm api */}

            <p className="artist_name"></p>
            <h5>{Item.artist}</h5>
              <p className="album_name"></p>
            <h6>{Item.album}</h6>
            <div><button type="button" className="waves-effect waves-light red lighten-2 btn-small delete_btn" onClick={()=>self._deleteAlbum(Item)}>delete</button></div>
          </div>
          <div className="col s4 m4">
            <p className="name">Tracks</p>
            {tracks}
          </div>
          <div className="col s4 m4">
            <img src={Item.image} alt=""/>
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

    // currently not using - trying to display just the release date but not
    // consistent return from api call
    let release;
      if(this.state.album.tags){
        release = this.state.album.tags.tag.map(function(releaseItem, index){
          return(
            <div key={index}>{releaseItem.name}</div>
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
        <div className='row center'>
          <div className='col s12 center'>
            {/* image of albums at top of page */}
            <div className='image'><img src={image4} alt="Unsplashed background img 1"/></div>
          </div>
        </div>
        <div className="myCollection container">
          <h1>My Collection</h1>
          <div>{mycollection}</div>

          {/* button that fires function to show the collection - change display later */}
          {/* <button type="button" className="waves-effect waves-light red lighten-2 btn-small" onClick={this._getMyCollection}>Show Collection</button> */}

          {/* importing the album search and puts the function to get search results back */}
          <AlbumSearch getSearchResults={this._getSearchResults}/>
            {/* {this.state.albumSearch.length > 1 ? */}

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
              </div>

              {/* button to add album to users collection */}
              <button type="button" className="waves-effect waves-light red lighten-2 btn-small" onClick={this._postAddAlbum}>Save</button>

            <div className="row summary">
              <div className="col s12">
              <a href={url}>Link to album on Last.FM</a>
              <p className="name">Summary</p>
              <div>{summary}</div>
              </div>
              </div>
            </div>
              : ""}




            {/* <input type="button" className="waves-effect waves-light red lighten-2 btn" value="Post Request" onClick={this._postRequest}/>
            <input type="button" className="waves-effect waves-light red lighten-2 btn" value="Put Request" onClick={this._editRequest}/>
            <input type="button" className="waves-effect waves-light red lighten-2 btn" value="Delete Request" onClick={this._deleteRequest}/> */}


          </div>

          {/* collapsible that may come into play with collection display */}

        {/* <ul className="collapsible">
     <li>
       <div className="collapsible-header"><i className="material-icons">filter_drama</i>First</div>
       <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
     </li>
     <li>
       <div className="collapsible-header"><i className="material-icons">place</i>Second</div>
       <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
     </li>
     <li>
       <div className="collapsible-header"><i className="material-icons">whatshot</i>Third</div>
       <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
     </li>
   </ul> */}

          </div>
    );
  }
}

export default MyCollection;
