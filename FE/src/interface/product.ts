export interface Iproduct {
  _id?: number | string;
  name: string;
  price: number;
  priceSale?: number;
  featured?: boolean;
  image: Array<string>;
  description: string;
  description_short?: string;
  hot_sale?: number;
  quantity?: number;
  categoryId: {
    _id?: string;
    name?: string;
  };
  inventoryStatus?: string;
  rating?: number;
  colorSizes: Array<Colors>;
  totalComments?: number;
}
interface Colors {
  color: string;
  sizes: Array<Sizes>;
}
interface Sizes {
  size: string;
  quantity: number;
}
export interface ProductState {
  products: Iproduct[];
  productSearch: Iproduct[];
  product?: Iproduct;
  isLoading: boolean;
  loadingHeader: boolean;
  error: null | string;
}
// get all
export interface ProductListRequestAction {
  type: "PRODUCT_LIST_REQUEST";
}
export interface ProductListSuccessAction {
  type: "PRODUCT_LIST_SUCCESS";
  payload: Iproduct[];
}
export interface ProductListFailAction {
  type: "PRODUCT_LIST_FAIL";
  payload: string;
}
// get search
export interface ProductSearchListRequestAction {
  type: "PRODUCT_SEARCH_LIST_REQUEST";
}
export interface ProductSearchListSuccessAction {
  type: "PRODUCT_SEARCH_LIST_SUCCESS";
  payload: Iproduct[];
}
export interface ResetProductSearchAction {
  type: "RESET_PRODUCT_SEARCH";
  payload: Iproduct[];
}
export interface SetLoadingAction {
  type: "SET_LOADING";
  payload: boolean;
}
export interface ProductSearchListFailAction {
  type: "PRODUCT_SEARCH_LIST_FAIL";
  payload: string;
}

//get one
export interface ProductOneRequestAction {
  type: "PRODUCT_ONE_REQUEST";
}
export interface ProductOneSuccessAction {
  type: "PRODUCT_ONE_SUCCESS";
  payload: Iproduct;
}
export interface ProductOneFailAction {
  type: "PRODUCT_ONE_FAIL";
  payload: string;
}
//add
export interface AddProductAction {
  type: "ADD_PRODUCT";
  payload: Iproduct;
}

export interface UpdateProductAction {
  type: "UPDATE_PRODUCT";
  payload: Iproduct;
}

export interface DeleteProductAction {
  type: "DELETE_PRODUCT";
  payload: string;
}

export type ProductActionTypes =
  | AddProductAction
  | UpdateProductAction
  | DeleteProductAction
  | ProductListRequestAction
  | ProductListSuccessAction
  | ProductListFailAction
  | ProductOneFailAction
  | ProductOneSuccessAction
  | ProductOneRequestAction
  | ProductSearchListRequestAction
  | ProductSearchListSuccessAction
  | ProductSearchListFailAction
  | ResetProductSearchAction
  | SetLoadingAction;
