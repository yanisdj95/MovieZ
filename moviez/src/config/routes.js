import React from 'react';
import Home from '../components/home';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import SingInForm from '../components/singInForm';
import LoginForm from '../components/loginForm';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path ="/" component={Home}/>
                <Route path="/signin" component={SingInForm}/>
                <Route path="/login" component={LoginForm}/>
            </Switch>
        </Router>
    );
};

export default Routes;