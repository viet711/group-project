import { Dispatch } from "redux";
import { ProductActionTypes, Iproduct } from "../../interface/product";
import productService from "../../api/product/productService";

export const getProducts = (order?: string, keyword?: string, size?: string, color?: string, category?: string) => {
  return async (dispatch: Dispatch<ProductActionTypes>) => {
    try {
      dispatch({ type: "PRODUCT_LIST_REQUEST" });
      let products;

      if (size) {
        // Handle request with 'size' parameter
        products = await productService.getAllProducts(undefined, undefined, size);

      }

      else if (color) {
        products = await productService.getAllProducts(undefined, undefined, undefined, color);
      }
      else if (category) {
        products = await productService.getAllProducts(undefined, undefined, undefined, undefined, category);
      }

      else {

        products = await productService.getAllProducts(order, keyword);
      }

      dispatch({
        type: "PRODUCT_LIST_SUCCESS",
        payload: products,
      });
    } catch (error: any) {
      dispatch({
        type: "PRODUCT_LIST_FAIL",
        payload: error.message,
      });
    }
  };
};
export const getProductsSearch = (search?: string) => {
  return async (dispatch: Dispatch<ProductActionTypes>) => {
    try {
      if (search) {
        dispatch({ type: "PRODUCT_SEARCH_LIST_REQUEST" });
        const productsSearch = await productService.getProductsSearch(search);

        dispatch({
          type: "PRODUCT_SEARCH_LIST_SUCCESS",
          payload: productsSearch,
        });

        // dispatch({
        //   type: "RESET_PRODUCT_SEARCH",
        //   payload: [],
        // });

      }
    } catch (error: any) {
      dispatch({
        type: "PRODUCT_SEARCH_LIST_FAIL",
        payload: error.message,
      });
    }
  };
}
export const setLoading = (loadingHeader: boolean) => {
  return {
    type: "SET_LOADING",
    payload: loadingHeader,
  };
};
export const getProduct = (id: string) => {
  return async (dispatch: Dispatch<ProductActionTypes>) => {
    try {
      dispatch({ type: "PRODUCT_ONE_REQUEST" });
      const product = await productService.getProduct(id);

      dispatch({
        type: "PRODUCT_ONE_SUCCESS",
        payload: product,
      });
    } catch (error: any) {
      dispatch({
        type: "PRODUCT_ONE_FAIL",
        payload: error.message,
      });
    }
  };
};
export const addProduct = (product: Iproduct) => {
  return async (dispatch: Dispatch<ProductActionTypes>) => {
    try {
      await productService.addProduct(product);
      dispatch({
        type: "ADD_PRODUCT",
        payload: product,
      });
    } catch (erorr: any) {
      console.log(erorr.message);
    }
  };
};

export const updateProduct = (product: Iproduct, id: string) => {
  return async (dispatch: Dispatch<ProductActionTypes>) => {
    try {
      await productService.updateProduct(product, id);
      dispatch({
        type: "UPDATE_PRODUCT",
        payload: product,
      });
    } catch (erorr: any) {
      console.log(erorr.message);
    }
  };
};

export const deleteProduct = (productId: string) => {
  return async (dispatch: Dispatch<ProductActionTypes>) => {
    await productService.deleteProduct(productId);
    try {
      dispatch({
        type: "DELETE_PRODUCT",
        payload: productId,
      });
    } catch (error: any) {
      console.log(error.message);
    }
  };
};
