import { Dispatch } from "redux";
import { Icart, CartActionTypes } from "../../interface/cart";
import cartService from "../../api/cart/cart";

export const getCarts = () => {
  return async (dispatch: Dispatch<CartActionTypes>) => {
    try {
      dispatch({ type: "CART_LIST_REQUEST" });

      const carts = await cartService.getAllCarts();

      dispatch({
        type: "CART_LIST_SUCCESS",
        payload: carts,
      });
    } catch (error: any) {
      dispatch({
        type: "CART_LIST_FAIL",
        payload: error.message,
      });
    }
  };
};
export const getOneCart = (id: string) => {
  return async (dispatch: Dispatch<CartActionTypes>) => {
    try {
      dispatch({ type: "CART_ONE_REQUEST" });
      const cart = await cartService.getOneCarts(id);
      dispatch({
        type: "CART_ONE_SUCCESS",
        payload: cart,
      });
    } catch (error: any) {
      dispatch({
        type: "CART_ONE_FAIL",
        payload: error.message,
      });
    }
  };
};
export const addCart = (cart: Icart) => {
  return async (dispatch: Dispatch<CartActionTypes>) => {
    dispatch({ type: "ADD_CART_REQUEST" });
    await cartService.addCart(cart);
    try {
      dispatch({
        type: "ADD_CART_SUCCESS",
        payload: cart,
      });
    } catch (error: any) {
      dispatch({
        type: "ADD_CART_FAIL",
        payload: error.message,
      });
      console.log(error.message);
    }
  };
};

export const updateCart = (cart: Icart, idUser: string) => {
  return async (dispatch: Dispatch<CartActionTypes>) => {
    await cartService.updateCart(cart, idUser);
    try {
      dispatch({
        type: "UPDATE_CART",
        payload: cart,
      });
    } catch (error: any) {
      console.log(error.message);
    }
  };
};

export const deleteCart = (userId: string, productId: string) => {
  return async (dispatch: Dispatch<CartActionTypes>) => {
    await cartService.deleteCart(userId, productId);
    dispatch({
      type: "DELETE_CART",
      payload: productId,
    });
  };
};
