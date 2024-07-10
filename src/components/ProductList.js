import React from 'react';

import pagePoster from '../asset/png/homepage.png';
import half from '../asset/png/half-flash-sale.png';
import ShopByCategory from './ShopByCategory';
import BestDeal from './BestDealPoster';
import DealsOfTheDayProducts from './DealsProducts';
import { DUMMY_PRODUCTS } from '../constant/Dummy-Products';
import { DUMMY_DEALS } from '../constant/Dummy_deals';
import { DUMMY_STORES } from '../constant/Dummy-stores';
import FlashSale from './Flashsale';
import OfficialStores from './OfficialStores';



const ProductList = () => {

    return (
        <div className='bg-[#F5F5F5] relative pt-2.5 lg:relative lg:mt-[5.4rem]'>
            <div className='flex flex-column lg:flex-row lg:w-[89.58%] lg:m-auto'>
                <ul className='hidden lg:block lg:w-56 lg:bg-[#ffffff] lg:border-[#E6E6E6] 
                lg:h-[337px] lg:p-3 lg:border-[1px] lg:mt-2 lg:rounded-sm '>
                    <li>Electronics</li>
                    <li>Telecommunication</li>
                    <li>Food</li>
                    <li>Sports</li>
                    <li>Finances</li>
                    <li>Photography</li>
                    <li>Business</li>
                    <li>Health</li>
                    <li>Travel</li>
                    <li>Official stores</li>
                </ul>

                <div className='w-[94.67%] m-auto relative mt-[34px] lg:mt-0'>
                    <img src={pagePoster} alt='pagePoster' className='rounded-[6px] lg:block' />
                </div>
                <div className='hidden lg:block lg:mt-2'>
                    <img src={half} alt='flashSalePoster' />
                </div>
            </div>  
            
            <ShopByCategory items={DUMMY_PRODUCTS} />
            <BestDeal />
            <DealsOfTheDayProducts items={DUMMY_DEALS} />
            <BestDeal /> 
            <FlashSale />
            <BestDeal />
            <OfficialStores items={DUMMY_STORES} />
        </div>
    )
};

export default ProductList;