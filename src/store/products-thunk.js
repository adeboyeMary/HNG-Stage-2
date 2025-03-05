import { fetchProducts, fetchProductsSuccess, fetchProductFailure } from './product-slice';


  export const fetchAllProducts = (currentPage) => {
    return async(dispatch) => {
        dispatch(fetchProducts());
        try{
            const productsApi = process.env.REACT_APP_GET_ALL_PRODUCTS || '';
            const response = await fetch(productsApi);
            console.log(process.env.REACT_APP_GET_ALL_PRODUCTS, '......!!!!!...');

            if(response.ok){
                const productsData = await response.json();
                dispatch(fetchProductsSuccess(productsData));
                console.log(productsData, '............Working!........');

                const itemsPerPage = 10;
                const startIndex = (currentPage - 1) + itemsPerPage;
                const endIndex = startIndex + itemsPerPage;
                const currentProducts = productsData?.slice()

            } else {
                dispatch(fetchProductFailure('Cannot get all products.'));
            }
        } catch (error) {
            dispatch(fetchProductFailure(error.message));
        }
    }
};

export const pagination = (currentPage) => {
    return (dispatch) => {
        const itemsPerPage = 10;
        const startIndex = (currentPage - 1) + itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
    }
};