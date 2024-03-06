import { signin } from "../../interface/user/signin";
import { signup } from "../../interface/user/signup";
import { User } from "../../interface/user/user";
import insntance from "../config";
const userService = {
  getAllUsers: async (): Promise<User[]> => {
    try {
      const response = await insntance.get("/user");
      return response.data.user;
    } catch (error) {
      throw new Error("Error retrieving User");
    }
  },
  getOneUser: async (id: number | string): Promise<User> => {
    try {
      const response = await insntance.get("/user/" + id);
      (response.data);
      return response.data;
    } catch (error) {
      throw new Error("Error retrieving size");
    }
  },
  signUp: async (user: signup): Promise<User> => {
    try {
      const response = await insntance.post("/signup", user);
      return response.data;
    } catch (error) {
      throw new Error("Error adding user");
    }
  },
  signIn: async (user: signin): Promise<User> => {
    try {
      const response = await insntance.post("/signin", user);
      return response.data;
    } catch (error) {
      throw new Error("Error adding user");
    }
  },
  updateUser: async (user: User, id: string): Promise<User> => {
    try {
      const response = await insntance.put(`/user/${id}`, user);
      return response.data;
    } catch (error) {
      throw new Error("Error updating user");
    }
  },
  deleteUser: async (userId: string): Promise<void> => {
    try {
      await insntance.delete(`/user/${userId}`);
    } catch (error) {
      throw new Error("Error deleting user");
    }
  },
  getWishlist: async (userId: string): Promise<void> => {
    try {
      await insntance.get(`/favoriteProducts/${userId}`);
    } catch (error) {
      throw new Error("Error get Wishlist ");
    }
  },
  addWishlist : async (ProductTym:any): Promise<void> => {
    console.log(ProductTym);
    
    try {

      await insntance.post(`/favoriteProducts`,ProductTym);
    }
    catch(error){
      console.log(error);
      
    }
  },
  deleteWhislts : async (ProductTym:any): Promise<void> => {
    console.log(ProductTym);
    
    try {

      await insntance.delete(`/favoriteProducts`,ProductTym);
    }
    catch(error){
      console.log(error);
    }
  },
 
 
  
};



export default userService;
