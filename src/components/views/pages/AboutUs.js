import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Grid, Button, Card, CardMedia, CardContent } from '@material-ui/core';
import PropTypes from 'prop-types';


const style = theme => ({
  root: {
    flexGrow: 1,
    width : '80%',
    marginLeft : '10%',
    marginTop: '5%',
  },


  root_card : {
    flexGrow: 1,
    width : '70%',
    marginLeft : '20%',
  },

  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
      color: theme.palette.text.secondary,
  },
  image : {
    width : '100%'
  },
  card: {
    maxWidth: 345,
    marginTop : '5%',
    boxShadow : '0px 2px 40px 0px rgba(198, 198, 198, 0.7)'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },

});

function AboutUs (props){
  const { classes } = props;

  // render() {
    return (
      <div>
        <div className="about-banner">
          <div className="about-over-banner">
            <div className="center">
              <Typography variant="display1" className="white-text bold">Make the codes into worship</Typography>
              <Typography variant="subheading" className="white-text">Lorem ipsum dolor sit amet, sadipscing temporibus his at</Typography>
            </div>
          </div>
        </div>
        <div className={classes.root} >
          <Grid container spacing={8} className="pb50">
              <Grid item md={6} sm={12} xs={12}>
                <div className="center">
                  <img src={require('./../../images/reaching-team.png')} className={classes.image} alt=""/>
                </div>
              </Grid>
              <Grid item md={6} sm={12} xs={12}>
                  {/* <div className="center"> */}
                    <Typography variant="display1" className="bold uppercase" style={{color:'black',paddingLeft: '5%', paddingRight: '5%',}}>Who We Are ?</Typography>
                    <Typography className="pt20"  gutterBottom style={{paddingLeft: '5%', paddingRight: '5%',}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit eu augue ut hendrerit. Donec imperdiet vestibulum egestas. Pellentesque ut eros finibus, gravida arcu non, facilisis ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque ultrices velit ante, non interdum nisi interdum vels. 
                    </Typography>
                    <Typography className="pt20"  gutterBottom style={{paddingLeft: '5%', paddingRight: '5%',}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit eu augue ut hendrerit. Donec imperdiet vestibulum egestas. Pellentesque ut eros finibus, gravida arcu non, facilisis ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque ultrices velit ante, non interdum nisi interdum vels. 
                    </Typography>
                  {/* </div> */}
              </Grid>
          </Grid>
        </div>
        <div className="grey pt50 pb50">
          <div  className={classes.root_card}>
              <Grid container spacing={8}>
                  <Grid item md={6} sm={12} xs={12}>
                      <Card className={classes.card}>
                          <CardMedia
                            className={classes.media}
                            image="https://cdn.scotch.io/3646/0jaBd12LSNKJjlQNaWXb_1478124608-elefanto_wallpaper.png.jpg"
                            title="Projects"                
                          />
                           <CardContent>
                              <Typography gutterBottom variant="headline" component="h2">
                                PHP Projects
                              </Typography>
                              <Typography component="p">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit eu augue ut hendrerit.
                              </Typography>
                            </CardContent>
                      </Card>
                  </Grid>
                  <Grid item md={6} sm={12} xs={12}>
                      <Card className={classes.card}>
                          <CardMedia
                            className={classes.media}
                            image="https://careerfoundry.com/en/blog/difference-between-ux-ui-ux-ui-min-6cd3a171087987d31ecdb67ad67c0ab8136242f7b4e476a0e509017aa8bbc755.png"
                            title="Projects"                
                          />
                           <CardContent>
                              <Typography gutterBottom variant="headline" component="h2">
                                UI / UX Projects
                              </Typography>
                              <Typography component="p">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit eu augue ut hendrerit.
                              </Typography>
                            </CardContent>
                      </Card>
                  </Grid>
                  <Grid item md={6} sm={12} xs={12}>
                      <Card className={classes.card}>
                          <CardMedia
                            className={classes.media}
                            image="http://www.appadhoc.com/blog/wp-content/uploads/2017/07/onboarding-experience.png"
                            title="Projects"                
                          />
                           <CardContent>
                              <Typography gutterBottom variant="headline" component="h2">
                                Mobile Projects
                              </Typography>
                              <Typography component="p">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit eu augue ut hendrerit.
                              </Typography>
                            </CardContent>
                      </Card>
                  </Grid>
                  <Grid item md={6} sm={12} xs={12}>
                      <Card className={classes.card}>
                          <CardMedia
                            className={classes.media}
                            image="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png"
                            title="Projects"                
                          />
                           <CardContent>
                              <Typography gutterBottom variant="headline" component="h2">
                                React JS Projects
                              </Typography>
                              <Typography component="p">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit eu augue ut hendrerit.
                              </Typography>
                            </CardContent>
                      </Card>
                  </Grid>
                  
              </Grid>
            </div>
        </div>
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
                        <Grid  item md={4} sm={12} xs={12} className="pt20 center">
                            <Button variant="extendedFab" aria-label="delete" className="orange btn-banner white-text">
                                 join us
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </Grid>
      </div>
    );
  // }
}

AboutUs.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(style)(AboutUs);
