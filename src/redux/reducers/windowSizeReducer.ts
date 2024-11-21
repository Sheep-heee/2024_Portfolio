import {
  UPDATE_WINDOW_WIDTH,
  WindowWidthActionType,
} from "../actions/windowSizeAction";

let initialState = {
  windowWidth: 0,
};

const windowSizeReducer = (
  state = initialState,
  action: WindowWidthActionType
) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_WINDOW_WIDTH:
      return { ...state, windowWidth: payload };
    default:
      return state;
  }
};

export default windowSizeReducer;
