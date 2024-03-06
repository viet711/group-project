import {
  combineReducers,
  applyMiddleware,
  legacy_createStore as createStore,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import productReducer from "./reducers/reducerProduct";
import categoryReducer from "./reducers/reducerCategory";
import colorReducer from "./reducers/reducerColor";
import sizeReducer from "./reducers/reducerSize";
import cartReducer from "./reducers/reducerCart";
import userReducer from "./reducers/reducerUser";
import addressReducer from "./reducers/reducerAddress";

const rootReducer = combineReducers({
  products: productReducer,
  categorys: categoryReducer,
  colors: colorReducer,
  sizes: sizeReducer,
  carts: cartReducer,
  users: userReducer,
  addresss: addressReducer
  // Các reducers khác
});
const userLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user")!)
  : null;
console.log("userLocalStorage", userLocalStorage);

const initialState = {
  users: {
    user: userLocalStorage,
  },


};
export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
