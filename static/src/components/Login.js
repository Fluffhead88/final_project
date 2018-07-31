import React, { Component } from 'react';
// import { Redirect } from 'react-router';

const URL     = "http://127.0.0.1:8000/"
const URLPROD = "https://morning-beyond-85234.herokuapp.com/"

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }

  this._postLoginAuth = this._postLoginAuth.bind(this);
  this._handleInput = this._handleInput.bind(this);
}

_handleInput(event) {
  // let data = event.target.value;
  let obj =  {}
  let key = event.target.name;
  obj[key] = event.target.value;
  this.setState(obj);
}
_postLoginAuth(event) {
  event.preventDefault();
  let data = this.state;
  let self = this;

  fetch(`${URLPROD}auth/token/create/`,{
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',

    }
  })
  .then(function(response){
    if(!response.ok){
      throw Error(response.statusText);
    }
    return response.json()
  })
  .then(function(responseJSON){
    console.log('response', responseJSON.auth_token)
    sessionStorage.setItem('auth_token', 'token '+responseJSON.auth_token)

    fetch(`${URLPROD}auth/me/`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'token ' + responseJSON.auth_token
      }
    }).then(function(response) {
      return response.json();
    }).then(function(response) {
      sessionStorage.setItem('auth_id', response.id);
    })


    sessionStorage.setItem('zach_is_cool', 'lol');
    let obj = {
      username: '',
      password: ''
    }
    self.setState(obj);
    console.log('history', self.props.history)
    self.props.history.push("/mycollection");
  })
  .catch(function(error){
    console.log('Looks like there was a problem: \n', error);
  });
}

render() {
  return (
    // {/* section for log in */}
    <div className="row">
      <form className="login form col s12" onSubmit={this._postLoginAuth}>
        <div className="container">
          <label htmlFor="username"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" value={this.state.username} name='username' onChange={this._handleInput} required/>
          <label htmlFor="password"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" value={this.state.password} name='password' onChange={this._handleInput} required/>
          <button className="modal-close waves-effect waves-light red lighten-2 btn-small" type="submit">Login</button>
        </div>
      </form>
    </div>
  );
  }
}
export default Login
