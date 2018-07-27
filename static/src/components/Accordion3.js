import React, { Component } from 'react';

import $ from 'jquery';
import Materialize from 'materialize-css/dist/js/materialize.min.js';

// console.log('collection data', collection);


// console.log('merge', merge_collection);

class Accordion3 extends Component {
 constructor(props) {
   super(props);
 }

 componentDidMount(options) {
   var elems = document.querySelectorAll('.collapsible');
   var instances = Materialize.Collapsible.init(elems, options);
 }



 render() {
   let transform_collection = this.props.mycollection.map((obj) => {
    obj.album = [obj.album];
    return obj;
   });
   // console.log('transform', transform_collection);

   let sort_collection = transform_collection.sort((a, b) => {
    if (a.artist < b.artist) {
      return -1
    } else if(a.artist > b.artist) {
      return 1;
    }
    return 0;
   });
   // console.log('sort', sort_collection);

   let merge_collection = sort_collection.reduce((accumulator, currentValue) => {

    // check if artist exists in accumulator
    var index = accumulator.reduce((accum, current, index) => {
      return current.artist === currentValue.artist ? index : accum
    },-1);

    // if artist exists...
    if(index !== -1){
      accumulator[index].album.push(currentValue.album[0]);
    } else {
      accumulator.push(currentValue);
    }

    return accumulator;
   },[]);
console.log('merge',merge_collection)
   let accordion_data = merge_collection.map(function(item, index){
     let albums = item.album.map(function(item, index){
       let tracks = item.tracks.map(function(i, index){
         return (<p key={index}>{i}</p>)
       })
       return (
         <li key={index}>
           <div className="collapsible-header">
             <i className="material-icons">album</i>{item.album}</div>
           <div className="collapsible-body">
             {tracks}
           </div>
         </li>
       )
     })
     return(
       <li key={index}>
         <div className="collapsible-header">
           <i className="material-icons">queue_music</i>{item.artist}</div>
         <div className="collapsible-body">
           <div className="row">
             <div className="col s12 m12">
               <ul className="collapsible" data-collapsible="accordion">
                 {albums}
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
             {accordion_data}
         </ul>
       </div>
     )
   }
  }

  export default Accordion3;
