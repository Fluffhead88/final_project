import React, { Component } from 'react';

import './Home.css';
// import image1 from './images/vinyl_bins.jpeg'
import image2 from './images/records.jpg'
// import image3 from './images/vinyl_bins.jpeg'
// import image4 from './images/records_sun3.png'
// import $ from 'jquery'
//
// $(document).ready(function(){
//     $('.parallax').parallax();
// });
const URL = "http://127.0.0.1:8000/auth/token/create/"

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artistSearch: '',
      albumSearch: ''
    }

    this._handleInput = this._handleInput.bind(this);
}
    _handleInput(event) {
      let data = event.target.value;

      let obj =  {}
      let key = event.target.name;
      obj[key] = event.target.value;
      this.setState(obj);
    }
    // _postAuthCreation() {
    //   let self = this;
    //
    //   fetch(URL,{
    //     method: 'POST'.
    //     body:JSON.stringify(something),
    //     headers:{}
    //   })
    //   .then(function(response){
    //     if(!response.ok){
    //       throw Error(response.statusText);
    //     }
    //     return response.json()
    //   })
    //   .then(function(responseJSON){
    //     console.log('response', responseJSON)
    //     self.setState({stuff: responseJSON.stuff});
    //   })
    //   .catch(function(error){
    //     console.log('Looks like there was a problem: \n', error);
    //   });
    // }


  render() {
    return (
      <div>
        <div id="index-banner" className="parallax-container">
          <div className="section no-pad-bot">
            <div className="container">
              <br></br>
              <h1 className="header center gray-text text-lighten-2">Record Collection</h1>
              <div className="row center">
                <h5 className="header col s12 light">Orangize and Expand your growing vinyl record collection</h5>
              </div>
              <div className="row center">
                {/* onClick={document.getElementById('id01').style.display='block'} */}
                <a href="" id="login-button" className="btn-large waves-effect waves-light red lighten-2" >Create Collection</a>
              </div>
              <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>

              {/* <!-- Modal Structure --> */}
              <div id="modal1" className="modal">
                <div className="modal-content">
                  <h4>Modal Header</h4>
                  <p>A bunch of text</p>
                </div>
                <div className="modal-footer">
                  <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
                </div>
              </div>
              <br></br>
            </div>
          </div>
          <div className='image'><img src={image2} alt="Unsplashed background img 1"/></div>
        </div>
        <div className="container">
          <div className="section">
            {/* <!--   Icon Section   --> */}
            <div className="row">
              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center gray-text"><i className="medium material-icons">folder</i></h2>
                  <h5 className="center">Organize</h5>
                  <p className="light">Input your personal library of records and keep this information in one place.</p>
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
        <div className="container">
          <form className="login form">
            <div className="container">
              <label htmlFor="uname"><b>Username</b></label>
              <input type="text" placeholder="Enter Username" name="uname" required/>
              <label htmlFor="psw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" required/>
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
        <footer className="page-footer red-lighten-2">
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
          <div className="footer-copyright">
            <div className="container">
            Made by <a className="white-text text-lighten-1" href="https://fluffhead88.github.io/take-two/">Zachary Thigpen</a>
            </div>
          </div>
        </footer>



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
