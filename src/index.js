import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import HomePage from './components/HomePage';
import NewPage from './components/NewPage';
import ProfilePage from './components/ProfilePage';

ReactDOM.render(
  <div>
    <BrowserRouter>
      <Switch>
        <Route path="/profile" render={props => <ProfilePage {...props} />} />
        <Route path="/new-page" render={props => <NewPage {...props} />} />
        <Route path="/home" render={props => <HomePage {...props} />} />
        <Redirect from="/" to="/home" />
      </Switch>
    </BrowserRouter>
  </div>,
  document.getElementById('root')
);
