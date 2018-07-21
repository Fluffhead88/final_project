import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import 'jquery/dist/jquery.min.js';

 
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import BaseLayout from './BaseLayout';
import Home from './components/Home';
import Collections from './components/Collections'
import MyCollection from './components/MyCollection'

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
    <Switch>
      <Route exact path='/mycollection' component={MyCollection}/>
      <Route exact path='/collections' component={Collections}/>
      <Route exact path='/home' component={Home}/>
      <Route exact path='/' component={App}/>
    </Switch>
    </BaseLayout>
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
