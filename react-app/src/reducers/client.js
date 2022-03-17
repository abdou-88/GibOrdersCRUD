import { ACTION_TYPES } from "../actions/api";
const initialState = {
    list: []
}


export const client = (state = initialState, action) => {

    switch (action.type) {
      case ACTION_TYPES.CLIENT.FETCH_ALL:
        return {
          ...state,
          list: [...action.payload],
        };

      case ACTION_TYPES.CLIENT.CREATE:
        return {
          ...state,
          list: [...state.list, action.payload],
        };

      case ACTION_TYPES.CLIENT.UPDATE:
        return {
          ...state,
          list: state.list.map((x) =>
            x.id === action.payload.id ? action.payload : x
          ),
        };

      case ACTION_TYPES.CLIENT.DELETE:
        return {
          ...state,
          list: state.list.filter((x) => x.id !== action.payload),
        };

      default:
        return state;
    }
}