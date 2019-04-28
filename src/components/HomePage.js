import React, { Component } from 'react';

// import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import Header from './components/Header';
// import Loader from './loaderCircular';
import Loader from './components/loaderLinear';
import Paper from './components/paper';
import MediaCard from './components/MediaCard';

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
    // const { classes } = this.props;
    return (
      <div>
        <Header headerName="Welcome" />
        <Loader loaded={this.state.loaded} />
        <Paper
          title="My name is Sean Collings"
          content="Please, have a look around"
        />
        <MediaCard />
      </div>
    );
  }
}

export default withStyles(styles)(HomePage);
