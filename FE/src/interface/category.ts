export interface Icategory {
  products: [];
  _id?: string;
  name: string;
}
export interface CategoryState {
  categorys: Icategory[];
  category?: Icategory;
  isLoading: boolean;
  error: string | null;
}
// get all
export interface CategoryListRequestAction {
  type: "CATEGORY_LIST_REQUEST";
}
export interface CategoryListSuccessAction {
  type: "CATEGORY_LIST_SUCCESS";
  payload: Icategory[];
}
export interface CategoryListFailAction {
  type: "CATEGORY_LIST_FAIL";
  payload: string;
}
//get one
export interface CategoryOneRequestAction {
  type: "CATEGORY_ONE_REQUEST";
}
export interface CategoryOneSuccessAction {
  type: "CATEGORY_ONE_SUCCESS";
  payload: Icategory;
}
export interface CategoryOneFailAction {
  type: "CATEGORY_ONE_FAIL";
  payload: string;
}
//add
export interface AddCategoryAction {
  type: "ADD_CATEGORY";
  payload: Icategory;
}

export interface UpdateCategorytAction {
  type: "UPDATE_CATEGORY";
  payload: Icategory;
}

export interface DeleteCategoryAction {
  type: "DELETE_CATEGORY";
  payload: string;
}

export type CategoryActionTypes =
  | CategoryListRequestAction
  | CategoryListSuccessAction
  | CategoryListFailAction
  | AddCategoryAction
  | UpdateCategorytAction
  | DeleteCategoryAction
  | DeleteCategoryAction
  | CategoryOneFailAction
  | CategoryOneSuccessAction
  | CategoryOneRequestAction;
