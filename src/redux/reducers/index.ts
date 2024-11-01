import { combineReducers } from "redux";
import scrollReducer from "./scrollReducer";

export type RootState = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({ scrollY: scrollReducer });
