import React, { Component } from 'react';

// const URL     = "http://127.0.0.1:8000/"
const URL = "https://morning-beyond-85234.herokuapp.com/"

class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      image:'',
    }

  this._postCreateAccount = this._postCreateAccount.bind(this);
  this._postLoginAuth = this._postLoginAuth.bind(this);
  this._handleInput = this._handleInput.bind(this);
}

_handleInput(event) {
  let obj =  {}
  let key = event.target.name;
  obj[key] = event.target.value;
  this.setState(obj);
}
// sends a post request to auth/token/create to get a djoser auth token for log in authentication
_postLoginAuth() {
  // event.preventDefault();
  let data = {
    username: this.state.username,
    password: this.state.password
  };
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
// gets user info from /auth/me and sets user id to session storage 
    fetch(`${URL}auth/me/`,{
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
// post to user creation end point on back end - takes username, password, email
// email will be used to message other users
// auth token is stored in session storage so log out is not required

_postCreateAccount(event) {
  let self = this;
  event.preventDefault();
  let data = this.state;

  fetch(`${URL}auth/users/create/`,{
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
    self._postLoginAuth();
    // return response.json()
  })
  .catch(function(error){
    console.log('Looks like there was a problem: \n', error);
  });
}

render() {
  console.log('props creat account', this.props)
  return (
    <div className="container">
      <div className="row">
        {/* form to create account upon submit */}
        <h5>Create Account</h5>
        <form className="login form col s12" onSubmit={this._postCreateAccount}>
          <div className="container">
            <label htmlFor="username"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" value={this.state.username} name='username' onChange={this._handleInput} required/>
            <label htmlFor="password"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" value={this.state.password} name='password' onChange={this._handleInput} required/>
            <label htmlFor="password"><b>Password</b></label>
            <input type="email" placeholder="Enter Email" value={this.state.email} name='email' onChange={this._handleInput} required/>
            {/* <label htmlFor="imageInput">Upload Image</label> */}
            <button className="modal-close waves-effect waves-light red lighten-2 btn-small" type="submit">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
  }
}
export default CreateAccount
