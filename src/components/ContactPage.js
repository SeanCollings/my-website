import React, { Component } from 'react';

// import Button from '@material-ui/core/Button';

import Header from './components/Header';
import Paper from './components/paper';

class ContactsPage extends Component {
  render() {
    return (
      <div>
        <Header headerName="Home" colour="#120533" />
        <Paper title="Contact Me" content="I am a contactable individual" />
      </div>
    );
  }
}

export default ContactsPage;
