import { UPDATE_FILP_OPEN, FilpActionType } from "../actions/cardOpenAction";

let initialState = {
  filpOpen: false,
};

const filpReducer = (state = initialState, action: FilpActionType) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_FILP_OPEN:
      return { ...state, filpOpen: payload };
    default:
      return state;
  }
};

export default filpReducer;
