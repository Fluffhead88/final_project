import React, { Component } from 'react';
import AlbumSearch from "./AlbumSearch.js"
// import $ from 'jquery';
import image4 from './images/records_sun2.png'
// import image2 from './images/records.jpg'

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
    let release;
    if(this.state.album.tags){
      release = this.state.album.tags.tag.map(function(releaseItem){
        return(
          <div>{releaseItem.name}</div>
        )
      })
    }
    let image;
    if(this.state.album.image){
      image = this.state.album.image.map(function(imageItem){
        return(
          <div>{imageItem.size}</div>
        )
      })
    }
    return (
      <div>
      <div className="myCollection container">
        <h1>My Collection</h1>
        <AlbumSearch/>
        <div className="row album_info">
          <div className="col s4 m4">
            <p className="name">Album Name</p>
          <div>{this.state.album.name}</div>
            <p className="name">Artist</p>
          <div>{this.state.album.artist}</div>
          <p className="name">Release</p>
          <div>{release}</div>

          </div>
          <div className="col s4 m4">
            <p className="name">Tracks</p>
          <div>{tracks}</div>

          </div>
            <div className="col s4 m4">
            <p className="name">Image Stuff</p>
          {image}
          <p className="name">Link</p>
        <div>{this.state.album.url}</div>
        </div>

        </div>
        <input type="button" className="waves-effect waves-light red lighten-2 btn" value="Post Request" onClick={this._postRequest}/>
        <input type="button" className="waves-effect waves-light red lighten-2 btn" value="Put Request" onClick={this._editRequest}/>
        <input type="button" className="waves-effect waves-light red lighten-2 btn" value="Delete Request" onClick={this._deleteRequest}/>
        </div>
        {/* <ul class="collapsible">
     <li>
       <div class="collapsible-header"><i class="material-icons">filter_drama</i>First</div>
       <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
     </li>
     <li>
       <div class="collapsible-header"><i class="material-icons">place</i>Second</div>
       <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
     </li>
     <li>
       <div class="collapsible-header"><i class="material-icons">whatshot</i>Third</div>
       <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
     </li>
   </ul> */}
 <div className='row center'>
   <div className='col s12 center'>
 <div class='image'><img src={image4} alt="Unsplashed background img 1"/></div>
 </div>
</div>

      </div>
    );
  }
}

export default MyCollection;
