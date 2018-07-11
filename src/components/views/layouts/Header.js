import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Hidden } from '@material-ui/core';
import { Link } from 'react-router-dom';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function Header(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: 'white',}}>
        <Toolbar>
          <Typography variant="title" style={{paddingLeft: '6.5%',}} color="default" className={classes.flex}>
            Second Website
          </Typography>
          <Hidden only={['sm', 'xs']}>
            <Link to="/landingpage" style={{textDecoration:'none'}}>
              <Button color="default">Home</Button>
            </Link>
            <Link to="/aboutus" style={{textDecoration:'none'}}>
              <Button color="default">About Us</Button>
            </Link>
            <Link to="/contact" style={{textDecoration:'none'}}>
              <Button color="default">Contact</Button>
            </Link>
            <Link to="/blog" style={{textDecoration:'none'}}>
              <Button color="default">Blog</Button>
            </Link>
            <Button color="default">Sign up</Button>
            <Button color="default">Login</Button>
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
