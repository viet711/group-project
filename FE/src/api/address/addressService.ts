import { Address } from "../../interface/user/user";
import insntance from "../config";
const addressService = {
    addAddress: async (address: Address) => {
        try {
            const res = await insntance.post(`/address`, address);
            return res.data;
        } catch (error: any) {
            console.log(error);
        }
    },
    updateAddress: async (address: Address, idAddress: string) => {
        try {
            const res = await insntance.put(`/address/${idAddress}`, address);
            return res.data;
        } catch (error: any) {
            console.log(error);
        }
    },
    deleteAddress: async (idAddress: string) => {
        try {
            const res = await insntance.delete(`/address/${idAddress}`);
            return res.data;
        } catch (error: any) {
            console.log(error);
        }
    }

}
export default addressService;