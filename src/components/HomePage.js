import React, { Component } from 'react';

import Button from '@material-ui/core/Button';

import Header from './Header';

class HomePage extends Component {
  render() {
    return (
      <div className="container">
        <Header headerName="Welcome" />
        <Button variant="contained" color="primary" href="/new-page">
          {' '}
          New Page
        </Button>
      </div>
    );
  }
}

export default HomePage;
