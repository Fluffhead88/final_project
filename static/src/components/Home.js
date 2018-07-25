import React, { Component } from 'react';
import CreateAccount from './CreateAccount.js'
import './Home.css';
import $ from 'jquery';
// import image1 from './images/vinyl_bins.jpeg'
import image2 from './images/records.jpg'
// import image3 from './images/vinyl_bins.jpeg'
// import image4 from './images/records_sun3.png'
// import $ from 'jquery'
//
// $(document).ready(function(){
//     $('.parallax').parallax();
// });

// end point for creating auth token with djoser
const URL = "http://127.0.0.1:8000/auth/token/create/"

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }

    this._handleInput = this._handleInput.bind(this);
    this._postLoginAuth = this._postLoginAuth.bind(this);

}
    _handleInput(event) {
      let obj =  {}
      let key = event.target.name;
      obj[key] = event.target.value;
      this.setState(obj);
    }

// function to get auth token back from back end
    _postLoginAuth(event) {
      event.preventDefault();
      let data = this.state;
      let self = this;

      fetch(URL,{
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
        let obj = {
          username: '',
          password: ''
        }
        self.setState(obj)

      })
      .catch(function(error){
        console.log('Looks like there was a problem: \n', error);
      });
    }



  render() {
    return (
      <div>
        <div id="index-banner" className="parallax-container">
          <div className="section no-pad-bot">
            <div className="container">
              <br></br>

              {/* banner page title */}
              <h1 className="header center gray-text text-lighten-2">Record Collection</h1>
              <div className="row center">

                {/* tagline under title */}
                <h5 className="header col s12 light">Orangize and Expand your growing vinyl record collection</h5>
              </div>
              <div className="row center">

                {/* this is for modal that's not working, should take you log in or create user */}
                {/* onClick={document.getElementById('id01').style.display='block'} */}
                <a href="" id="login-button" className="btn-large waves-effect waves-light red lighten-2" >Create Collection</a>
              </div>
              {/* <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a> */}

              {/* <!-- Modal Structure --> */}
              {/* <div id="modal1" className="modal">
                <div className="modal-content">
                  <h4>Modal Header</h4>
                  <p>A bunch of text</p>
                </div>
                <div className="modal-footer">
                  <a href="#!" className="modal-close waves-effect waves-light red lighten-2">Agree</a>
                </div>
              </div> */}
              <br></br>
            </div>
          </div>

          {/* image on home page  */}
          <div className='home_image'><img src={image2} alt="Unsplashed background img 1"/></div>
        </div>
        <div className="container">
          <div className="section">


            {/* <!--   Icon Section, describes what app is for  --> */}
            <div className="row">
              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center gray-text"><i className="medium material-icons">folder</i></h2>
                  <h5 className="center">Organize</h5>
                  <p className="light">Store your personal library of records and keep them cataloged in one place.</p>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center gray-text"><i className="medium material-icons">album</i></h2>
                  <h5 className="center">Browse</h5>
                  <p className="light">See what albums your friends have. See how your collection stacks up to others. Find records that you want to add to your collection.</p>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center gray-text"><i className="medium material-icons">playlist_add</i></h2>
                  <h5 className="center">Expand</h5>
                  <p className="light">Find a record that you want that someone else currently owns. Message other users and propose trades of albums to grow and refine your collection.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* section for log in - hopefully break into modal */}
        <div className="container">
          <div className="row">
            <div>Login</div>
          <form className="login form col s8" onSubmit={this._postLoginAuth}>
            <div className="container">
              <label htmlFor="username"><b>Username</b></label>
              <input type="text" placeholder="Enter Username" value={this.state.username} name='username' onChange={this._handleInput} required/>
              <label htmlFor="password"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" value={this.state.password} name='password' onChange={this._handleInput} required/>
              <button className="waves-effect waves-light red lighten-2 btn-small" type="submit">Login</button>
            </div>
          </form>
        </div>
        </div>
        <div>

          {/* import create account component */}
          <CreateAccount/>
        </div>

          {/* <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Bio</h5>
                <p className="grey-text text-lighten-4">Stuff</p>
              </div>
              <div className="col l3 s12">
                <h5 className="white-text">Settings</h5>
                <ul>
                  <li><a className="white-text" href="#!">Link 1</a></li>
                  <li><a className="white-text" href="#!">Link 2</a></li>
                </ul>
              </div>
              <div className="col l3 s12">
                <h5 className="white-text">Connect</h5>
                <ul>
                  <li><a className="white-text" href="#!">Link 1</a></li>
                  <li><a className="white-text" href="#!">Link 2</a></li>
                </ul>
              </div>
            </div>
          </div> */}

          {/* link takes you to github */}



{/* modal stuff that's not working */}
        {/* <div id="id01" className="modal">
          <span onClick="document.getElementById('id01').style.display=none"
        className="close" title="Close Modal">&times;</span>


          <form className="modal-content animate" action="/action_page.php">
            <div className="imgcontainer">
              <img src="img_avatar2.png" alt="Avatar" className="avatar"/>
            </div>

            <div className="container">
              <label htmlFor="uname"><b>Username</b></label>
              <input type="text" placeholder="Enter Username" name="uname" required/>

              <label htmlFor="psw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" required/>

              <button type="submit">Login</button>
              <label>
                <input type="checkbox" checked="checked" name="remember"/> Remember me
              </label>
            </div>

            <div className="container">
              <button type="button" onClick="document.getElementById('id01').style.display='none'" className="cancelbtn">Cancel</button>
              <span className="psw">Forgot <a href="#">password?</a></span>
            </div>
          </form>
        </div> */}

        {/* <!--  Scripts--> */}
        {/* <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
        <script src="js/materialize.js"></script>
        <script src="js/init.js"></script> */}

      </div>

    );
  }
}

export default Home;
