import { fetchProducts, fetchProductsSuccess, fetchProductFailure } from './product-slice';


  export const fetchAllProducts = (currentPage) => {
    return async(dispatch) => {
        dispatch(fetchProducts());
        try{
            const productsApi = process.env.REACT_APP_GET_ALL_PRODUCTS || '';
            const response = await fetch(productsApi);

            if(response.ok){
                const productsData = await response.json();
                dispatch(fetchProductsSuccess(productsData));
            } else {
                dispatch(fetchProductFailure('Cannot get all products.'));
            }
        } catch (error) {
            dispatch(fetchProductFailure(error.message));
        }
    }
};

export const fetchProductDetails = (productId) => {
    return async(dispatch) => {
        dispatch(fetchProducts());
        try{
            const url =`${process.env.REACT_APP_GET_ALL_PRODUCTS}/${productId}`;
            // const url =`${process.env.REACT_APP_GET_ALL_PRODUCTS}/${productId}` || '';

            const response = await fetch(url);
            const data = await response.json();

            if(response.ok){
                dispatch(fetchProductsSuccess([data]));
            } else {
                dispatch(fetchProductFailure('cannot get details, try again.'));
            }
        } catch (error) {
            dispatch(fetchProductFailure(error.message));
        }
    }
};