import React, { Component } from 'react';
import './CreateEmail.css';
import $ from 'jquery'
// const URL     = "http://127.0.0.1:8000/"
const URL = "https://morning-beyond-85234.herokuapp.com/"

class CreateEmail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      album_id: props.album
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
    console.log(response);
  })
  .catch(function(error){
    console.log('Looks like there was a problem \n,', error)
  });
}

render() {
  return (
    <div className="contact_button">
      <button type="button" onClick={this._postCreateEmail} className="waves-effect waves-light red lighten-2 btn-small contact_button">Contact</button>
    </div>
  );
  }
}
export default CreateEmail
