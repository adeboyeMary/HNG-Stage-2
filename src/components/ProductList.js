import React from 'react';

import pagePoster from '../asset/png/homepage.png';
import ShopByCategory from './ShopByCategory';
import BestDeal from './BestDealPoster';
import DealsOfTheDayProducts from './DealsProducts';
import { DUMMY_PRODUCTS } from '../constant/Dummy-Products';
import { DUMMY_DEALS } from '../constant/Dummy_deals';


const ProductList = () => {

    return (
        <div className='bg-[#EDEDED] w-[100%] py-2.5 relative mt-[5.4rem]'>
            <div className=' m-auto '>
                <img src={pagePoster} alt='pagePoster' className='w-[98%] m-auto rounded-[6px]' />
            </div>
            <ShopByCategory items={DUMMY_PRODUCTS} />
            <BestDeal />
            <DealsOfTheDayProducts items={DUMMY_DEALS} />
            <BestDeal /> 
        </div>
    )
};

export default ProductList;