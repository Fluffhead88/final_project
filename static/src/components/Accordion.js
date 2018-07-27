import React, { Component } from 'react';
// import AccordionTracks from './AccordionTracks'
import $ from 'jquery';
import Materialize from 'materialize-css/dist/js/materialize.min.js';

const URL     = "http://127.0.0.1:8000/"
const URLPROD = "https://morning-beyond-85234.herokuapp.com/"

class Accordion extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(options) {
    var elems = document.querySelectorAll('.collapsible');
    console.log('el', elems);
    var instances = Materialize.Collapsible.init(elems, options);
  }

  render() {
    console.log('this props', this.props)
    // let artists = this.props.mycollection.map(function(item, index){
    //  let albums = [1,2,3].map(function(item, index){
    //    let tracks = [1,2,3].map(function(item, index){
    //       return (<div key={index}>{item}</div>)
    //    });
    //    return (
    //      <li key={index}>
    //      <div className="collapsible-header"><i className="material-icons">queue_music</i>album</div>
    //      <div className="collapsible-body">
    //        <ul className="collapsible">
    //          <div className="collapsible-header"><i className="material-icons">album</i>track</div>
    //          <div className="collapsible-body">
    //            {tracks}
    //          </div>
    //        </ul>
    //      </div>
    //    </li>
    //    )
    //  });
    //  return (
    //    <ul className="collapsible">
    //      <li>
    //        <div className="collapsible-header"><i className="material-icons">filter_drama</i>{item.artist}</div>
    //        <div className="collapsible-body">
    //          <ul className="collapsible">
    //            {albums}
    //          </ul>
    //        </div>
    //      </li>
    //    </ul>
    //  )
   // })

    let accordionItems = this.props.mycollection.map(function(item, index){
      console.log('here', item)

      let tracks = item.tracks.map(function(track, index){
        return (<div key={index}>{track.title}</div>)
      })

      return (
        <li key={index}>
          <div className="collapsible-header">
            <i className="material-icons">album</i>{item.artist} - {item.album}</div>
          <div className="collapsible-body">
            {tracks}
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

//       return(
//         <li key={index}>
//           <div className="collapsible-header"><i className="material-icons">queue_music</i>{item.artist}</div>
//           <div className="collapsible-body">
//             <ul className="collapsible">
//               <div className="collapsible-header"><i className="material-icons">album</i>{item.album}</div>
//               <div className="collapsible-body"><span>Track</span></div>
//             </ul>
//           </div>
//         </li>
//       )
//     })
//
//     return (
//       <div>
//         <ul className="collapsible">
//           {accordionItems}
//         </ul>
//         {/* <div>
//                <ul className="collapsible">
//                  <li>
//                    <div className="collapsible-header"><i className="material-icons">filter_drama</i>Artist</div>
//                    <div className="collapsible-body">
//                      <ul className="collapsible">
//                        <li>
//                          <div className="collapsible-header"><i className="material-icons">filter_drama</i>Album</div>
//                          <div className="collapsible-body"><span>Track</span></div>
//                        </li>
//                      </ul>
//                    </div>
//                  </li>
//                </ul>
//         </div> */}
//       </div>
//     )
//   }
// }
//
// export default Accordion;
