import React from 'react';
import { Link } from 'react-router-dom';

import cart from '../asset/svg/cart.svg';
import smiley from '../asset/svg/smiley.svg';
import SearchBar from './SearchBar';
import Sidebar from './Sidebar';
import divider from '../asset/svg/divider.svg';
import sell from '../asset/svg/sell.svg';
import track from '../asset/svg/track.svg';
import help from '../asset/svg/help.svg';


const MainHeader = () => {
    return ( 
        <header className=' bg-white text-sm w-[100%]  mb-2 top-0 z-10 h-[96px]
        lg:w-[100%] lg:h-[97px] lg:bg-white  lg:top-0 lg:z-10 p-2'>
            <div className='hidden lg:block lg:px-[10px] '>
                <div className="flex lg:flex-row lg:justify-between ">
                    <span className='hidden lg:block lg:text-[16px]' >Good afternoon customer!</span>
                    <div className='lg:flex lg:flex-row lg:ml-2'>
                        <div className='lg:flex lg:flex-row lg:gap-[7px] lg:ml-[17px]'>
                            <img src={sell} alt='sell' />
                            <span className="hover:text-[#E52659] hover:font-bold hidden lg:block 
                            " >Sell on SamandCart</span>
                        </div>
                        <img src={divider} alt='divider' className='lg:w-[2px] lg:h-[16px] lg:bg-[#807E7E]
                        lg:ml-[3px]' />
                        <div className='lg:flex lg:flex-row lg:ml-3'>
                            <img src={track} alt='track' />
                            <span className="hover:text-[#E52659] 
                            hover:font-bold  hidden lg:block" >Track your Order</span>
                        </div>
                        <div className='lg:flex lg:flex-row lg:ml-3'>
                            <img src={help} alt='help' />
                            <span className="hover:text-[#E52659] hover:font-bold 
                            hidden lg:block " >Help</span>

                        </div>
                    </div>
                </div>

                <div className='flex  lg:flex-row justify-between mt-4 px-[2rem]'>
                    <h1 className="text-[#FF2A63] font-bold hidden lg:block lg:text-2xl lg:ml-[5rem] mt-4 ">Sonjinwoo</h1>

                    <>
                        <SearchBar id='search' name='search' />
                    </>

                    <span className='lg:flex lg:flex-row hidden'>
                        <img alt='smileyIcon' src={smiley} className='lg:hover:text-[#E52659]' />
                        <p className='mt-3 lg:hover:text-[#E52659] hover:font-bold'>Account</p>
                    </span>

                    <img src={divider} alt='divider' className='mx-2 h-[1px]' />
                
                    <Link to='/checkout' className='hidden lg:flex lg:flex-row lg:hover:text-[#E52659]' >
                        <img alt='cartIcon' src={cart} className='m-2 '/>
                        <p className='mt-3 text-[#FF2A63] lg:hover:text-[#E52659] hover:font-bold'>Cart</p>
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
            