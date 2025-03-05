import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    loading: false,
    error: null
};


const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        fetchProducts(state) {
            state.loading = true;
        },
        fetchProductsSuccess(state, action) {
            state.loading = false;
            state.products = action.payload;
        },
        fetchProductFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
    }
});

export const { fetchProducts, fetchProductsSuccess, fetchProductFailure } = productSlice.actions;
export default productSlice;