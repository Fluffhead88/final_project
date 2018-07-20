import React, { Component } from 'react';
import AlbumSearch from "./AlbumSearch.js"

import './MyCollection.css';

const URL = "http://localhost:8000/album/proxy/"

class MyCollection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      album: {}
    }
  }

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

_postRequest(){

  let context = {}

  fetch(URL,{
    method:'POST',
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
    let tracks;
    if(this.state.album.tracks) {
      tracks = this.state.album.tracks.track.map(function(trackItem){
        return(
          <div>{trackItem.name}</div>
        )
      })
    }

    return (
      <div className="myCollection container">
        <h1>MyCollection</h1>
        <div>{this.state.album.name}</div>
        <div>{this.state.album.artist}</div>
        <div>{this.state.album.url}</div>
        <div>{tracks}</div>
        <input type="button" value="Post Request" onClick={this._postRequest}/>
        <input type="button" value="Put Request" onClick={this._editRequest}/>
        <input type="button" value="Delete Request" onClick={this._deleteRequest}/>
        <AlbumSearch/>
      </div>
    );
  }
}

export default MyCollection;
