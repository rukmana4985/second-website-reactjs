import React from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import  Typography  from '@material-ui/core/Typography';
import { Hidden } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';


const styles = theme => ({
    root: {
      flexGrow: 1,
      width : '80%',
      marginLeft : '10%',
      marginTop: '5%',

    },
    card: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  });
  
 function LandingPage (props){
    const { classes } = props;

    // render(){
        return(
            <Grid item xs={12} md={12} sm={12}>
                <div className="banner">
                <Hidden only={['xs']}>
                    <div className="over-banner">
                            <Grid className="over-banner-content">
                                <Grid item lg={6} md={6} sm={10}>
                                    <Typography variant="display1" className="white-text uppercase">
                                        the best solution for tomorrow is doing your best today
                                    </Typography>
                                    <Typography variant="subheading" gutterBottom className="white-text camel-case">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consequat ut odio vel rutrum. Proin in tortor sapien. Suspendisse ac velit vitae magna fermentum gravida nec eu lorem. Sed et dui turpis.
                                    </Typography>

                                    <Button variant="extendedFab" aria-label="delete" className="orange btn-banner white-text">
                                        Get Start
                                    </Button>
                                    <Button variant="extendedFab" aria-label="delete" style={{marginLeft: '1%'}} className="white btn-banner orange-text">
                                        Read More
                                    </Button>
                                </Grid>
                                <Grid item lg={6} md={6}></Grid>
                            </Grid>
                        </div>
                    </Hidden>
                    <Hidden only={['md', 'lg', 'sm']}>
                        <div className="over-banner">
                            <Grid className="over-banner-content">
                                <Grid item xs={12}>
                                <Typography variant="headline" className="white-text uppercase">
                                    the best solution for tomorrow is doing your best today
                                </Typography>
                                <Typography variant="subheading" gutterBottom className="white-text camel-case">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consequat ut odio vel rutrum. Proin in tortor sapien. Suspendisse ac velit vitae magna fermentum gravida nec eu lorem. Sed et dui turpis.
                                </Typography>

                                <Button variant="extendedFab" aria-label="delete" className="orange btn-banner white-text">
                                    Get Start
                                </Button>
                                <Button variant="extendedFab" aria-label="delete" style={{marginLeft: '1%'}} className="white btn-banner orange-text">
                                    Read More
                                </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Hidden>
                </div>

                <div className={classes.root}>
                    <Grid container spacing={24}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Grid className="my-card pb50">
                            <div className="center">
                                <img src={require('./../../images/icons/learning.png')} alt="learn"/>
                                <Typography variant="subheading" className="bold uppercase">business study</Typography>
                                <Typography  gutterBottom style={{paddingLeft: '5%', paddingRight: '5%',}}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Nullam blandit eu augue ut hendrerit.  Donec imperdiet vestibulum egestas. 
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Grid className="my-card pb50">
                            <div className="center">
                                <img src={require('./../../images/icons/think.png')} alt="think"/>
                                <Typography variant="subheading" className="bold uppercase">business study</Typography>
                                <Typography  gutterBottom style={{paddingLeft: '5%', paddingRight: '5%',}}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Nullam blandit eu augue ut hendrerit.  Donec imperdiet vestibulum egestas. 
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Grid className="my-card pb50">
                            <div className="center">
                                <img src={require('./../../images/icons/corporate.png')} alt="corporate"/>
                                <Typography variant="subheading" className="bold uppercase">corporate</Typography>
                                <Typography  gutterBottom style={{paddingLeft: '5%', paddingRight: '5%',}}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Nullam blandit eu augue ut hendrerit.  Donec imperdiet vestibulum egestas. 
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>
                    
                        <Grid className="pb50 pt100" item xs={12} sm={12} md={6}>
                            <img style={{width:'100%'}} src={require('./../../images/icons/preview.png')} alt="left" className="pt100"/>
                        </Grid>
                        <Grid className="pt100 pb50" item xs={12} sm={12} md={6}>
                            <Hidden only='xs'>
                                <Typography variant="display1" className="uppercase bold pt100" style={{color:'#010101'}}>
                                a satisfied customer is the best business strategy of all.
                                </Typography>
                            </Hidden>
                            <Hidden only={['sm', 'md', 'lg']}>
                                <Typography  variant="headline" className="uppercase bold" style={{color:'#010101'}}>
                                    a satisfied customer is the best business strategy of all.
                                </Typography>
                            </Hidden>
                            <Typography  className="pt20">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit eu augue ut hendrerit. Donec imperdiet vestibulum egestas. Pellentesque ut eros finibus, gravida arcu non, facilisis ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque ultrices velit ante, non interdum nisi interdum vel.
                            </Typography>
                            <Typography className="pt20">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit eu augue ut hendrerit. Donec imperdiet vestibulum egestas. Pellentesque ut eros finibus, gravida arcu non, facilisis ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque ultrices velit ante, non interdum nisi interdum vel.
                            </Typography>
                            <Grid style={{marginTop: '3%',}}>
                                <Button variant="extendedFab" aria-label="delete" className="orange btn-banner white-text">
                                    Get Start
                                </Button>
                                <Button variant="extendedFab" aria-label="delete" style={{marginLeft: '1%'}} className="white btn-banner orange-text">
                                    Read More
                                </Button>
                            </Grid>
                        </Grid >

                        <Grid className="pt50 pb50 " item xs={12} sm={12} md={6}>
                            <Hidden only='xs' >
                                <Typography variant="display1" className="uppercase bold pt100" style={{color:'#010101'}}>
                                talent wins games, but teamwork and intelligence wins championships.
                                </Typography>
                            </Hidden>
                            <Hidden only={['sm', 'md', 'lg']}>
                                <Typography  variant="headline" className="uppercase bold pt100" style={{color:'#010101'}}>
                                    talent wins games, but teamwork and intelligence wins championships.
                                </Typography>
                            </Hidden>
                            <Typography  className="pt20">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit eu augue ut hendrerit. Donec imperdiet vestibulum egestas. Pellentesque ut eros finibus, gravida arcu non, facilisis ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque ultrices velit ante, non interdum nisi interdum vel.
                            </Typography>
                            <Typography className="pt20">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit eu augue ut hendrerit. Donec imperdiet vestibulum egestas. Pellentesque ut eros finibus, gravida arcu non, facilisis ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque ultrices velit ante, non interdum nisi interdum vel.
                            </Typography>
                            <Grid style={{marginTop: '3%',}}>
                                <Button variant="extendedFab" aria-label="delete" className="orange btn-banner white-text">
                                    Get Start
                                </Button>
                                <Button variant="extendedFab" aria-label="delete" style={{marginLeft: '1%'}} className="white btn-banner orange-text">
                                    Read More
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid className="pt50 pb50" item xs={12} sm={12} md={6}>
                            <img src={require('./../../images/team.jpg')} style={{width:'100%'}} alt="right" className="pt100"/>
                        </Grid>
                   </Grid>
                </div>
                <Grid className="pt50" item xs={12} sm={12} md={12}>
                    <div className="to-bottom-banner ">
                        <Grid item md={7} style={{marginLeft: '20%', marginRight: '20%',}}>
                            <div className={classes.root}>
                                <Grid container spacing={8} className="pt50"> 
                                    <div className="center">
                                        <Hidden only={['xs', 'sm']}>
                                            <Grid item md={12}>
                                                <Typography variant="display1" className="bold white-text">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                </Typography>
                                            </Grid>
                                        </Hidden>
                                        <Hidden only={['md', 'lg']}>
                                            <Grid item xs={12} sm={12}>
                                                <Typography variant="subheading" className="bold white-text">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                </Typography>
                                            </Grid>
                                        </Hidden>
                                        <Typography className="white-text" style={{fontWeight: 'lighter !important',}}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit eu augue ut hendrerit. Donec imperdiet vestibulum egestas. Pellentesque ut eros finibus, gravida arcu non, facilisis ante.
                                        </Typography>
                                        <Button variant="extendedFab" aria-label="delete"  className="white btn-banner orange-text" style={{marginTop:'5%'}}>
                                            Get Apps
                                        </Button>
                                    </div>
                                </Grid>
                            </div>
                        </Grid> 
                    </div>
                </Grid>
                <Grid className="pt50 pb50" item xs={8} sm={8} md={8} style={{marginLeft:'15%'}}>
                    <div className="subscribe-card pb50">
                        <div className={classes.root}>
                            <Grid container spacing={8}>
                                <Grid  item md={8} sm={12} xs={12} className="" style={{paddingRight:'30px'}}>
                                    <Typography variant="display1" style={{color:'rgba(0,0,0,.9)'}}>Get Ready To Start ?</Typography>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit eu augue ut hendrerit. Donec imperdiet vestibulum egestas.
                                    </Typography>
                                </Grid>
                                <Grid  item md={4} sm={12} xs={12} className="pt50 center">
                                    <Button variant="extendedFab" aria-label="delete" className="orange btn-banner white-text" style={{marginTop:'15%'}}>
                                        Get Start
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </Grid>
                
            </Grid>
            
        );
    }
    
// }

LandingPage.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(LandingPage);