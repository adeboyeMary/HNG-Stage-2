import { useLoaderData } from "react-router-dom";


import ProductList from "../components/ProductList";
import SideBarLg from '../components/SideBarLg';
import ShopByCategory from '../components/ShopByCategory';
import BestDeal from '../components/BestDealPoster';
import FlashSale from '../components/Flashsale';


import { DUMMY_PRODUCTS } from "../constant/Dummy-Products";
import { DUMMY_STORES } from "../constant/Dummy-stores";
import OfficialStores from "../components/OfficialStores";
import { useState } from "react";


const Product = () => {
    // const data = useLoaderData();
    // const products = data.items;
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const {  products, totalPages } = useLoaderData();
    console.log(products, '././././././');
    

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProducts = products.slice(startIndex, endIndex);

    const pageChangeHandler = (newPage) => {
        setCurrentPage(newPage);
    };
  

    return (
        <div className='bg-[#F5F5F5] relative pt-2.5 lg:relative lg:mt-[6.4rem]'>
            <SideBarLg />
            <ShopByCategory products={DUMMY_PRODUCTS}  />
            <BestDeal />
            <ProductList products={currentProducts} />
            <BestDeal /> 
            {/* <DealsOfTheDayProducts items={DUMMY_DEALS} /> */}
            <FlashSale />
            <OfficialStores goods={DUMMY_STORES} />
            <button onClick={() => pageChangeHandler(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
            <button onClick={() => pageChangeHandler(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
        </div>
    )
};

export default Product;



export async function loader ({params}) {
    // const { pages, size} = params;
    const orgsId = process.env.REACT_APP_ORGS_ID;
    const appId = process.env.REACT_APP_ID;
    const apiKey = process.env.REACT_APP_API_KEY
    
    // const apiURL = 
    //     `/api/products?organization_id=${orgsId}&reverse_sort=false&page=${pa&size=10&Appid=${appId}&Apikey=${apiKey}`;
    // const apiURL = `/api/products?organization_id=${orgsId}&Appid=${appId}&Apikey=${apiKey}`;    

    // const apiURL = 
    // `https://timbu-get-all-products.reavdev.workers.dev/?organization_id=${orgsId}&reverse_sort=false&page=${page}&size=${size}&Appid=${appId}&apikey=${apiKey}`;

    try {
        const response = await fetch(`/api/products?organization_id=${orgsId}&reverse_sort=false&page=1&size=30&Appid=${appId}&Apikey=${apiKey}`);

        if (!response.ok){
            throw new Error('Could not fetch products');
        }
        const data = await response.json();
        console.log(data.page, '!!!!!!!!!!!!!!!!');
        return { products: data.items, totalPages: data.page };
        // return data;

    } catch (error) {
        // console.error('Error fetching products:', error);
        throw new Error('Failed to fetch products')
    }
     
};