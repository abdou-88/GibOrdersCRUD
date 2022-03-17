import { ACTION_TYPES } from "../actions/api";
const initialState = {
    list: []
}


export const order = (state = initialState, action) => {

    switch (action.type) {
        case ACTION_TYPES.ORDER.FETCH_ALL:
            return {
                ...state,
                list: [...action.payload]
            }

        case ACTION_TYPES.ORDER.CREATE:
            return {
                ...state,
                list: [...state.list, action.payload]
            }

        case ACTION_TYPES.ORDER.UPDATE:
            return {
                ...state,
                list: state.list.map(x => x.id === action.payload.id ? action.payload : x)
            }

        case ACTION_TYPES.ORDER.DELETE:
            return {
                ...state,
                list: state.list.filter(x => x.id !== action.payload)
            }
            
        default:
            return state
    }
}