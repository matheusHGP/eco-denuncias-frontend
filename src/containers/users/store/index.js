import { STORE_ID, TYPES } from "./types";

const INITIAL_STATE = {
  item: {
    name: "",
    email: "",
    chapa: "",
    password: "",
  },
  invalid: {
    name: false,
    email: false,
    chapa: false,
    password: false,
  },
  items: [],
  tab: "Search",
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.storeId) {
    case STORE_ID:
      switch (action.type) {
        case TYPES.ITEMS:
          return { ...state, items: action.value };
        case TYPES.ITEM:
          return { ...state, item: action.value };
        case TYPES.INVALID_ITEM:
          return {
            ...state,
            invalid: { ...state.invalid, [action.field]: true },
          };
        case TYPES.CLEAN_INVALID_ITEM:
          return {
            ...state,
            invalid: { ...state.invalid, [action.field]: false },
          };
        case TYPES.COPY:
          return { ...state, copy: action.value };
        case TYPES.CLEAN_REGISTER:
          return {
            ...state,
            item: INITIAL_STATE.item,
            invalid: INITIAL_STATE.invalid,
          };
        case TYPES.SET_ACTIVE_TAB:
          return { ...state, tab: action.value };

        default:
          return { ...state };
      }
    default:
      return { ...state };
  }
}
