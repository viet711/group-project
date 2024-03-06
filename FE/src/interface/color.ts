export interface Icolor {
  _id?: string;
  name: string;
}
export interface ColorState {
  colors: Icolor[];
  color?: Icolor;
  isLoading: boolean;
  error: string | null;
}
// get all
export interface ColorListRequestAction {
  type: "COLOR_LIST_REQUEST";
}
export interface ColorListSuccessAction {
  type: "COLOR_LIST_SUCCESS";
  payload: Icolor[];
}
export interface ColorListFailAction {
  type: "COLOR_LIST_FAIL";
  payload: string;
}
//get one
export interface ColorOneRequestAction {
  type: "COLOR_ONE_REQUEST";
}
export interface ColorOneSuccessAction {
  type: "COLOR_ONE_SUCCESS";
  payload: Icolor;
}
export interface ColorOneFailAction {
  type: "COLOR_ONE_FAIL";
  payload: string;
}
//add
export interface AddColorAction {
  type: "ADD_COLOR";
  payload: Icolor;
}

export interface UpdateColortAction {
  type: "UPDATE_COLOR";
  payload: Icolor;
}

export interface DeleteColorAction {
  type: "DELETE_COLOR";
  payload: string;
}

export type ColorActionTypes =
  | ColorListRequestAction
  | ColorListSuccessAction
  | ColorListFailAction
  | AddColorAction
  | UpdateColortAction
  | DeleteColorAction
  | DeleteColorAction
  | ColorOneFailAction
  | ColorOneSuccessAction
  | ColorOneRequestAction;
