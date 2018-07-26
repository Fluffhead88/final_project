import React, { Component } from 'react';

const URL     = "http://127.0.0.1:8000/"
const URLPROD = "https://morning-beyond-85234.herokuapp.com/"

class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
    }

  this._postCreateAccount = this._postCreateAccount.bind(this);
  this._handleInput = this._handleInput.bind(this);
}

_handleInput(event) {
  // let data = event.target.value;
  let obj =  {}
  let key = event.target.name;
  obj[key] = event.target.value;
  this.setState(obj);
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
    return response.json()
  })
  .then(function(responseJSON){
    console.log('response', responseJSON.data)
    sessionStorage.setItem('auth_token', responseJSON.data)
    let obj = {
      username: '',
      password: '',
      email: '',
    }
    self.setState(obj)
  })
  .catch(function(error){
    console.log('Looks like there was a problem: \n', error);
  });
}

render() {
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
            <button className="waves-effect waves-light red lighten-2 btn-small" type="submit">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
  }
}
export default CreateAccount
