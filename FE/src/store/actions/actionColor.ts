import { Dispatch } from "redux";
import { Icolor, ColorActionTypes } from "../../interface/color";
import colorService from "../../api/color/color";

export const getColors = () => {
  return async (dispatch: Dispatch<ColorActionTypes>) => {
    try {
      dispatch({ type: "COLOR_LIST_REQUEST" });

      const colors = await colorService.getAllColors();

      dispatch({
        type: "COLOR_LIST_SUCCESS",
        payload: colors,
      });
    } catch (error: any) {
      dispatch({
        type: "COLOR_LIST_FAIL",
        payload: error.message,
      });
    }
  };
};
export const getOneColor = (id: string) => {
  return async (dispatch: Dispatch<ColorActionTypes>) => {
    try {
      dispatch({ type: "COLOR_ONE_REQUEST" });
      const color = await colorService.getOneColor(id);
      dispatch({
        type: "COLOR_ONE_SUCCESS",
        payload: color,
      });
    } catch (error: any) {
      dispatch({
        type: "COLOR_ONE_FAIL",
        payload: error.message,
      });
    }
  };
};
export const addColor = (color: Icolor) => {
  return async (dispatch: Dispatch<ColorActionTypes>) => {
    await colorService.addColor(color);
    try {
      dispatch({
        type: "ADD_COLOR",
        payload: color,
      });
    } catch (erorr: any) {
      console.log(erorr.message);
    }
  };
};

export const updateColor = (color: Icolor, id: string) => {
  return async (dispatch: Dispatch<ColorActionTypes>) => {
    await colorService.updateColor(color, id);
    try {
      dispatch({
        type: "UPDATE_COLOR",
        payload: color,
      });
    } catch (erorr: any) {
      console.log(erorr.message);
    }
  };
};

export const deleteColor = (colorId: string) => {
  return (dispatch: Dispatch<ColorActionTypes>) => {
    try {
      colorService.deleteColor(colorId);
      dispatch({
        type: "DELETE_COLOR",
        payload: colorId,
      });
    } catch (error: any) {
      console.log(error);
    }
  };
};
