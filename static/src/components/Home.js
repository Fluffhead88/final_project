import React, { Component } from 'react';
import './Home.css';
import $ from 'jquery';
import RegisterModal from './RegisterModal.js';
import image2 from './images/records.jpg';
import Materialize from 'materialize-css/dist/js/materialize.min.js';

// end point for creating auth token with djoser
const URL     = "http://127.0.0.1:8000/"
// const URL = "https://morning-beyond-85234.herokuapp.com/"
// What is url when deployed in production?
// something.herokuapp.com/auth/token/create/   ??????

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }

    this._handleInput = this._handleInput.bind(this);
}
    _handleInput(event) {
      let obj =  {}
      let key = event.target.name;
      obj[key] = event.target.value;
      this.setState(obj);
    }

  render() {
    console.log('home', this.props)
    return (
      <div>
        <div id="index-banner" className="parallax-container">
          <div className="section no-pad-bot">
            <div className="container">
              <br></br>
              {/* banner page title */}
              <h1 className="header center gray-text text-lighten-2">The Record Bin</h1>
              <div className="row center">
                {/* tagline under title */}
                <h5 className="header col s12 light">Orangize and Expand your vinyl record collection</h5>
              </div>
              <div className="row center">
                <RegisterModal history={this.props.history}/>
              </div>
              <br></br>
            </div>
          </div>
          {/* image on home page  */}
          <div className='home_image'><img src={image2} alt="Unsplashed background img 1"/></div>
        </div>
        <div className="container">
          <div className="section">
            {/* <!--   Icon Section, describes what app is for  --> */}
            <div className="row">
              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center gray-text"><i className="medium material-icons">folder</i></h2>
                  <h5 className="center">Organize</h5>
                  <p className="light">Store your personal library of records and keep them cataloged in one place.</p>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center gray-text"><i className="medium material-icons">album</i></h2>
                  <h5 className="center">Browse</h5>
                  <p className="light">See what albums other users own. Find records that you want to add to your collection. Use the search to explore what's out there.</p>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center gray-text"><i className="medium material-icons">playlist_add</i></h2>
                  <h5 className="center">Expand</h5>
                  <p className="light">Find a record that you want that someone else currently owns. Message other users and propose trades of albums to grow and refine your collection.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
