import React, { Component } from 'react';

import Button from '@material-ui/core/Button';

import Header from './Header';

class NewPage extends Component {
  render() {
    return (
      <div>
        <Header headerName="New Page" />
        <Button variant="contained" color="primary" href="/home">
          {' '}
          Home Page
        </Button>
      </div>
    );
  }
}

export default NewPage;
