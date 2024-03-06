import { Dispatch } from "redux";
import { UserActionTypes, User } from "../../interface/user/user";
import userService from "../../api/user/user";
// Hàm lưu thông tin đăng nhập vào LocalStorage
const saveLoginInfoToLocalStorage = (data: User) => {
  localStorage.setItem("user", JSON.stringify(data));
  localStorage.setItem("accessToken", data.accessToken!);
};
export const getUser = () => {
  return async (dispatch: Dispatch<UserActionTypes>) => {
    try {
      dispatch({ type: "USER_LIST_REQUEST" });

      const users = await userService.getAllUsers();
      dispatch({
        type: "USER_LIST_SUCCESS",
        payload: users,
      });
    } catch (error: any) {
      dispatch({
        type: "USER_LIST_FAIL",
        payload: error.message,
      });
    }
  };
};
export const getOneUser = (id: string) => {
  return async (dispatch: Dispatch<UserActionTypes>) => {
    try {
      dispatch({ type: "USER_ONE_REQUEST" });
      const user = await userService.getOneUser(id);
      dispatch({
        type: "USER_ONE_SUCCESS",
        payload: user,
      });
    } catch (error: any) {
      dispatch({
        type: "USER_ONE_FAIL",
        payload: error.message,
      });
    }
  };
};
export const signUp = (user: User) => {
  return async (dispatch: Dispatch<UserActionTypes>) => {
    dispatch({ type: "SIGNUP_REQUEST" });
    await userService.signUp(user);
    try {
      dispatch({
        type: "SIGNUP_SUCCESS",
        payload: user,
      });
    } catch (erorr: any) {
      dispatch({
        type: "SIGNUP_FAIL",
        payload: erorr.message,
      });
    }
  };
};
export const signIn = (userSignin: User) => {
  return async (dispatch: Dispatch<UserActionTypes>) => {
    dispatch({ type: "SIGNIN_REQUEST" });
    const data = await userService.signIn(userSignin);
    const user = await userService.getOneUser(data.user._id);
    saveLoginInfoToLocalStorage(user);
    try {
      dispatch({
        type: "SIGNIN_SUCCESS",
        payload: user,
      });
    } catch (erorr: any) {
      dispatch({
        type: "SIGNIN_FAIL",
        payload: erorr.message,
      });
    }
  };
};
export const updateUser = (user: User, id: string) => {
  return async (dispatch: Dispatch<UserActionTypes>) => {
    await userService.updateUser(user, id);
    const data = await userService.getOneUser(id);
    saveLoginInfoToLocalStorage(data);
    try {
      dispatch({
        type: "UPDATE_USER",
        payload: data,
      });
    } catch (erorr: any) {
      console.log(erorr.message);
    }
  };
};
export const deleteUser = (userId: string) => {
  return (dispatch: Dispatch<UserActionTypes>) => {
    try {
      userService.deleteUser(userId);
      dispatch({
        type: "DELETE_USER",
        payload: userId,
      });
    } catch (error: any) {
      console.log(error);
    }
  };
};
export const logoutUser = () => {
  return async (dispatch: Dispatch<UserActionTypes>) => {
    try {
      localStorage.removeItem("user");
      dispatch({
        type: "LOGOUT",
      });
    } catch (error: any) {
      console.log(error);
    }
  };
   
};
export const addWishlist = (productTym:any) => {
  return async (dispatch: Dispatch<UserActionTypes>) => {
    try {
      await userService.addWishlist(productTym);
      const users = await userService.getOneUser(productTym.customerId);
      saveLoginInfoToLocalStorage(users)
      
      dispatch({
        type: "ADD_WISHLIST",
        payload: productTym,
      });
    } catch (erorr: any) {
      console.log(erorr.message);
    }
  };
  };
  // export const deleteWhislts = (productTym:any) => {
  //   return async (dispatch: Dispatch<UserActionTypes>) => {
  //     try {
  //       await userService.deleteWhislts(productTym);
  //       // const users = await userService.getOneUser(productTym.customerId);
  //       // saveLoginInfoToLocalStorage(users)
        
  //       dispatch({
  //         type: "DELETE_WHILTS",
  //         payload: productTym,
  //       });
  //     } catch (erorr: any) {
  //       console.log(erorr.message);
  //     }
  //   };
  //   };
  // export const deleteWhislts = (productTym:any) => {
  //   return (dispatch: Dispatch<UserActionTypes>) => {
  //     try {
  //       userService.deleteWhislts(productTym);
  //       dispatch({
  //         type: "DELETE_WHILTS",
  //         payload: productTym,
  //       });
  //     } catch (error: any) {
  //       console.log(error);
  //     }
  //   };
  // };



  // export const getWishlist = (productTym: any) => {
  //   return async (dispatch: Dispatch<UserActionTypes>) => {
  //     try {
  //       dispatch({ type: "WISHLIST_REQUEST" });
  //       await userService.getWishlist(productTym)
  //       const users = await userService.getAllUsers();

        
  //       dispatch({
  //         type: "WISHLIST_SUCCESS",
  //         payload: users,
  //       });
  //     } catch (error: any) {
  //       dispatch({
  //         type: "WISHLIST_FAIL",
  //         payload: error.message,
  //       });
  //     }
  //   };
  // };

   

