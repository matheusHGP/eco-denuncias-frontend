import { STORE_ID, TYPES } from "./types";
import store from "../../../store/index";

function dispatch(data) {
  data = { ...data, storeId: STORE_ID };
  store.dispatch(data);
}

export function login(field, value) {
  dispatch({
    type: TYPES.LOGIN,
    field,
    value,
  });
}

export function invalidLogin(field) {
  dispatch({
    type: TYPES.INVALID_LOGIN,
    field,
  });
}

export function cleanInvalidLogin(field) {
  dispatch({
    type: TYPES.CLEAN_INVALID_LOGIN,
    field,
  });
}

export function cleanAll() {
  dispatch({
    type: TYPES.CLEAN_ALL,
  });
}
