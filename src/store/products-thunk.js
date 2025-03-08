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