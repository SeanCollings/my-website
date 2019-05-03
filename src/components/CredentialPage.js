import React, { Component } from 'react';

import Header from './components/Header';
import SignIn from './components/SignIn';
import Footer from './components/footer';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  pageFill: {
    minHeight: '90vh',
    position: 'relative'
  }
});

class CredentialPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.pageFill}>
        <Header headerName="Home" colour="#3f51b5" />
        <div style={{ paddingBottom: '1px' }} />
        <SignIn />
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: '10vh' }}
        >
          <Typography style={{ marginTop: '10px' }}>
            Don't have an account?
          </Typography>
          <Button style={{ alignItems: 'center', color: '#FF4136' }}>
            Sign up instead
          </Button>
        </Grid>
        <Footer style={{ marginTop: '-125px' }} />
      </div>
    );
  }
}

export default withStyles(styles)(CredentialPage);
