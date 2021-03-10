import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// Import Global Store
import {LoginContextContainer} from './store/login/LoginContextContainer';
// Import Navigation
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const app = (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(
  <React.StrictMode>
    <LoginContextContainer>
    {app}
    </LoginContextContainer>
  </React.StrictMode>,
  document.getElementById('root')
);
