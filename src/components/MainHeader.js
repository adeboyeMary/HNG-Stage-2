import React from 'react';
import { Link } from 'react-router-dom';

import cart from '../asset/svg/cart.svg';
import smiley from '../asset/svg/smiley.svg';
import SearchBar from './SearchBar';
import Sidebar from './Sidebar';


const MainHeader = () => {
    return ( 
        <header className=' bg-white text-sm w-[100%] fixed mb-2 top-0 z-50 
        lg:w-[100%] lg:bg-white lg:fixed lg:top-0 lg:z-10 p-2'>
            <div className='hidden lg:block'>
                <div className="flex lg:flex-row lg:justify-between ">
                    <span className='hidden lg:block' >Good afternoon customer!</span>
                    <div className='lg:flex lg:flex-row lg:ml-2'>
                        <span className="hover:text-[#FF2A63] hidden lg:block " >Sell on SamandCart</span>
                        <span className="hover:text-[#FF2A63] hidden lg:block " >Track your Order</span>
                        <span className="hover:text-[#FF2A63] hidden lg:block " >Help</span>
                    </div>
                </div>

                <div className='flex  lg:flex-row justify-between'>
                <span className="text-[#FF2A63] font-bold hidden lg:block ">Sonjinwoo</span>

                <>
                    <SearchBar />
                </>
                
                <span className='lg:flex lg:flex-row hidden'><img alt='smileyIcon' src={smiley} 
                className='m-2 '/>Account</span>
                
                <Link to='/checkout' className='hidden lg:flex lg:flex-row ' >
                    <img alt='cartIcon' src={cart} className='m-2 '/>
                    <span>Cart</span>
                </Link>
                </div>
            </div>
            {/* bg-white w-100% mb-5 */}
            <div className='lg:hidden'>
                <Sidebar />
            </div>
        </header>
    )
};

export default MainHeader;
            