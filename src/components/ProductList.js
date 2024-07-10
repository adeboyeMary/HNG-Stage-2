import React from 'react';

import pagePoster from '../asset/png/homepage.png';
import half from '../asset/png/half-flash-sale.png';
import full from '../asset/png/fullFlash.png';
import ShopByCategory from './ShopByCategory';
import BestDeal from './BestDealPoster';
import DealsOfTheDayProducts from './DealsProducts';
import { DUMMY_PRODUCTS } from '../constant/Dummy-Products';
import { DUMMY_DEALS } from '../constant/Dummy_deals';
import { DUMMY_STORES } from '../constant/Dummy-stores';
import FlashSale from './Flashsale';
import OfficialStores from './OfficialStores';
import electronic from '../asset/svg/electronic.svg';
import telecoms from '../asset/svg/telecoms.svg';
import food from '../asset/svg/food.svg';
import sport from '../asset/svg/sport.svg';
import finance from '../asset/svg/finance.svg';
import photo from '../asset/svg/photo.svg';
import business from '../asset/svg/business.svg';
import health from '../asset/svg/health.svg';
import travel from '../asset/svg/travel.svg';
import store from '../asset/svg/store.svg';



const ProductList = () => {

    return (
        <div className='bg-[#F5F5F5] relative pt-2.5 lg:relative lg:mt-[6.4rem]'>
            <div className='flex flex-column lg:flex-row lg:w-[89.58%] lg:m-auto'>
                <ul className='hidden lg:block lg:w-56 lg:bg-[#ffffff] lg:border-[#E6E6E6] 
                lg:h-[337px] lg:p-3 lg:border-[1px] lg:mt-2 lg:rounded-sm lg:pl-[6px] lg:px-[3px] lg:text-xs'>
                    <li className='flex flex-row mb-[10px] hover:text-[#E52659] hover:font-bold'><img src={electronic} alt='electronic' /> Electronics</li>
                    <li className='flex flex-row mb-[10px] hover:text-[#E52659] hover:font-bold'><img src={telecoms} alt='telecoms' />Telecommunication</li>
                    <li className='flex flex-row mb-[10px] hover:text-[#E52659] hover:font-bold'><img src={food} alt='food'/>Food</li>
                    <li className='flex flex-row mb-[10px] hover:text-[#E52659] hover:font-bold'><img src={sport} alt='sport'/>Sports</li>
                    <li className='flex flex-row mb-[10px] hover:text-[#E52659] hover:font-bold'><img src={finance} alt='finance'/>Finances</li>
                    <li className='flex flex-row mb-[10px] hover:text-[#E52659] hover:font-bold'><img src={photo} alt='photography'/>Photography</li>
                    <li className='flex flex-row mb-[10px] hover:text-[#E52659] hover:font-bold'><img src={business} alt='business'/>Business</li>
                    <li className='flex flex-row mb-[10px] hover:text-[#E52659] hover:font-bold'><img src={health} alt='health' />Health</li>
                    <li className='flex flex-row mb-[10px] hover:text-[#E52659] hover:font-bold'><img src={travel} alt='travel'/> Travel</li>
                    <li className='flex flex-row mb-[10px] hover:text-[#E52659] hover:font-bold'><img src={store} alt='store'/>Stores</li>
                    {/* <li className='flex flex-row'><img src={} alt=''/>Official stores</li> */}
                </ul>

                <div className='w-[94.67%] lg:ml-2  m-auto relative mt-[86px] lg:mt-0'>
                    <img src={pagePoster} alt='pagePoster' className='rounded-[6px] lg:block' />
                </div>
                <div className='hidden lg:block  lg:mt-2'>
                    <img src={half} alt='flashSalePoster' />
                </div>
            </div>  
            
            <ShopByCategory items={DUMMY_PRODUCTS} />
            <BestDeal />
            <DealsOfTheDayProducts items={DUMMY_DEALS} />
            <BestDeal /> 
            <FlashSale />
            <img src={full} alt='flashSalePoster' className='w-[94.67%] m-auto rounded-xl 
            my-3.5 lg:hidden' />
            <OfficialStores items={DUMMY_STORES} />
            <div className='flex flex-col lg:flex lg:flex-row lg:ml-[5rem] lg:mt-[1.3rem]'>
                <div className='mt-[2rem] m-auto  lg:mt-0 '>
                    <p className='text-black lg:mb-[0.3rem] text-center'>Now its easier to open your shop</p>
                    <p className='text-xs'>With simple step by step and easy help instruction to follow</p>
                </div>
                <div className='m-auto mt-[1.5rem] lg:ml-[3rem]'>
                    <button className=' bg-[#FF2A63] text-white hover:bg-[#E52659] 
                    hover:font-bold px-[5rem] py-[0.3rem] rounded-lg'>Create account</button>
                </div>
            </div>
        </div>
    )
};

export default ProductList;