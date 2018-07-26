import React, { Component } from 'react';
import Login from './Login.js'
import $ from 'jquery';
import Materialize from 'materialize-css/dist/js/materialize.min.js';
import './LoginModal.css';


const URL     = "http://127.0.0.1:8000/"
const URLPROD = "https://morning-beyond-85234.herokuapp.com/"

class LoginModal extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(options) {
    var elems = document.querySelectorAll('.modal');
    var instances = Materialize.Modal.init(elems, options);
  }

  render() {
    return (
      <div>
      {/* // <!-- Modal Trigger --> */}
      <a href="#modal2" id="login-button" className="waves-effect waves-light red lighten-2 btn modal-trigger">Log In</a>
       {/* // <!-- Modal Structure --> */}
       <div id="modal2" className="modal">
         <div className="modal-content">
           {/* import create account component */}
          <Login/>
         </div>
       </div>
       </div>
    )
  }
}

export default LoginModal;
