// productReducer.ts
import { Reducer } from "redux";
import { SizeState, SizeActionTypes } from "../../interface/size";
const initialState: SizeState = {
  sizes: [],
  isLoading: false,
  error: null,
};

const sizeReducer: Reducer<SizeState, SizeActionTypes> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "SIZE_LIST_REQUEST":
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case "SIZE_LIST_SUCCESS":
      return {
        ...state,
        isLoading: false,
        sizes: action.payload,
      };
    case "SIZE_LIST_FAIL":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "SIZE_ONE_REQUEST":
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case "SIZE_ONE_SUCCESS":
      return {
        ...state,
        size: action.payload,
        isLoading: false,
        error: null,
      };
    case "SIZE_ONE_FAIL":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "ADD_SIZE":
      return {
        ...state,
        sizes: [...state.sizes, action.payload],
      };
    case "UPDATE_SIZE":
      return {
        ...state,
        sizes: state.sizes.map((size) =>
          size._id === action.payload._id ? action.payload : size
        ),
      };
    case "DELETE_SIZE":
      return {
        ...state,
        sizes: state.sizes.filter((size) => size._id !== action.payload),
      };
    default:
      return state;
  }
};

export default sizeReducer;
