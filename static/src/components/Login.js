import React, { Component } from 'react';
// import { Redirect } from 'react-router';

// const URL     = "http://127.0.0.1:8000/"
const URL = "https://morning-beyond-85234.herokuapp.com/"

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
  let obj =  {}
  let key = event.target.name;
  obj[key] = event.target.value;
  this.setState(obj);
}
// creates new token for the session for an already registered user
_postLoginAuth(event) {
  event.preventDefault();
  let data = this.state;
  let self = this;

  fetch(`${URL}auth/token/create/`,{
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

// stores id to be used for setting profile image

    fetch(`${URL}auth/me/`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'token ' + responseJSON.auth_token
      }
    }).then(function(response) {
      return response.json();
    }).then(function(response) {
      console.log("YEAH", response)
      sessionStorage.setItem('auth_id', response.id);
    })

    let obj = {
      username: '',
      password: ''
    }
    // sends logged in user directly to mycollections page
    self.setState(obj);
    // console.log('history', self.props.history)
    self.props.history.push("/mycollection");
  })
  .catch(function(error){
    console.log('Looks like there was a problem: \n', error);
  });
}

render() {
  return (
   // form for log in
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
