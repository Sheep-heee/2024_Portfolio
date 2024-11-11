import { combineReducers } from "redux";
import scrollReducer from "./scrollReducer";
import filpReducer from "./filpReducer";

export type RootState = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
  scrollY: scrollReducer,
  filpOpen: filpReducer,
});
