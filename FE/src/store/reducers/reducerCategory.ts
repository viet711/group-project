// productReducer.ts
import { Reducer } from "redux";
import { CategoryState, CategoryActionTypes } from "../../interface/category";
const initialState: CategoryState = {
  categorys: [],
  isLoading: false,
  error: null,
};

const categoryReducer: Reducer<CategoryState, CategoryActionTypes> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "CATEGORY_LIST_REQUEST":
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case "CATEGORY_LIST_SUCCESS":
      return {
        ...state,
        isLoading: false,
        categorys: action.payload,
      };
    case "CATEGORY_LIST_FAIL":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "CATEGORY_ONE_REQUEST":
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case "CATEGORY_ONE_SUCCESS":
      return {
        ...state,
        category: action.payload,
        isLoading: false,
        error: null,
      };
    case "CATEGORY_ONE_FAIL":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "ADD_CATEGORY":
      return {
        ...state,
        categorys: [...state.categorys, action.payload],
      };
    case "UPDATE_CATEGORY":
      return {
        ...state,
        categorys: state.categorys.map((category) =>
          category._id === action.payload._id ? action.payload : category
        ),
      };
    case "DELETE_CATEGORY":
      return {
        ...state,
        categorys: state.categorys.filter(
          (category) => category._id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default categoryReducer;
