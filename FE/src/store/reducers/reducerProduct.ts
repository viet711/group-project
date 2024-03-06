// productReducer.ts
import { Reducer } from "redux";
import { ProductActionTypes, ProductState } from "../../interface/product";
const initialState: ProductState = {
  products: [],
  productSearch: [],
  isLoading: false,
  loadingHeader: false,
  error: null,
};

const productReducer: Reducer<ProductState, ProductActionTypes> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "PRODUCT_LIST_REQUEST":
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case "PRODUCT_LIST_SUCCESS":
      return {
        ...state,
        isLoading: false,
        products: action.payload,
      };
    case "PRODUCT_LIST_FAIL":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "PRODUCT_SEARCH_LIST_REQUEST":
      return {
        ...state,
        error: null,
      };
    case "PRODUCT_SEARCH_LIST_SUCCESS":
      return {
        ...state,
        isLoading: false,
        productSearch: action.payload,
      };
    case "RESET_PRODUCT_SEARCH":
      return {
        ...state,
        productSearch: action.payload,
      };
    case "SET_LOADING":
      return {
        ...state,
        loadingHeader: action.payload,
      }
    case "PRODUCT_SEARCH_LIST_FAIL":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "PRODUCT_ONE_REQUEST":
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case "PRODUCT_ONE_SUCCESS":
      return {
        ...state,
        isLoading: false,
        product: action.payload,

      };
    case "PRODUCT_ONE_FAIL":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "ADD_PRODUCT":
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case "UPDATE_PRODUCT":
      return {
        ...state,
        products: state.products.map((product) =>
          product._id === action.payload._id ? action.payload : product
        ),
      };
    case "DELETE_PRODUCT":
      return {
        ...state,
        products: state.products.filter(
          (product) => product._id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default productReducer;
