import { Dispatch } from "redux";
import { Icategory, CategoryActionTypes } from "../../interface/category";
import categoryService from "../../api/category/category";

export const getCategorys = () => {
  return async (dispatch: Dispatch<CategoryActionTypes>) => {
    try {
      dispatch({ type: "CATEGORY_LIST_REQUEST" });

      const categorys = await categoryService.getAllCategorys();

      dispatch({
        type: "CATEGORY_LIST_SUCCESS",
        payload: categorys,
      });
    } catch (error: any) {
      dispatch({
        type: "CATEGORY_LIST_FAIL",
        payload: error.message,
      });
    }
  };
};
export const getOneCategory = (id: string) => {
  return async (dispatch: Dispatch<CategoryActionTypes>) => {
    try {
      dispatch({ type: "CATEGORY_ONE_REQUEST" });
      const categorys = await categoryService.getOneCategory(id);
      dispatch({
        type: "CATEGORY_ONE_SUCCESS",
        payload: categorys,
      });
    } catch (error: any) {
      dispatch({
        type: "CATEGORY_ONE_FAIL",
        payload: error.message,
      });
    }
  };
};
export const addCategory = (category: Icategory) => {
  return async (dispatch: Dispatch<CategoryActionTypes>) => {
    await categoryService.addCategory(category);
    try {
      dispatch({
        type: "ADD_CATEGORY",
        payload: category,
      });
    } catch (erorr: any) {
      console.log(erorr.message);
    }
  };
};

export const updateCategory = (category: Icategory, id: string) => {
  return async (dispatch: Dispatch<CategoryActionTypes>) => {
    await categoryService.updateCategory(category, id);
    try {
      dispatch({
        type: "UPDATE_CATEGORY",
        payload: category,
      });
    } catch (erorr: any) {
      console.log(erorr.message);
    }
  };
};

export const deleteCategory = (categoryId: string) => {
  return (dispatch: Dispatch<CategoryActionTypes>) => {
    categoryService.deleteCategory(categoryId);
    dispatch({
      type: "DELETE_CATEGORY",
      payload: categoryId,
    });
  };
};
