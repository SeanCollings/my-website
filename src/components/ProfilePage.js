import React, { Component } from 'react';

import Button from '@material-ui/core/Button';

import Header from './Header';

class ProfilePage extends Component {
  render() {
    return (
      <div>
        <Header headerName="My Profile" />
        <Button variant="contained" color="primary" href="/home">
          {' '}
          Home
        </Button>
      </div>
    );
  }
}

export default ProfilePage;
