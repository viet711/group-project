// productReducer.ts
import { Reducer } from "redux";
import { UserState, UserActionTypes } from "../../interface/user/user";
const initialState: UserState = {
  users: [],
  isLoading: false,
  error: null,
};

const userReducer: Reducer<any, UserActionTypes> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "SIGNUP_REQUEST":
    case "SIGNIN_REQUEST":
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case "SIGNUP_SUCCESS":
    case "SIGNIN_SUCCESS":
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };
    case "SIGNUP_FAIL":
    case "SIGNIN_FAIL":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };
    case "USER_LIST_REQUEST":
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case "USER_LIST_SUCCESS":
      return {
        ...state,
        isLoading: false,
        users: action.payload,
      };
    case "USER_LIST_FAIL":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "USER_ONE_REQUEST":
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case "USER_ONE_SUCCESS":
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        error: null,
      };
    case "USER_ONE_FAIL":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "UPDATE_USER":
      return {
        ...state,
        users: state.users.map((user: any) =>
          user._id === action.payload._id ? action.payload : user
        ),
      };
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((user: any) => user._id !== action.payload),
      };
    case "ADD_WISHLIST":
      return {
        ...state,
        user: {
          ...state.user,
          favoriteProduct: [...state.user.favoriteProduct, action.payload],
        },
      };
      case "WISHLIST_REQUEST":
        return {
          ...state,
          isLoading: true,
          error: null,
        };
      case "WISHLIST_SUCCESS":
        return {
          ...state,
          isLoading: false,
          users: action.payload,
        };
      case "WISHLIST_FAIL":
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
        case "DELETE_WHILTS":
          return {
            ...state,
            user: {
              ...state.user,
              favoriteProduct: [...state.user.favoriteProduct, action.payload],
            },
          };
    default:
      return state;
  }
};

export default userReducer;
