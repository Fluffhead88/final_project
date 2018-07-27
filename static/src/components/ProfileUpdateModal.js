import React, { Component } from 'react';
import $ from 'jquery';
import Materialize from 'materialize-css/dist/js/materialize.min.js';
// import './ProfileUpdateModal.css';

const URL     = "http://127.0.0.1:8000/"
const URLPROD = "https://morning-beyond-85234.herokuapp.com/"

class ProfileUpdateModal extends Component {
  constructor(props) {
    super(props);

    this.state={
      image:{},
      bio:{},
    }

  this._postAddUserImage = this._postAddUserImage.bind(this);

  }
  _postAddUserImage(){

    let data = {};
    // data["username"] = this.state.username;
    // data["email"] = this.state.email;
    data["image"] = '';
    data["bio"] = '';
    data['user'] = this.state.props.user;

    let token = sessionStorage.getItem('auth_token');
    fetch(`${URL}users/`,{
      method:'POST',
      body:data,
      headers:{
        'Content-Type': 'application/json',
        'Authorization': token
      }
    })
    .then(function(response){
      console.log(response);
    })
    .catch(function(error){
      console.log('Looks like there was a problem \n,', error)
    });
  }

  componentDidMount(options) {
    var elems = document.querySelectorAll('.modal');
    var instances = Materialize.Modal.init(elems, options);
  }

  render() {
    return (
      <div>
      {/* // <!-- Modal Trigger --> */}
      <a href="#modal3" id="login-button" className="waves-effect waves-light red lighten-2 btn modal-trigger">Update Profile</a>
       {/* // <!-- Modal Structure --> */}
       <div id="modal3" className="modal">
         <div className="modal-content">
          <input name="imageInput" className="waves-effect waves-light red lighten-2 btn-small" type="file" id="imageInput" onChange={this._postAddUserImage} />
         </div>
       </div>
       </div>
    )
  }
}

export default ProfileUpdateModal;
