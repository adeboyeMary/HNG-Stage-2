import ProductList from "../components/ProductList";

import { DUMMY_PRODUCTS } from "../constant/Dummy-Products";


const Product = () => {
    return (
        <ProductList items={DUMMY_PRODUCTS} />

        // <p>Here are my Products</p>
    )
};

export default Product;