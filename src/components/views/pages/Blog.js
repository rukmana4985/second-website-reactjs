import React, { Component } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Grid, CardMedia, CardActions, Button } from '@material-ui/core';
import withStyles from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const root = {
    flexGrow: 1,
    width : '80%',
    marginLeft : '10%',
    marginTop: '5%',
}

const card = theme => ({
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
});





export default class Blog extends Component
{


    
    state = {
        persons : [],
        images : []
    }

    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/posts?_start=9&_limit=9')
            .then(res => {
                const persons = res.data;
                this.setState({persons});
            });
            axios.get('https://jsonplaceholder.typicode.com/photos?_start=9&_limit=9')
            .then(res => {
                const images = res.data;
                this.setState({images});
            });
    }



    
    
    render(){
        return(
            <div>
                <div className="blog-banner">
                    <div className="about-over-banner">
                        <div className="center">
                            <Typography variant="display2" className="white-text  bold">Blogs</Typography>
                            <Typography variant="subheading" className="white-text">Lorem ipsum dolor sit amet, sadipscing temporibus his at</Typography>
                        </div>
                    </div>
                </div>
                <Grid style={{width:'70%', marginLeft:'15%', marginRight:'15%', marginTop:'5%'}}>
                    <Typography variant="display1" style={{color:'rgba(0,0,0,.8)'}}>Blog for developers</Typography>
                    <br/>
                    <Grid container spacing={24} className="pb50">
                        {this.state.persons.map(person =>
                        <Grid item md={4} sm={12} xs={12}>
                            <Card className={card}>
                            {/* {this.state.images.map(image => */}
                            <CardMedia
                                style={{ height: 0,paddingTop: '56.25%'}}
                                image="https://assets.materialup.com/uploads/d7431d8a-e9fc-4b24-8adf-16450dac6978/preview.png"
                                title="Contemplative Reptile"
                                />
                            {/* )} */}
                                <CardContent>
                                    <Typography gutterBottom variant="headline" component="h2">
                                        {person.title}
                                    </Typography>   
                                    <Typography component="p">
                                        {person.body}
                                    </Typography>

                                </CardContent>
                                <CardActions>
                                    <Button size="small" className="orange-text">
                                        Read More
                                    </Button>
                                </CardActions>

                            </Card>
                        </Grid>
                        )}
                    </Grid>
                </Grid>   
            </div>
        );
    }
}