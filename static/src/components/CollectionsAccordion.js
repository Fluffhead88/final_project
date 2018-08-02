import React, { Component } from 'react';
import CreateEmail from './CreateEmail.js'
import $ from 'jquery';
import Materialize from 'materialize-css/dist/js/materialize.min.js';
import './CollectionsAccordion.css';

// const URL     = "http://127.0.0.1:8000/"
const URL = "https://morning-beyond-85234.herokuapp.com/"

class CollectionsAccordion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      album_id: props.album

    }
  }
// initiates modal from Materialize
  componentDidMount(options) {
    var elems = document.querySelectorAll('.collapsible');
    console.log('el', elems);
    var instances = Materialize.Collapsible.init(elems, options);
  }

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
    // iterates over collections and returns selected information
    let accordionItems = sort_collection.map(function(item, index){
      // console.log('here', item)
      let tracks = item.tracks.map(function(track, index){
        return (<div key={index}>{track.title}</div>)
      })

      return (
        // accordion for all users collections 
        <li key={index}>
          <div className="collapsible-header">
            <i className="material-icons">album</i>{item.artist} - {item.album}
            <CreateEmail album={item.id} className="contact_on_accordion"/>
          </div>
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
              <ul className="collapsible popout" data-collapsible="accordion">
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
        <ul className="collapsible popout" data-collapsible="accordion">
          {accordionItems}
        </ul>
      </div>
    )
 }
}

 export default CollectionsAccordion;
