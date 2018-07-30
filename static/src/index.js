import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'materialize-css/dist/css/materialize.min.css';
import 'jquery/dist/jquery.min.js';
import 'materialize-css/dist/js/materialize.min.js';
import {Router, Route, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import BaseLayout from './BaseLayout';
import Home from './components/Home';
import Collections from './components/Collections'
import MyCollection from './components/MyCollection'

const history = createBrowserHistory()

ReactDOM.render(
  <Router history={history}>
    <BaseLayout history={history}>
      <Switch>
        <Route path='/mycollection' component={MyCollection}/>
        <Route path='/collections' component={Collections}/>
        <Route path='/home' component={Home}/>
        <Route exact path='/' component={App}/>
      </Switch>
    </BaseLayout>
  </Router>, document.getElementById('root'));
registerServiceWorker();
