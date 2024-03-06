import { Isize } from "../../interface/size";
import insntance from "../config";
const sizeService = {
  getAllSizes: async (): Promise<Isize[]> => {
    try {
      const response = await insntance.get("/size");
      console.log(response);
      return response.data.size;

    } catch (error) {
      throw new Error("Error retrieving sizes");
    }
  },
  getOneSize: async (id: number | string): Promise<Isize> => {
    try {
      const response = await insntance.get("/size/" + id);
      return response.data.size;
    } catch (error) {
      throw new Error("Error retrieving size");
    }
  },
  addSize: async (size: Isize): Promise<Isize> => {
    try {
      const response = await insntance.post("/size", size);
      return response.data;
    } catch (error) {
      throw new Error("Error adding size");
    }
  },
  updateSize: async (size: Isize, id: string): Promise<Isize> => {
    try {
      const response = await insntance.put(`/size/${id}`, size);
      return response.data;
    } catch (error) {
      throw new Error("Error updating size");
    }
  },
  deleteSize: async (sizeId: string): Promise<void> => {
    try {
      await insntance.delete(`/size/${sizeId}`);
    } catch (error) {
      throw new Error("Error deleting category");
    }
  },
}
export default sizeService