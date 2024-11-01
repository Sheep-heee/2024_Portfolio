export const UPDATE_SCROLL_Y = "UPDATE_SCROLL_Y";

export interface ScrollYActionType {
  type: typeof UPDATE_SCROLL_Y;
  payload: number;
}

export const updateScrollY = (scrollY: number): ScrollYActionType => ({
  type: UPDATE_SCROLL_Y,
  payload: scrollY,
});
