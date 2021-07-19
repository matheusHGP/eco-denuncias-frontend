import { STORE_ID, TYPES } from "./types";
import store from "../../../store/index";

function dispatch(data) {
  data = { ...data, storeId: STORE_ID };
  store.dispatch(data);
}

export function setItem(value) {
  dispatch({
    type: TYPES.ITEM,
    value,
  });
}

export function setItems(value) {
  dispatch({
    type: TYPES.ITEMS,
    value,
  });
}

export function setCopy(value) {
  dispatch({
    type: TYPES.COPY,
    value,
  });
}

export function setInvalid(field) {
  dispatch({
    type: TYPES.INVALID_ITEM,
    field,
  });
}

export function cleanInvalid(field) {
  dispatch({
    type: TYPES.CLEAN_INVALID_ITEM,
    field,
  });
}

export function cleanRegister() {
  dispatch({
    type: TYPES.CLEAN_REGISTER,
  });
}

export function setActiveTab(value) {
  dispatch({
    type: TYPES.SET_ACTIVE_TAB,
    value,
  });
}
