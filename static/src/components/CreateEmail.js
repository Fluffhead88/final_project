import React, { Component } from 'react';
import './CreateEmail.css';
import $ from 'jquery'
import Materialize from 'materialize-css/dist/js/materialize.min.js';
// const URL     = "http://127.0.0.1:8000/"
const URL = "https://morning-beyond-85234.herokuapp.com/"

class CreateEmail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      album_id: props.album,
      confirm: false
    }
  this._postCreateEmail = this._postCreateEmail.bind(this);
}

_postCreateEmail(event) {

  let button = event.target;
  $(button).parents().parents().removeClass('active');
  $(button).parents().siblings('.collapsible-body').attr("style","display: none");

  let self = this;
  let token = sessionStorage.getItem('auth_token');

  console.log(this.state)
  fetch(`${URL}contact/`,{
    method: 'POST',
    body: JSON.stringify(this.state),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    }
  })
  .then(function(response){
    self.setState({confirm: true});
    setTimeout(function(){
      self.setState({confirm: false})
    },2000)
    console.log(response);
  })
  .catch(function(error){
    console.log('Looks like there was a problem \n,', error)
  });
}

render() {
  return (
    <div className="contact_button">
      {this.state.confirm ? <span className="sent">Message Sent</span> : null}
      <button type="button" onClick={this._postCreateEmail} className="waves-effect waves-light red lighten-2 btn-small contact_button">Contact</button>
    </div>
  );
  }
}
export default CreateEmail
