import React, { Component } from 'react';

import './Home.css';

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
                <h1 class="header center teal-text text-lighten-2">Record Collection</h1>
                <div class="row center">
                  <h5 class="header col s12 light">Orangize and Expand your growing vinyl record collection</h5>
                </div>
                <div class="row center">
                  <a href="" id="login-button" class="btn-large waves-effect waves-light teal lighten-1">Create Collection</a>
                </div>
                <br></br>

              </div>
            </div>
            <div class="parallax"><img src="/images/vinyl_wall.jpg" alt="Unsplashed background img 1"/></div>
          </div>


          <div class="container">
            <div class="section">

              {/* <!--   Icon Section   --> */}
              <div class="row">
                <div class="col s12 m4">
                  <div class="icon-block">
                    <h2 class="center brown-text"><i class="medium material-icons">folder</i></h2>
                    <h5 class="center">Organize</h5>

                    <p class="light">Input your personal library of records and keep this information in one place.</p>
                  </div>
                </div>

                <div class="col s12 m4">
                  <div class="icon-block">
                    <h2 class="center brown-text"><i class="medium material-icons">music_note</i></h2>
                    <h5 class="center">Browse</h5>

                    <p class="light">See what albums your friends have. See how your collection stacks up to others. Find records that you want to add to your collection.</p>
                  </div>
                </div>

                <div class="col s12 m4">
                  <div class="icon-block">
                    <h2 class="center brown-text"><i class="medium material-icons">playlist_add</i></h2>
                    <h5 class="center">Expand</h5>

                    <p class="light">Find a record that you want to someone else currently owns. Message other users and propose trades of albums to grow and refine your collection.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>


          <div class="parallax-container valign-wrapper">
            <div class="section no-pad-bot">
              <div class="container">
                <div class="row center">
                  <h5 class="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
                </div>
              </div>
            </div>
            <div class="parallax"><img src="./images/vinyl_wall.jpg" alt="Unsplashed background img 2"/></div>
          </div>

          <div class="container">
            <div class="section">

              <div class="row">
                <div class="col s12 center">
                  <h3><i class="mdi-content-send brown-text"></i></h3>
                  <h4>Contact Us</h4>
                  <p class="left-align light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida ultrices erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
                </div>
              </div>

            </div>
          </div>


          <div class="parallax-container valign-wrapper">
            <div class="section no-pad-bot">
              <div class="container">
                <div class="row center">
                  <h5 class="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
                </div>
              </div>
            </div>
            <div class="parallax"><img src="./images/vinyl_wall.jpg" alt="Unsplashed background img 3"/></div>
          </div>

          <footer class="page-footer teal">
            <div class="container">
              <div class="row">
                <div class="col l6 s12">
                  <h5 class="white-text">Company Bio</h5>
                  <p class="grey-text text-lighten-4">We are a team of college students working on this project like it's our full time job. Any amount would help support and continue development on this project and is greatly appreciated.</p>


                </div>
                <div class="col l3 s12">
                  <h5 class="white-text">Settings</h5>
                  <ul>
                    <li><a class="white-text" href="#!">Link 1</a></li>
                    <li><a class="white-text" href="#!">Link 2</a></li>
                    <li><a class="white-text" href="#!">Link 3</a></li>
                    <li><a class="white-text" href="#!">Link 4</a></li>
                  </ul>
                </div>
                <div class="col l3 s12">
                  <h5 class="white-text">Connect</h5>
                  <ul>
                    <li><a class="white-text" href="#!">Link 1</a></li>
                    <li><a class="white-text" href="#!">Link 2</a></li>
                    <li><a class="white-text" href="#!">Link 3</a></li>
                    <li><a class="white-text" href="#!">Link 4</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="footer-copyright">
              <div class="container">
              Made by <a class="brown-text text-lighten-3" href="https://fluffhead88.github.io/take-two/">Zachary Thigpen</a>
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
