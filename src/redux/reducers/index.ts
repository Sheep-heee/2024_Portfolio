import { combineReducers } from "redux";
import scrollReducer from "./scrollReducer";

export default combineReducers({ scrollY: scrollReducer });
