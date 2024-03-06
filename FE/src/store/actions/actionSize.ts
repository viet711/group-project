import { Dispatch } from "redux";
import { Isize, SizeActionTypes } from "../../interface/size";
import sizeService from "../../api/size/size";

export const getSizes = () => {
  return async (dispatch: Dispatch<SizeActionTypes>) => {
    try {
      dispatch({ type: "SIZE_LIST_REQUEST" });
      const sizes = await sizeService.getAllSizes();
      dispatch({
        type: "SIZE_LIST_SUCCESS",
        payload: sizes,
      });
    } catch (error: any) {
      dispatch({
        type: "SIZE_LIST_FAIL",
        payload: error.message,
      });
    }
  };
};
export const getOneSize = (id: string) => {
  return async (dispatch: Dispatch<SizeActionTypes>) => {
    try {
      dispatch({ type: "SIZE_ONE_REQUEST" });
      const size = await sizeService.getOneSize(id);
      dispatch({
        type: "SIZE_ONE_SUCCESS",
        payload: size,
      });
    } catch (error: any) {
      dispatch({
        type: "SIZE_ONE_FAIL",
        payload: error.message,
      });
    }
  };
};
export const addSize = (size: Isize) => {
  return async (dispatch: Dispatch<SizeActionTypes>) => {
    await sizeService.addSize(size);
    try {
      dispatch({
        type: "ADD_SIZE",
        payload: size,
      });
    } catch (erorr: any) {
      console.log(erorr.message);
    }
  };
};

export const updateSize = (size: Isize, id: string) => {
  return async (dispatch: Dispatch<SizeActionTypes>) => {
    await sizeService.updateSize(size, id);
    try {
      dispatch({
        type: "UPDATE_SIZE",
        payload: size,
      });
    } catch (erorr: any) {
      console.log(erorr.message);
    }
  };
};

export const deleteSize = (sizeId: string) => {
  return (dispatch: Dispatch<SizeActionTypes>) => {
    try {
      sizeService.deleteSize(sizeId);
      dispatch({
        type: "DELETE_SIZE",
        payload: sizeId,
      });
    } catch (error: any) {
      console.log(error);
    }
  };
};
