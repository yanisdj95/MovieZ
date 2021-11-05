import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
  } from "react-router-dom";
const routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path ="/"></Route>
            </Switch>
        </Router>
    );
};

export default routes;