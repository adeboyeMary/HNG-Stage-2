// import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";

import ProductList from "../components/ProductList";
import SideBarLg from '../components/SideBarLg';
import ShopByCategory from '../components/ShopByCategory';
import BestDeal from '../components/BestDealPoster';
import FlashSale from '../components/Flashsale';
import { DUMMY_PRODUCTS } from "../constant/Dummy-Products";
import { DUMMY_STORES } from "../constant/Dummy-stores";
import OfficialStores from "../components/OfficialStores";


const Product = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const [products, setProducts] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const orgsId = process.env.REACT_APP_ORGS_ID;
    const appId = process.env.REACT_APP_ID;
    const apiKey = process.env.REACT_APP_API_KEY

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiUrl = 
                `/api/products?organization_id=${orgsId}&reverse_sort=false&page=${currentPage}&size=${itemsPerPage}&Appid=${appId}&Apikey=${apiKey}`;
                const response = await fetch(apiUrl);
                const data = await response.json();
                setProducts(data.items);
                setTotalPages(data.page);
            } catch (error) {
                throw new Error('Failed to fetch products');
            }
        };
        fetchData();
    }, [currentPage, itemsPerPage, orgsId, apiKey, appId ] );

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
            <FlashSale />
            <OfficialStores goods={DUMMY_STORES} />

            <div className="ml-[5rem] ">
                <button onClick={() => pageChangeHandler(currentPage - 1)} 
                    disabled={currentPage === 1}
                    className="bg-transparent text-[#FF2A63] border-[#FF2A63] ">Previous</button>
                <button onClick={() => pageChangeHandler(currentPage + 1)} 
                    disabled={currentPage === totalPages}
                    className="bg-[#FF2A63] text-white border-[#FF2A63] ">Next</button>
            </div> 
        </div>
    )
};

export default Product;