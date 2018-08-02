import React, { Component } from 'react';
import $ from 'jquery';
import Materialize from 'materialize-css/dist/js/materialize.min.js';
import './Accordion.css';

class Accordion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      album_id: props.album

    }
  }
// initializes accordion action
  componentDidMount(options) {
    var elems = document.querySelectorAll('.collapsible');
    var instances = Materialize.Collapsible.init(elems, options);
  }

  render() {

  // sorts albums alphabetically
    let sort_collection = this.props.mycollection.sort((a, b) => {
     if (a.artist < b.artist) {
       return -1
     } else if(a.artist > b.artist) {
       return 1;
     }
     return 0;
    });
    let self = this;
    // iterates over users albums to be added to accordion
    let accordionItems = sort_collection.map(function(item, index){
      let tracks = item.tracks.map(function(track, index){
        return (<div key={index}>{track.title}</div>)
      })
      return (
        // accordion content 
        <li key={index}>
          <div className="collapsible-header mycollection_display">
            <i className="material-icons">album</i>{item.artist} - {item.album}
            <button type="button" className="waves-effect waves-light red lighten-2 btn-small delete_btn" onClick={(event)=>self.props.deleteAlbum(event,item)}>delete</button>
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
 export default Accordion;
