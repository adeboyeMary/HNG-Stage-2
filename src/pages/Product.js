import { json, useLoaderData } from "react-router-dom";


import ProductList from "../components/ProductList";
import SideBarLg from '../components/SideBarLg';
import ShopByCategory from '../components/ShopByCategory';
import BestDeal from '../components/BestDealPoster';
import FlashSale from '../components/Flashsale';


import { DUMMY_PRODUCTS } from "../constant/Dummy-Products";
import { DUMMY_STORES } from "../constant/Dummy-stores";
import OfficialStores from "../components/OfficialStores";


const Product = () => {
    const data = useLoaderData();
  

    return (
        <div className='bg-[#F5F5F5] relative pt-2.5 lg:relative lg:mt-[6.4rem]'>
            <SideBarLg />
            <ShopByCategory products={DUMMY_PRODUCTS}  />
            <BestDeal />
            <ProductList products={data.items} />
            <BestDeal /> 
            {/* <DealsOfTheDayProducts items={DUMMY_DEALS} /> */}
            <FlashSale />
            <OfficialStores goods={DUMMY_STORES} />
        </div>
    )
};

export default Product;



export async function loader () {
    const orgsId = process.env.REACT_APP_ORGS_ID;
    const appId = process.env.REACT_APP_ID;
    const apiKey = process.env.REACT_APP_API_KEY
    
    const apiURL = 
        `/api/products?organization_id=${orgsId}&Appid=${appId}&Apikey=${apiKey}`;

    const response = await fetch(apiURL);

    if (!response.ok){
        throw json({message: 'Could not fetch products'}, {status: 505});
    }
    const data = await response.json();
    return data;
};