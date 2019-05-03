import React, { Component } from 'react';

// import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import Header from './components/Header';
import Paper from './components/paper';
import Footer from './components/footer';

const styles = theme => ({
  pageFill: {
    minHeight: '99vh',
    position: 'relative'
  }
});

class ProjectsPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.pageFill}>
        <Header headerName="Home" colour="#33aec6" />
        <Paper
          title="Projects Page"
          content="These are some of the projects I have worked on:"
        />
        <Footer />
      </div>
    );
  }
}

export default withStyles(styles)(ProjectsPage);
