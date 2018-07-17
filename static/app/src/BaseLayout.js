
import React from 'react';
import Header from './components/Header';

function BaseLayout(props){
  return(
    <div>
      <Header/>
      {props.children}
    </div>
  );
}

export default BaseLayout;
