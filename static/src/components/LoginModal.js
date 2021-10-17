import React, { Component } from 'react';
import Login from './Login.js'
import $ from 'jquery';
import Materialize from 'materialize-css/dist/js/materialize.min.js';
import './LoginModal.css';

// const URL     = "http://127.0.0.1:8000/"
const URL = "http://myrecordbin.com/"

class LoginModal extends Component {
  constructor(props) {
    super(props);
  }
// initializes modal pop up
  componentDidMount(options) {
    var elems = document.querySelectorAll('.modal');
    var instances = Materialize.Modal.init(elems, options);
  }

  render() {
    return (
      <div>
      {/* // <!-- Modal Trigger --> */}
      {/* only shows log in button if user does not already have an auth token */}
      {!sessionStorage.getItem('auth_token') ? <a href="#modal2" id="login-button" className="waves-effect waves-light red lighten-2 btn modal-trigger">Log In</a> : null}
       {/* // <!-- Modal Structure --> */}
         <div id="modal2" className="modal">
           <div className="modal-content">
           {/* import create account component */}
            <Login history={this.props.history}/>
           </div>
         </div>
       </div>
    )
  }
}

export default LoginModal;
