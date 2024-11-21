import { combineReducers } from "redux";
import scrollReducer from "./scrollReducer";
import filpReducer from "./filpReducer";
import windowSizeReducer from "./windowSizeReducer";

export type RootState = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
  scrollY: scrollReducer,
  filpOpen: filpReducer,
  windowWidth: windowSizeReducer,
});
