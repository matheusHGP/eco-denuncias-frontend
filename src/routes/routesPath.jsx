import React from "react";
import { Route } from "react-router-dom";
import routes from "./routes.js";

class RoutesPath extends React.Component {
  getRoutes = (routes) => {
    return routes.map((prop) => {
      return <Route exact path={prop.path} component={prop.component} />;
    });
  };

  render() {
    return <>{this.getRoutes(routes)}</>;
  }
}

export default RoutesPath;
