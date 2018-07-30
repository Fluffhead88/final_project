import React, { Component } from 'react';
import CreateEmail from './CreateEmail.js'
import $ from 'jquery';
import Materialize from 'materialize-css/dist/js/materialize.min.js';
import './CollectionsAccordion.css';

const URL     = "http://127.0.0.1:8000/"
const URLPROD = "https://morning-beyond-85234.herokuapp.com/"

class CollectionsAccordion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      album_id: props.album

    }
    // this._deleteAlbum = this._deleteAlbum.bind(this);
  }
// initiates modal from Materialize
  componentDidMount(options) {
    var elems = document.querySelectorAll('.collapsible');
    console.log('el', elems);
    var instances = Materialize.Collapsible.init(elems, options);
  }

  // _deleteAlbum(album){
  //   let self = this;
  //   let token = sessionStorage.getItem('auth_token');
  //
  //   fetch(`${URL}myalbums/${this.id}/`,{
  //     method:'DELETE',
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

  render() {
    // takes sorting function and applies to all collections so they're alphabetical
    let sort_collection = this.props.collections.sort((a, b) => {
     if (a.artist < b.artist) {
       return -1
     } else if(a.artist > b.artist) {
       return 1;
     }
     return 0;
    });
    let accordionItems = sort_collection.map(function(item, index){
      // console.log('here', item)
      let tracks = item.tracks.map(function(track, index){
        return (<div key={index}>{track.title}</div>)
      })

      return (
        <li key={index}>
          <div className="collapsible-header">
            <i className="material-icons">album</i>{item.artist} - {item.album}
            <CreateEmail album={item.id} className="right-align"/>
          </div>
            {/* <button type="button" onClick={this._deleteAlbum} className="waves-effect waves-light red lighten-2 btn-small">Delete</button> */}
          <div className="collapsible-body">
            <div className="row">
              <div className="col s12 m6">
                <p className="name">Tracks</p>
                {tracks}
              </div>
            <div className="col s6 hide-on-small-only">
              <img src={item.image} alt=""/>
            </div>
            <CreateEmail album={item.id}/>
            </div>
          </div>
        </li>
      )
    return(
      <li key={index}>
        <div className="collapsible-header">
          <i className="material-icons">queue_music</i>{item.artist}</div>
        <div className="collapsible-body">
          <div className="row">
            <div className="col s12 m12">
              <ul className="collapsible" data-collapsible="accordion">
                {item.album}
              </ul>
            </div>
          </div>
        </div>
      </li>
    )
})
    return (
      <div>
        <ul className="collapsible" data-collapsible="accordion">
          {accordionItems}
        </ul>
      </div>
    )
 }
}

 export default CollectionsAccordion;
