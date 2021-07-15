import jwtDecode from "jwt-decode";
import { Redirect } from "react-router";
import Login from "../containers/login";

export const isAuthenticated = () => {
  const token = localStorage.getItem("TOKEN_KEY");

  if (token) {
    if (token === "") {
      <Redirect to="/login" component={Login} />;
    } else {
      var decodedToken = jwtDecode(token, { complete: true });

      var isExpired = false;
      var date = new Date();
      var dateNow = parseInt(date.getTime() / 1000);

      if (decodedToken.exp > dateNow) {
        isExpired = true;
        return isExpired;
      } else {
        return isExpired;
      }
    }
  } else {
    <Redirect to="/login" component={Login} />;
  }
};
