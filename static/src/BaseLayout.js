import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function BaseLayout(props){
  // console.log('base layout', props)
  return(
    <div>
      <Header history={props.history}/>
      {props.children}
      <Footer/>
    </div>
  );
}

export default BaseLayout;
