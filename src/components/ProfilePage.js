import React, { Component } from 'react';

// import Button from '@material-ui/core/Button';

import Header from './components/Header';
import Paper from './components/paper';

class ProfilePage extends Component {
  render() {
    return (
      <div>
        <Header headerName="Home" colour="#996a0d" />
        {/* <Button variant="contained" color="primary" href="/home">
          {' '}
          Home
        </Button> */}
        <Paper
          title="This is the Profile Page"
          content="Have a look at my profile"
        />
      </div>
    );
  }
}

export default ProfilePage;
