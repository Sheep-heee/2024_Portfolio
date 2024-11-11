export const UPDATE_FILP_OPEN = "UPDATE_FILP_OPEN";

export interface FilpActionType {
  type: typeof UPDATE_FILP_OPEN;
  payload: boolean;
}

export const updateFilp = (filp: boolean): FilpActionType => ({
  type: UPDATE_FILP_OPEN,
  payload: filp,
});
