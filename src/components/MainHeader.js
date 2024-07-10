import React from 'react';
import { Link } from 'react-router-dom';

import cart from '../asset/svg/cart.svg';
import smiley from '../asset/svg/smiley.svg';
import SearchBar from './SearchBar';
import Sidebar from './Sidebar';


const MainHeader = () => {
    return ( 
        <header className=' bg-white text-sm w-[100%] fixed mb-2 top-0 z-10 h-[96px]
        lg:w-[100%] lg:bg-white lg:fixed lg:top-0 lg:z-10 p-2'>
            <div className='hidden lg:block lg:px-[10px] '>
                <div className="flex lg:flex-row lg:justify-between ">
                    <span className='hidden lg:block' >Good afternoon customer!</span>
                    <div className='lg:flex lg:flex-row lg:ml-2'>
                        <span className="hover:text-[#E52659] hover:font-bold hidden lg:block lg:ml-3" >Sell on SamandCart</span>
                        <span className="hover:text-[#E52659] hover:font-bold  hidden lg:block lg:ml-3" >Track your Order</span>
                        <span className="hover:text-[#E52659] hover:font-bold hidden lg:block lg:ml-3" >Help</span>
                    </div>
                </div>

                <div className='flex  lg:flex-row justify-between mt-4'>
                <h1 className="text-[#FF2A63] font-bold hidden lg:block lg:text-2xl mt-4 ">Sonjinwoo</h1>

                <>
                    <SearchBar />
                </>
                
                <span className='lg:flex lg:flex-row hidden'>
                    <img alt='smileyIcon' src={smiley} />
                    <p className='mt-3 lg:hover:text-[#E52659] hover:font-bold'>Account</p>
                </span>
                
                <Link to='/checkout' className='hidden lg:flex lg:flex-row lg:hover:text-[#E52659]' >
                    <img alt='cartIcon' src={cart} className='m-2 '/>
                    <p className='mt-3 lg:hover:text-[#E52659] hover:font-bold'>Cart</p>
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
            