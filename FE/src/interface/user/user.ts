
export interface User {
  accessToken?: string;
  user?: any;
  _id?: string | number;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  image_url: string;
  favoriteProduct?: Array<string>;
  addressUser?: Array<string>;
}
export interface UserState {
  users: User[];
  user?: User;
  isLoading: boolean;
  error: null | string;
}
export interface Address {
  _id?: string;
  phone : string;
  name : string;
  cityLeeched : string;
  districtLeech : string;
  communeAddress : string;
  apartmentNumber : string;
  _customerId? : string;
}
//signup
export interface SignUpRequestAction {
  type: "SIGNUP_REQUEST";
}
export interface SignUpSuccessAction {
  type: "SIGNUP_SUCCESS";
  payload: User;
}
export interface SignUpFailAction {
  type: "SIGNUP_FAIL";
  payload: string;
}
//signin
export interface SignInRequestAction {
  type: "SIGNIN_REQUEST";
}
export interface SignInSuccessAction {
  type: "SIGNIN_SUCCESS";
  payload: User;
}
export interface SignInFailAction {
  type: "SIGNIN_FAIL";
  payload: string;
}
//logout
export interface LogoutAction {
  type: "LOGOUT";
}

// get all
export interface UserListRequestAction {
  type: "USER_LIST_REQUEST";
}
export interface UserListSuccessAction {
  type: "USER_LIST_SUCCESS";
  payload: User[];
}
export interface UserListFailAction {
  type: "USER_LIST_FAIL";
  payload: string;
}

//get one
export interface UserOneRequestAction {
  type: "USER_ONE_REQUEST";
}
export interface UserOneSuccessAction {
  type: "USER_ONE_SUCCESS";
  payload: User;
}
export interface UserOneFailAction {
  type: "USER_ONE_FAIL";
  payload: string;
}
//add
export interface AddUserAction {
  type: "ADD_USER";
  payload: User;
}
export interface UpdateUserAction {
  type: "UPDATE_USER";
  payload: User;
}
export interface DeleteUserAction {
  type: "DELETE_USER";
  payload: string;
}
export interface AddToWishlistAction {
  type: "ADD_WISHLIST";
  payload: string;
}
//get all wishlist
export interface wishlistRequestAction {
  type: "WISHLIST_REQUEST";
}
export interface wishlistSuccessAction {
  type: "WISHLIST_SUCCESS";
  payload: User[];
}
export interface wishlistFailAction {
  type: "WISHLIST_FAIL";
  payload: string;
}
// 
export interface deleteWhislts {
  type: "DELETE_WHILTS";
  payload: string;
}


export type UserActionTypes =
  | UserListRequestAction
  | UserListSuccessAction
  | UserListFailAction
  | UserOneFailAction
  | UserOneSuccessAction
  | UserOneRequestAction
  | AddUserAction
  | UpdateUserAction
  | DeleteUserAction
  | SignUpRequestAction
  | SignUpSuccessAction
  | SignUpFailAction
  | SignInRequestAction
  | SignInSuccessAction
  | SignInFailAction
  | LogoutAction
  |AddToWishlistAction
  |wishlistRequestAction
  |wishlistSuccessAction
  |wishlistFailAction
  |deleteWhislts;
  
  
  ;

