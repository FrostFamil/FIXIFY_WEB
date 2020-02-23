import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Profile from './profile';
import Requests from './requests';
import Login from './login';
import RegisterFixer from './registerFixer';
import RegisterUser from './registerUser';


const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path={`/profile/${window.$token}`} component={Profile} />
    <Route path={`/requests/${window.$token}`} component={Requests} />
    <Route path="/login" component={Login} />
    <Route path="/registerFixer" component={RegisterFixer} />
    <Route path="/registerUser" component={RegisterUser} />
  </Switch>
)

export default Main;
