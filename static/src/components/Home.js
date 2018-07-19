import React, { Component } from 'react';

import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home container">
        <h1>Vinyl Collector</h1>
        <p>Explore and Expand your growing vinyl record collection</p>
      </div>
    );
  }
}
export default Home;
