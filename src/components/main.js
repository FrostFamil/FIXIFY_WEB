import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Login from './login';
import RegisterFixer from './registerFixer';
import RegisterUser from './registerUser';


const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route path="/login" component={Login} />
    <Route path="/registerFixer" component={RegisterFixer} />
    <Route path="/registerUser" component={RegisterUser} />
  </Switch>
)

export default Main;
