import { json, useLoaderData } from "react-router-dom";

import ProductItem from "../components/ProductItem";

const ProductDetails = () => {
    const data = useLoaderData();
    
    return (
        <ProductItem product={data} />
    )
};


export default ProductDetails;

export async function loader ({request, params}) {
    const id = params.productId;
    const orgsId = process.env.REACT_APP_ORGS_ID;
    const appId = process.env.REACT_APP_ID;
    const apiKey = process.env.REACT_APP_API_KEY
    
    const apiURL = 
        `/api/products/${id}?organization_id=${orgsId}&Appid=${appId}&Apikey=${apiKey}`;

    const response = await fetch(apiURL);
    const data = await response.json();
    if(!response.ok){
        throw json({ message: 'Could not fetch product'}, {status: 505});
    }
    
    return data;
};
