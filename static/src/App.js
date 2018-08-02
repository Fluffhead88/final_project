import React, { Component } from 'react';
import './App.css';
import Home from './components/Home.js'



class App extends Component{
  constructor(props){
    super(props);
}

render(){
  return(
    <div>
      {/* access to history for redirect on log in */}
      <Home history={this.props.history}/>
    </div>
  )
}
}

export default App;
