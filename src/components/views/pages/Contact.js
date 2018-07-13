import React, { Component } from 'react';
import { Typography, Grid, Input, InputLabel, FormControl } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
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
})


class Contact extends Component{
    render(){
        const { classes } = this.props;
        return(
            <div>
                <Grid item xs={12} sm={12} md={12} lg={12}></Grid>
            </div>
        )
    }
}

Contact.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Contact);