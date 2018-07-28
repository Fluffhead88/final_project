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
      image:'',
      bio:'',
    }

  this._postAddUserImage = this._postAddUserImage.bind(this);

  }
  _handleInput(event) {
  let content = event.target.value;
  if (event.target.name === 'image'){
    let file = event.target.files[0];
    console.log('image_stuff1', file);
    this.setState({image:file});
    }
  }

  _postAddUserImage(){

    let data = new FormData();
    // data["username"] = this.state.username;
    // data["email"] = this.state.email;
    data.append('image', (this.state.image !== undefined ? this.state.image:''));

    let token = sessionStorage.getItem('auth_token');
    fetch(`${URL}users/`,{
      method:'POST',
      body: data,
      headers:{
        'Content-Type': 'multipart/form-data',
        'Authorization': token
      }
    })
    .then(function(response){
      console.log('image_stuff', response);
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
        <a href="#modal3" id="profile_update" className="waves-effect waves-light red lighten-2 btn modal-trigger">Update Profile</a>
         {/* // <!-- Modal Structure --> */}
         <div id="modal3" className="modal">
           <div className="row">
             <div className="modal-content">
             <form onSubmit={this._postAddUserImage} encType='multipart/form-data'>
              <input name="imageInput" type="file" id="imageInput" onChange={this._handleInput} />
              <button type="submit" className="waves-effect waves-light red lighten-2 btn-small">Submit</button>
             </form>
             </div>
           </div>
         </div>
       </div>
    )
  }
}

export default ProfileUpdateModal;
