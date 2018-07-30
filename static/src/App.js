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
      <Home history={this.props.history}/>
    </div>
  )
}
}

export default App;
