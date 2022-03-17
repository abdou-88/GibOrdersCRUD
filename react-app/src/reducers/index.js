import { combineReducers } from "redux";

import {order} from "./order";
import { client } from "./client";


export const reducers = combineReducers({
    order,client
});