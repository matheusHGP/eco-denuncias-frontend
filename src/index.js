import React from "react";
import Notifications from "react-notify-toast";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Provider store={store}>
    <>
      <App />
      <Notifications />
    </>
  </Provider>,
  document.getElementById("root")
);
