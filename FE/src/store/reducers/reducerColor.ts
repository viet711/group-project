// productReducer.ts
import { Reducer } from "redux";
import { ColorState, ColorActionTypes } from "../../interface/color";
const initialState: ColorState = {
  colors: [],
  isLoading: false,
  error: null,
};

const colorReducer: Reducer<ColorState, ColorActionTypes> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "COLOR_LIST_REQUEST":
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case "COLOR_LIST_SUCCESS":
      return {
        ...state,
        isLoading: false,
        colors: action.payload,
      };
    case "COLOR_LIST_FAIL":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "COLOR_ONE_REQUEST":
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case "COLOR_ONE_SUCCESS":
      return {
        ...state,
        color: action.payload,
        isLoading: false,
        error: null,
      };
    case "COLOR_ONE_FAIL":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "ADD_COLOR":
      return {
        ...state,
        colors: [...state.colors, action.payload],
      };
    case "UPDATE_COLOR":
      return {
        ...state,
        colors: state.colors.map((color) =>
          color._id === action.payload._id ? action.payload : color
        ),
      };
    case "DELETE_COLOR":
      return {
        ...state,
        colors: state.colors.filter((color) => color._id !== action.payload),
      };
    default:
      return state;
  }
};

export default colorReducer;
