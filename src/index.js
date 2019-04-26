import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import HomePage from './components/HomePage';
import ContactPage from './components/ContactPage';
import ProfilePage from './components/ProfilePage';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/profile" render={props => <ProfilePage {...props} />} />
      <Route path="/contact" render={props => <ContactPage {...props} />} />
      <Route path="/home" render={props => <HomePage {...props} />} />
      <Redirect from="/" to="/home" />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
