import React, { Component } from 'react';
// import AccordionTracks from './AccordionTracks'
import $ from 'jquery';
import Materialize from 'materialize-css/dist/js/materialize.min.js';

const URL     = "http://127.0.0.1:8000/"
const URLPROD = "https://morning-beyond-85234.herokuapp.com/"

class Accordion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      album_id: props.album

    }
    // need to add delete button to each album
    // this._deleteAlbum = this._deleteAlbum.bind(this);
  }

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
    // console.log('this props', this.props)

    // sorts albums alphabetically
    let sort_collection = this.props.mycollection.sort((a, b) => {
     if (a.artist < b.artist) {
       return -1
     } else if(a.artist > b.artist) {
       return 1;
     }
     return 0;
    });
    // iterates over users albums to be added to accordion
    let accordionItems = sort_collection.map(function(item, index){
      // console.log('here', item)

      let tracks = item.tracks.map(function(track, index){
        return (<div key={index}>{track.title}</div>)
      })
      return (
        <li key={index}>
          <div className="collapsible-header">
            <i className="material-icons">album</i>{item.artist} - {item.album}</div>
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
 export default Accordion;
