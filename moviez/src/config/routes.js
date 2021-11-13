import React from 'react';
import Home from '../components/home';
import Accueil from '../components/accueil';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import SingInForm from '../components/singInForm';
import LoginForm from '../components/loginForm';
import GlobalStyle from './globalStyle';
const Routes = () => {
    return (
        <Router>
        <GlobalStyle/>
            <Switch>
                <Route exact path ="/" component={Accueil}/>
                <Route path="/signin" component={SingInForm}/>
                <Route path="/login" component={LoginForm}/>
            </Switch>   
        </Router>
    );
};

export default Routes;