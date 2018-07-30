import React, { Component } from 'react';
// import AccordionTracks from './AccordionTracks'
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

  componentDidMount(options) {
    var elems = document.querySelectorAll('.collapsible');
    var instances = Materialize.Collapsible.init(elems, options);

    // var buttons = document.querySelectorAll('.delete_btn');
    // buttons.forEach(function(button){
    //   button.on('click', function(event) {
    //     event.stopPropagation();
    //   })
    // })
    // $('.collapsible .delete_btn').on('click', function(event){
    //   event.stopPropagation();
    // });
  }


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
    let self = this;
    // iterates over users albums to be added to accordion
    let accordionItems = sort_collection.map(function(item, index){
      // console.log('here', item)

      let tracks = item.tracks.map(function(track, index){
        return (<div key={index}>{track.title}</div>)
      })
      return (
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
