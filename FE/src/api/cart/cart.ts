import { Icart } from "../../interface/cart";
import insntance from "../config";
const cartService = {
  getAllCarts: async (): Promise<Icart[]> => {
    try {
      const response = await insntance.get("/cart");
      return response.data;
    } catch (error) {
      throw new Error("Error retrieving carts");
    }
  },
  getOneCarts: async (idUser: number | string): Promise<Icart> => {
    try {
      const response = await insntance.get("/cart/" + idUser);
      return response.data;
    } catch (error) {
      throw new Error("Error retrieving carts");
    }
  },
  addCart: async (cart: Icart): Promise<Icart> => {
    try {
      const response = await insntance.post("/cart", cart);
      return response.data;
    } catch (error) {
      throw new Error("Error adding cart");
    }
  },
  updateCart: async (cart: Icart, userId: string): Promise<Icart> => {
    try {
      const response = await insntance.put(`/cart/${userId}`, cart);
      return response.data;
    } catch (error) {
      throw new Error("Error updating cart");
    }
  },
  deleteCart: async (userId: string, productId: string): Promise<void> => {
    try {
      await insntance.delete(`/cart/${userId}/products/${productId}`);
    } catch (error) {
      throw new Error("Error deleting cart");
    }
  },
};

export default cartService;
