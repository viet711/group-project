import { Address } from "./user/user";

export interface AddressState {
    addresses: Address[];
    address?: Address;
    isLoading: boolean;
    error: string | null;

}
//get all
export interface AddressListRequestAction {
    type: "ADDRESS_LIST_REQUEST";
}
export interface AddressListSuccessAction {
    type: "ADDRESS_LIST_SUCCESS";
    payload: Address[];
}
export interface AddressListFailAction {
    type: "ADDRESS_LIST_FAIL";
    payload: string;
}
//get one
export interface AddressOneRequestAction {
    type: "ADDRESS_ONE_REQUEST";
}
export interface AddressOneSuccessAction {
    type: "ADDRESS_ONE_SUCCESS";
    payload: Address;
}
export interface AddressOneFailAction {
    type: "ADDRESS_ONE_FAIL";
    payload: string;
}
//add

export interface AddAddressAction {
    type: "ADD_ADDRESS";
    payload: Address;
}
export interface UpdateAddressAction {
    type: "UPDATE_ADDRESS";
    payload: Address;
}
export interface DeleteAddressAction {
    type: "DELETE_ADDRESS";
    payload: string;
}
export type AddressActionTypes =
    | AddressListRequestAction
    | AddressListSuccessAction
    | AddressListFailAction
    | AddressOneFailAction
    | AddressOneSuccessAction
    | AddressOneRequestAction
    | AddAddressAction
    | UpdateAddressAction
    | DeleteAddressAction
