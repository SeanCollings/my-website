import React from 'react';
import PropTypes from 'prop-types';

import Avatar from './avatar';
import LongMenu from './LongMenu';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
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

const menuList = [
  'Projects',
  'Profile',
  'Contact',
  'Login'
];

class Header extends React.Component {
  state = { mobileWidth: false };
  updateDimensions = this.updateDimensions.bind(this);

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions() {
    if (window.innerWidth < 520) {
      this.setState({ mobileWidth: true });
    } else {
      this.setState({ mobileWidth: false });
    }
  }

  mobileWidth() {
    return this.state.mobileWidth;
  }

  renderMenuItems() {
    return menuList.map(item => {
      return (
        <Button key={item} color="inherit" href={`/${item.toLowerCase()}`}>
          {item}
        </Button>)
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar
          position="static"
          style={{ background: this.props.colour ? this.props.colour : '' }}
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
              <Link href="/profile">
                <Avatar className={classes.grow} />
              </Link>
            </Typography>
            <Typography
              variant="h6"
              color="inherit"
              className={classes.grow}
              style={{ display: 'inline-block' }}

            >
              <Button color="inherit" href="/" disableRipple disableFocusRipple disableTouchRipple >
                Welcome
            </Button>
            </Typography>

            {this.mobileWidth() ? <LongMenu options={menuList} /> : this.renderMenuItems()}
          </Toolbar>
        </AppBar>
      </div>
    );
  }

}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
