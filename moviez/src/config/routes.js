<<<<<<< HEAD
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import React from "react";
import Home from "../screens/home";
import Login from "../screens/login";
import Register from "../screens/register";
import Shop from "../screens/shop";
import Details from "../components/movieDetail/details";

const Routes = () => {
  return (
    <div>
      <Router>
          {" "}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/shop" component={Shop}/>            
            <Route exact path="/details/:id" component={Details}/>            
            <Redirect to="/" />
          </Switch>
      </Router>
    </div>
  );
=======
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
>>>>>>> 08d83a94deacca872eff282868669001054f141b
};

export default Routes;
