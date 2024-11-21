export const UPDATE_WINDOW_WIDTH = "UPDATE_WINDOW_WIDTH";

export interface WindowWidthActionType {
  type: typeof UPDATE_WINDOW_WIDTH;
  payload: number;
}

export const updateWindowWidth = (
  windowWidth: number
): WindowWidthActionType => ({
  type: UPDATE_WINDOW_WIDTH,
  payload: windowWidth,
});
