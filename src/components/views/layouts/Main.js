import React from 'react';
import { Switch, Route }  from 'react-router-dom';
import LandingPage from './../pages/LandingPage';
import AboutUs from './../pages/AboutUs';
import Blog from './../pages/Blog';
import Contact from './../pages/Contact';

 
 
 const Main = () => (
     <Switch>
         <Route exact path="/" component={ LandingPage } />
         <Route exact path="/landingpage" component={ LandingPage }/>
         <Route exact path="/aboutus" component={ AboutUs } />
         <Route exact path="/blog" component={ Blog } />
         <Route exact path="/contact" component={ Contact } />
     </Switch>
 )
 export default Main;
 
