import React, { Component } from 'react';

// import Button from '@material-ui/core/Button';

import Header from './Header';
import Paper from './paper';

class NewPage extends Component {
  render() {
    return (
      <div>
        <Header headerName="Home" />
        <Paper title="Contact Me" content="I am a contactable individual" />
      </div>
    );
  }
}

export default NewPage;
