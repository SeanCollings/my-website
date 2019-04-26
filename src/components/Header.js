import React from 'react';
import PropTypes from 'prop-types';

import Avatar from './avatar';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  background: '#2E3B55'
};

function Header(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{ background: props.colour ? props.colour : '' }}
      >
        <Toolbar>
          {/* <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton> */}
          {/* <Typography variant="h6" color="inherit" className={classes.grow}>
            <Link
              className="nav-link"
              to="/"
              style={{ textDecoration: 'none' }}
            >
              Home
            </Link>
          </Typography> */}
          <Typography style={{ display: 'inline-block' }} component={'span'}>
            <Avatar className={classes.grow} />
          </Typography>
          <Typography
            variant="h6"
            color="inherit"
            className={classes.grow}
            style={{ display: 'inline-block' }}
            disableRipple={true}
          >
            <Button color="inherit" href="/">
              Home
            </Button>
          </Typography>
          <Button color="inherit">Projects</Button>
          <Button color="inherit" href="/profile">
            Profile
          </Button>
          <Button color="inherit" href="/contact">
            Contact
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
