import { Reducer } from "redux";
import { AddressActionTypes, AddressState } from "../../interface/address";
const initialState: AddressState = {
    addresses: [],
    isLoading: false,
    error: null,
}
const addressReducer: Reducer<AddressState, AddressActionTypes> = (state = initialState, action) => {

    switch (action.type) {

        case "ADDRESS_LIST_REQUEST":
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case "ADDRESS_LIST_SUCCESS":
            return {
                ...state,
                isLoading: false,
                addresses: action.payload,
            };
        case "ADDRESS_LIST_FAIL":
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        case "ADDRESS_ONE_REQUEST":
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case "ADDRESS_ONE_SUCCESS":
            return {
                ...state,
                address: action.payload,
                isLoading: false,
                error: null,
            };
        case "ADDRESS_ONE_FAIL":
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        case "ADD_ADDRESS":
            return {
                ...state,
                addresses: [...state.addresses, action.payload],
            };
        case "UPDATE_ADDRESS":
            return {
                ...state,
                addresses: state.addresses.map((address) =>
                    address._id === action.payload._id ? action.payload : address
                ),
            };
        default:
            return state;


    }
}
export default addressReducer;