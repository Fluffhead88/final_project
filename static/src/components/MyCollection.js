import React, { Component } from 'react';
import AlbumSearch from "./AlbumSearch.js"
// import $ from 'jquery';
import image4 from './images/records_small.png'
// import image2 from './images/records.jpg'

import './MyCollection.css';

const URL = "http://localhost:8000/album/proxy/"

class MyCollection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      album: {},

    }

  this._getSearchResults = this._getSearchResults.bind(this);

  }
// this fetch should return my album listing to the site
  componentDidMount(){
  let self=this;

  fetch(URL)
  .then(function(response){
    if(!response.ok){
      throw Error(response.statusText);
    }

    return response.json()
  })
  .then(responseAsJSON=> {
    let album = responseAsJSON.album;
    self.setState({album});
  })
  .catch(function(error){
    console.log('Looks like there was a problem: \n', error);
  });
}

_getSearchResults(searchParams) {
  let self = this;


  fetch(`http://localhost:8000/album/proxy/?artist=${searchParams.artistSearch}&album=${searchParams.albumSearch}`)
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

// _postRequest(){
//   let self = this;
//
//   let context = {this.state.album};
//
//   fetch(URL,{
//     method:'POST',
//     body:JSON.stringify(context),
//     headers:{
//       'Content-Type': 'application/json'
//     }
//   })
//   .then(function(response){
//     console.log(response);
//   })
//   .catch(function(error){
//     console.log('Looks like there was a problem \n,', error)
//   });
// }

_editRequest(obj){

  let context = {}
  let id = 1

  fetch(`URL${id}`,{
    method:'PUT',
    body:JSON.stringify(context),
    headers:{
      'Content-Type': 'application/json'
    }
  })
  .then(function(response){
    console.log(response);
  })
  .catch(function(error){
    console.log('Looks like there was a problem \n,', error)
  });
}

_deleteRequest(){

  let id=1

    fetch(`URL${id}`,{
      method:'DELETE'
    })

    .then(function(response){
      console.log(response);
    })
    .catch(function(error){
      console.log('Looks like there was a problem: \n', error);
    });

  }

  render() {
    console.log('state', this.state)
    let tracks;
    if(this.state.album.tracks) {
      tracks = this.state.album.tracks.track.map(function(trackItem, index){
        return(
          <div key={index}>{trackItem.name}</div>
        )
      })
    }
    let release;
    if(this.state.album.tags){
      release = this.state.album.tags.tag.map(function(releaseItem, index){
        return(
          <div key={index}>{releaseItem.name}</div>
        )
      })
    }
    let imageURL;

    if(this.state.album.image) {
      imageURL = this.state.album.image[4]['#text'];
    }

    let summary;

    if(this.state.album.wiki){
      summary = this.state.album.wiki.content;
    }

    let name;

    if(this.state.album.name){
      name = this.state.album.name;
    }

    let artist;

    if(this.state.album.artist){
      artist = this.state.album.artist;
    }

    let url;

    if(this.state.album.url){
      url = this.state.album.url;
    }

    return (
      <div>
        <div className='row center'>
          <div className='col s12 center'>
            <div className='image'><img src={image4} alt="Unsplashed background img 1"/></div>
          </div>
        </div>
        <div className="myCollection container">
          <h1>My Collection</h1>
          <AlbumSearch getSearchResults={this._getSearchResults}/>
            <div className="row album_info">
              <div className="col s4 m4">
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
            </div>
            <div className="row summary">
              <div className="col s12">
              <a href={url}>Link to album on Last.FM</a>
              <p className="name">Summary</p>
              <div>{summary}</div>
              </div>
              </div>
            <input type="button" className="waves-effect waves-light red lighten-2 btn" value="Post Request" onClick={this._postRequest}/>
            <input type="button" className="waves-effect waves-light red lighten-2 btn" value="Put Request" onClick={this._editRequest}/>
            <input type="button" className="waves-effect waves-light red lighten-2 btn" value="Delete Request" onClick={this._deleteRequest}/>
          </div>
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
