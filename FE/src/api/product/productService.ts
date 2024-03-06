import { Iproduct } from "../../interface/product";
import insntance from "../config";
const productService = {
  getAllProducts: async (order?: string, keyword?: string, size?: string, color?: string, category?: string, search?: string): Promise<Iproduct[]> => {
    try {
      let url = '/products';

      if (order && keyword) {
        // Handle request with 'order' and 'keyword'
        url += `?order=${order}&keyword=${keyword}`;
      } else if (size) {
        // Handle request with 'size'
        url += `?size=${size}`;
      }
      else if (color) {
        url += `?color=${color}`;
      }
      else if (category) {
        url += `?category=${category}`;
      }
      else if (search) {
        url += `?search=${search}`;
      }

      const response = await insntance.get(url);
      return response.data.product.docs;
    } catch (error) {
      throw new Error("Error retrieving products");
    }
  },
  getProductsSearch: async (search?: string): Promise<Iproduct[]> => {
    try {
      let url = '/searchProducts';

      if (search) {
        url += `?search=${search}`;
      }

      const response = await insntance.get(url);
      return response.data.product.docs;
    } catch (error) {
      throw new Error("Error retrieving products");
    }
  },


  getProduct: async (id: string | number): Promise<Iproduct> => {
    try {
      const response = await insntance.get("/products/" + id);
      return response.data.product;
    } catch (error) {
      throw new Error("Error retrieving products");
    }
  },
  addProduct: async (product: Iproduct): Promise<Iproduct> => {
    try {
      const response = await insntance.post("/products", product);
      return response.data;
    } catch (error) {
      throw new Error("Error adding product");
    }
  },
  updateProduct: async (product: Iproduct  , id : string): Promise<Iproduct> => {
    try {
      const response = await insntance.put(`/products/${id}`, product);
      return response.data;
    } catch (error) {
      throw new Error("Error updating product");
    }
  },
  deleteProduct: async (productId: string): Promise<void> => {
    try {
      await insntance.delete(`/products/${productId}`);
    } catch (error) {
      throw new Error("Error deleting product");
    }
  },
};

export default productService;
