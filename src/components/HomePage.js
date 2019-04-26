import React, { Component } from 'react';

// import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import Header from './Header';
// import Loader from './loaderCircular';
import Loader from './loaderLinear';
import Paper from './paper';

const styles = theme => ({
  margin: {
    marginTop: '30px'
  }
});

class HomePage extends Component {
  state = { loaded: false };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loaded: true });
    }, 1000);
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header headerName="Welcome" />
        <Loader loaded={this.state.loaded} />
        {/* <Button
          variant="contained"
          color="primary"
          href="/new-page"
          className={classes.margin}
        >
          New Page
        </Button> */}
        <Paper
          title="This is the Home Page"
          content="It is the page of the home"
        />
      </div>
    );
  }
}

export default withStyles(styles)(HomePage);
