import React, { Component } from 'react';
import CreateAccount from './CreateAccount.js'

import $ from 'jquery';
import Materialize from 'materialize-css/dist/js/materialize.min.js';

const URL     = "http://127.0.0.1:8000/"
const URLPROD = "https://morning-beyond-85234.herokuapp.com/"

class RegisterModal extends Component {
  constructor(props) {
    super(props);
  }

// allows modal to open and close
  componentDidMount(options) {
    var elems = document.querySelectorAll('.modal');
    var instances = Materialize.Modal.init(elems, options);
  }

  render() {
    return (
      <div>
      {/* // <!-- Modal Trigger --> */}
        <a href="#modal1" id="login-button" className="btn-large waves-effect waves-light red lighten-2 btn modal-trigger" >Create Account</a>
       {/* // <!-- Modal Structure --> */}
         <div id="modal1" className="modal">
           <div className="modal-content">
           {/* import create account component */}
             <CreateAccount/>
           </div>
         </div>
       </div>
    )
  }
}

export default RegisterModal;
