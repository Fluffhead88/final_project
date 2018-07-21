import React, { Component } from 'react';

import './Home.css';
// import image1 from './images/vinyl_bins.jpeg'
import image2 from './images/records.jpg'
// import image3 from './images/vinyl_bins.jpeg'
import image4 from './images/records_sun.jpg'
// import $ from 'jquery'
//
// $(document).ready(function(){
//     $('.parallax').parallax();
// });


class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <body>

        <div id="index-banner" class="parallax-container">
          <div class="section no-pad-bot">
            <div class="container">
              <br></br>
              <h1 class="header center gray-text text-lighten-2">Record Collection</h1>
              <div class="row center">
                <h5 class="header col s12 light">Orangize and Expand your growing vinyl record collection</h5>
              </div>
              <div class="row center">
                <a href="" id="login-button" class="btn-large waves-effect waves-light red lighten-2" onclick="document.getElementById('id01').style.display='block'">Create Collection</a>



<div id="id01" class="modal">
  <span onclick="document.getElementById('id01').style.display=none"
class="close" title="Close Modal">&times;</span>


  <form class="modal-content animate" action="/action_page.php">
    <div class="imgcontainer">
      <img src="img_avatar2.png" alt="Avatar" class="avatar"/>
    </div>

    <div class="container">
      <label for="uname"><b>Username</b></label>
      <input type="text" placeholder="Enter Username" name="uname" required/>

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required/>

      <button type="submit">Login</button>
      <label>
        <input type="checkbox" checked="checked" name="remember"/> Remember me
      </label>
    </div>

    <div class="container">
      <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
      <span class="psw">Forgot <a href="#">password?</a></span>
    </div>
  </form>
</div>

              </div>
              <br></br>

            </div>
          </div>
          <div class='image'><img src={image2} alt="Unsplashed background img 1"/></div>
        </div>


        <div class="container">
          <div class="section">

            {/* <!--   Icon Section   --> */}
            <div class="row">
              <div class="col s12 m4">
                <div class="icon-block">
                  <h2 class="center gray-text"><i class="medium material-icons">folder</i></h2>
                  <h5 class="center">Organize</h5>

                  <p class="light">Input your personal library of records and keep this information in one place.</p>
                </div>
              </div>

              <div class="col s12 m4">
                <div class="icon-block">
                  <h2 class="center gray-text"><i class="medium material-icons">album</i></h2>
                  <h5 class="center">Browse</h5>

                  <p class="light">See what albums your friends have. See how your collection stacks up to others. Find records that you want to add to your collection.</p>
                </div>
              </div>

              <div class="col s12 m4">
                <div class="icon-block">
                  <h2 class="center gray-text"><i class="medium material-icons">playlist_add</i></h2>
                  <h5 class="center">Expand</h5>

                  <p class="light">Find a record that you want to someone else currently owns. Message other users and propose trades of albums to grow and refine your collection.</p>
                </div>
              </div>
            </div>

          </div>
        </div>


        {/* <div class="parallax-container valign-wrapper">
          <div class="section no-pad-bot">
            <div class="container">
              <div class="row center">
                <h5 class="header col s12 light">Stuff</h5>
              </div>
            </div>
          </div>
          <div class="image"><img src={image2} alt="Unsplashed background img 2"/></div>
        </div>


        <div class="parallax-container valign-wrapper">
          <div class="section no-pad-bot">
            <div class="container">
              <div class="row center">
                <h5 class="header col s12 light">Stuff</h5>
              </div>
            </div>
          </div>
          <div class="image"><img src={image3} alt="Unsplashed background img 3"/></div>
        </div> */}

        <footer class="page-footer red-lighten-2">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Bio</h5>
                <p class="grey-text text-lighten-4">Stuff</p>


              </div>
              <div class="col l3 s12">
                <h5 class="white-text">Settings</h5>
                <ul>
                  <li><a class="white-text" href="#!">Link 1</a></li>
                  <li><a class="white-text" href="#!">Link 2</a></li>
                  {/* <li><a class="white-text" href="#!">Link 3</a></li>
                  <li><a class="white-text" href="#!">Link 4</a></li> */}
                </ul>
              </div>
              <div class="col l3 s12">
                <h5 class="white-text">Connect</h5>
                <ul>
                  <li><a class="white-text" href="#!">Link 1</a></li>
                  <li><a class="white-text" href="#!">Link 2</a></li>
                  {/* <li><a class="white-text" href="#!">Link 3</a></li>
                  <li><a class="white-text" href="#!">Link 4</a></li> */}
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            Made by <a class="white-text text-lighten-1" href="https://fluffhead88.github.io/take-two/">Zachary Thigpen</a>
            </div>
          </div>
        </footer>


        {/* <!--  Scripts--> */}
        <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
        <script src="js/materialize.js"></script>
        <script src="js/init.js"></script>

        </body>

    );
  }
}

export default Home;
