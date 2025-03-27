import { json, useLoaderData, useParams } from "react-router-dom";

import ProductItem from "../components/ProductItem";
import { fetchProductDetails } from "../store/products-thunk";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const ProductDetails = () => {
    const { productId } = useParams();
    const dispatch = useDispatch();
    const products = useSelector((state)=> state.products.products);

    useEffect(() => {
        dispatch(fetchProductDetails(productId));
    }, [dispatch, productId])
    
    return (
        <ProductItem products={products} />
    )
};


export default ProductDetails;
