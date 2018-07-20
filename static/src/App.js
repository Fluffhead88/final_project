import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import Home from './components/Home.js'



class App extends Component{
  constructor(props){
    super(props);


}

render(){
  return(
    <div>
      <Home/>
    </div>
  )
}
}

export default App;
