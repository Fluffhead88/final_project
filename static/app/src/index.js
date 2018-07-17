import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import BaseLayout from './BaseLayout';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
    <Switch>
      <Route exact path='/' component={App}/>
    </Switch>
    </BaseLayout>
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
