export interface Isize {
  _id?: string;
  name: string;
}
export interface SizeState {
  sizes: Isize[];
  size?: Isize;
  isLoading: boolean;
  error: string | null;
}
// get all
export interface SizeListRequestAction {
  type: "SIZE_LIST_REQUEST";
}
export interface SizeListSuccessAction {
  type: "SIZE_LIST_SUCCESS";
  payload: Isize[];
}
export interface SizeListFailAction {
  type: "SIZE_LIST_FAIL";
  payload: string;
}
//get one
export interface SizeOneRequestAction {
  type: "SIZE_ONE_REQUEST";
}
export interface SizeOneSuccessAction {
  type: "SIZE_ONE_SUCCESS";
  payload: Isize;
}
export interface SizeOneFailAction {
  type: "SIZE_ONE_FAIL";
  payload: string;
}
//add
export interface AddSizeAction {
  type: "ADD_SIZE";
  payload: Isize;
}

export interface UpdateSizetAction {
  type: "UPDATE_SIZE";
  payload: Isize;
}

export interface DeleteSizeAction {
  type: "DELETE_SIZE";
  payload: string;
}

export type SizeActionTypes =
  | SizeListRequestAction
  | SizeListSuccessAction
  | SizeListFailAction
  | AddSizeAction
  | UpdateSizetAction
  | DeleteSizeAction
  | DeleteSizeAction
  | SizeOneFailAction
  | SizeOneSuccessAction
  | SizeOneRequestAction;
