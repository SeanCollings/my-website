import React, { Component } from 'react';

import Header from './components/Header';
import SignIn from './components/SignIn';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

class CredentialPage extends Component {
  render() {
    return (
      <div>
        <Header headerName="Home" colour="#3f51b5" />
        <SignIn />
        <Grid container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: '10vh' }}>
          <Typography  >
            Don't have an account?
          </Typography>
          <Button color="primary" style={{ alignItems: 'center' }}>Sign up instead</Button>
        </Grid>
      </div>
    );
  }
}

export default CredentialPage;
