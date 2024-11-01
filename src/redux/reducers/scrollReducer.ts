import {
  UPDATE_SCROLL_Y,
  ScrollYActionType,
} from "../actions/scrollValueAction";

let initialState = {
  scrollY: 0,
};

const scrollReducer = (state = initialState, action: ScrollYActionType) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_SCROLL_Y:
      return { ...state, scrollY: payload };
    default:
      return state;
  }
};

export default scrollReducer;
