import { combineReducers } from "redux";
import login from "../../containers/login/store";
import users from "../../containers/users/store";
import occurrences from "../../containers/reports/store";

export default combineReducers({
  login,
  users,
  occurrences,
});
