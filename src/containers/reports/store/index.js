import { STORE_ID, TYPES } from "./types";

const INITIAL_STATE = {
  item: {
    name: "",
    email: "",
    chapa: "",
    password: "",
  },
  items: [],
  tab: "Search",
};

export default function occurrences(state = INITIAL_STATE, action) {
  switch (action.storeId) {
    case STORE_ID:
      switch (action.type) {
        case TYPES.ITEMS:
          return { ...state, items: action.value };
        case TYPES.ITEM:
          return { ...state, item: action.value };
        case TYPES.CLEAN:
          return {
            ...state,
            item: INITIAL_STATE.item,
          };

        default:
          return { ...state };
      }
    default:
      return { ...state };
  }
}
