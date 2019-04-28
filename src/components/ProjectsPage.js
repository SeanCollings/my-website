import React, { Component } from 'react';

// import Button from '@material-ui/core/Button';

import Header from './components/Header';
import Paper from './components/paper';

class ProjectsPage extends Component {
  render() {
    return (
      <div>
        <Header headerName="Home" colour="#33aec6" />
        <Paper title="Projects Page" content="These are some of the projects I have worked on:" />
      </div>
    );
  }
}

export default ProjectsPage;
