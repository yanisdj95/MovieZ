import React from 'react';
import Accueil from '../components/accueil';
import Shop from '../screens/shop';
import Fav from '../components/favory';
import Panier from '../components/panier';
import Details from '../components/movieDetail/details';
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
                <Route path="/panier" component={Panier}/>
                <Route path="/shop" component={Shop}/>
                <Route path="/fav" component={Fav}/>
                <Route exact path="/details/:id" component={Details}/>
            </Switch>   
        </Router>
    );
};

export default Routes;