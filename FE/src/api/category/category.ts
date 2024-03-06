import { Icategory } from "../../interface/category";
import insntance from "../config";
const categoryService = {
  getAllCategorys: async (): Promise<Icategory[]> => {
    try {
      const response = await insntance.get("/categorys");
      return response.data;
    } catch (error) {
      throw new Error("Error retrieving categorys");
    }
  },
  getOneCategory: async (id: number | string): Promise<Icategory> => {
    try {
      const response = await insntance.get("/categorys/" + id);
      return response.data;
    } catch (error) {
      throw new Error("Error retrieving categorys");
    }
  },
  addCategory: async (category: Icategory): Promise<Icategory> => {
    try {
      const response = await insntance.post("/categorys", category);
      return response.data;
    } catch (error) {
      throw new Error("Error adding category");
    }
  },
  updateCategory: async (category: Icategory,id: string): Promise<Icategory> => {
    try {
      const response = await insntance.put(
        `/categorys/${id}`,
        category
      );
      return response.data;
    } catch (error) {
      throw new Error("Error updating category");
    }
  },  
  deleteCategory: async (categoryId: string): Promise<void> => {
    try {
      await insntance.delete(`/categorys/${categoryId}`);
    } catch (error) {
      throw new Error("Error deleting category");
    }
  },
};

export default categoryService;
