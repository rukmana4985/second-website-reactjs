import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Hidden, ListItem, ListItemText, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {TextField} from '@material-ui/core';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    color : 'black'
  },
  list: {
    width: 250,
  },
  margin: {
    margin: theme.spacing.unit,
  },
  cssLabel: {
    '&$cssFocused': {
      color: "rgb(249, 90, 61)",
    },
  },
  cssFocused: {},
  cssUnderline: {
      '&:after': {
      borderBottomColor: "rgb(249, 90, 61)",
      },
  },
});


class Header  extends Component{
  
    state = {
      "open" : false,
      "openDialog" : false,
    }

  
    handleClickOpen = () => {
      this.setState({ openDialog: true });
    };
  
    handleClose = () => {
      this.setState({ openDialog: false });
    };

    toggleDrawer = (side, open) => () => {
      this.setState({
        [side]: open,
      });
    };


  render(){
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          <ListItem>
            <ListItemText  ><Link to="/"  style={{textDecoration:'none', color:'black'}}>Home</Link></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText  ><Link to="/aboutus"  style={{textDecoration:'none', color:'black'}}>About Us</Link></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText  ><Link to="/blog"  style={{textDecoration:'none', color:'black'}}>Blog</Link></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText  ><Link to="/contact"  style={{textDecoration:'none', color:'black'}}>Contact</Link></ListItemText>
          </ListItem>
        </List>
        <Divider />
      </div>
    );


  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{backgroundColor: 'white',}}>
        <Toolbar>
          <IconButton className={classes.menuButton} style={{marginLeft: -12,marginRight: 20,color : 'black'}} color="inherit" aria-label="Menu" onClick={this.toggleDrawer('left', true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="title"  color="default" className={classes.flex}>
            Second Website
          </Typography>
          <Hidden only={['sm', 'xs']}>
            <Link to="/landingpage" style={{textDecoration:'none'}}>
              <Button color="default">Home</Button>
            </Link>
            <Link to="/aboutus" style={{textDecoration:'none'}}>
              <Button color="default">About Us</Button>
            </Link>
            <Link to="/blog" style={{textDecoration:'none'}}>
              <Button color="default">Blog</Button>
            </Link>
            {/* <Link to="/contact" style={{textDecoration:'none'}}> */}
              <Button color="default" onClick={this.handleClickOpen}>Contact</Button>
            {/* </Link> */}
          </Hidden>
        </Toolbar>


        <Dialog
          open={this.state.openDialog}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Contact Us</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consequat ut odio vel rutrum. Proin in tortor sapien. 
            </DialogContentText>
            <Grid item md={12}>
            {/* <FormControl > */}
                <TextField fullWidth
                classes={{
                    underline: classes.cssUnderline,
                }}
                autoFocus
                label="Name"
                type="text"
                />
                <TextField fullWidth
                classes={{
                    underline: classes.cssUnderline,
                }}
                autoFocus
                label="Email Address"
                type="email"
                id="custom-css-input"
                />
                <TextField fullWidth
                classes={{
                    underline: classes.cssUnderline,
                }}
                autoFocus
                label="Message"
                type="text"
                />
                  
              {/* </FormControl> */}
              </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose}  className="orange-text">
              Cancel
            </Button>
            <Button onClick={this.handleClose} className="orange-text">
              Submit
            </Button>
          </DialogActions>
        </Dialog>

        
      </AppBar>
      <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>
    </div>
  );
}
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
