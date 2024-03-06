// productReducer.ts
import { Reducer } from "redux";
import { CartState, CartActionTypes } from "../../interface/cart";
const initialState: CartState = {
  carts: [],
  isLoading: false,
  error: null,
};

const cartReducer: Reducer<CartState, CartActionTypes> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "CART_LIST_REQUEST":
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case "CART_LIST_SUCCESS":
      return {
        ...state,
        isLoading: false,
        carts: action.payload,
      };
    case "CART_LIST_FAIL":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "CART_ONE_REQUEST":
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case "CART_ONE_SUCCESS":
      return {
        ...state,
        cart: action.payload,
        isLoading: false,
        error: null,
      };
    case "CART_ONE_FAIL":
      return {
        ...state,
        isLoading: true,
        error: action.payload,
      };
    case "ADD_CART_REQUEST":
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case "ADD_CART_SUCCESS":
      return {
        ...state,
        colors: [...state.carts, action.payload],
      };
    case "ADD_CART_FAIL":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "UPDATE_CART":
      return {
        ...state,
        carts: state.carts.map((cart) =>
          cart._id === action.payload._id ? action.payload : cart
        ),
      };
    case "DELETE_CART":
      return {
        ...state,
        carts: state.carts.filter((cart) => cart._id !== action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
