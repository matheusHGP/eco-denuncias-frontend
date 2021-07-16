import React from "react";
import history from "./util/history";
import { Redirect, Route, Switch, Router } from "react-router-dom";
import { isAuthenticated } from "./util/auth";

import Login from "./containers/login";
import CustomContainer from "./components/Container";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <>
          <CustomContainer />
        </>
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);

const App = () => {
  return (
    <>
      <Router history={history}>
        <Switch>
          <Route exact path="/login" component={Login} />
          <PrivateRoute />
          <Redirect exact from="/" to="/home" />
        </Switch>
      </Router>
    </>
  );
};

export default App;
