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
            <Redirect to="/" />
          </Switch>
      </Router>
    </div>
  );
};

export default Routes;
