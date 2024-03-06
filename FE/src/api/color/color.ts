import { Icolor } from "../../interface/color";
import insntance from "../config";
const colorService = {
  getAllColors: async (): Promise<Icolor[]> => {
    try {
      const response = await insntance.get("/color");
      return response.data.color;
    } catch (error) {
      throw new Error("Error retrieving colors");
    }
  },
  getOneColor: async (id: number | string): Promise<Icolor> => {
    try {
      const response = await insntance.get("/color/" + id);
      return response.data.color;
    } catch (error) {
      throw new Error("Error retrieving color");
    }
  },
  addColor: async (color: Icolor): Promise<Icolor> => {
    try {
      const response = await insntance.post("/color", color);
      return response.data;
    } catch (error) {
      throw new Error("Error adding color");
    }
  },
  updateColor: async (color: Icolor, id: string): Promise<Icolor> => {
    try {
      const response = await insntance.put(`/color/${id}`, color);
      return response.data;
    } catch (error) {
      throw new Error("Error updating color");
    }
  },
  deleteColor: async (colorId: string): Promise<void> => {
    try {
      await insntance.delete(`/color/${colorId}`);
    } catch (error) {
      throw new Error("Error deleting category");
    }
  },
};

export default colorService;
