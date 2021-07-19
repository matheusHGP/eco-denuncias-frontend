import { STORE_ID, TYPES } from "./types";

const INITIAL_STATE = {
  login: {
    email: "",
    password: "",
    saveCredentials: false,
  },
  invalidLogin: {
    email: false,
    password: false,
  },
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.storeId) {
    case STORE_ID:
      switch (action.type) {
        case TYPES.LOGIN:
          return {
            ...state,
            login: { ...state.login, [action.field]: action.value },
          };
        case TYPES.INVALID_LOGIN:
          return {
            ...state,
            invalidLogin: { ...state.invalidLogin, [action.field]: true },
          };
        case TYPES.CLEAN_INVALID_LOGIN:
          return {
            ...state,
            invalidLogin: { ...state.invalidLogin, [action.field]: false },
          };
        case TYPES.CLEAN_ALL:
          return INITIAL_STATE;
        default:
          return { ...state };
      }
    default:
      return { ...state };
  }
}
