import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import SingInForm from '../components/singInForm';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path ="/">
                    <SingInForm></SingInForm>
                </Route>
            </Switch>
        </Router>
    );
};

export default Routes;