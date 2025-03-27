import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


// import Sidebar from './Sidebar';
import cart from '../asset/svg/cart.svg';
import smiley from '../asset/svg/smiley.svg';
import SearchBar from './SearchBar';


const Header = () => {
    const showCart = useSelector((state) => state.cart.cart);


    return (
        <header className="flex lg:flex-row lg:justify-between bg-white text-sm w-[100%] 
        lg:fixed top-0 z-10 p-2 ">
            <span className='hidden lg:block' >Good afternoon customer!</span>
            <div className='lg:flex lg:flex-row lg:ml-2'>
                <span className="hover:text-[#FF2A63] hidden lg:block " >Sell on SamandCart</span>
                <span className="hover:text-[#FF2A63] hidden lg:block " >Track your Order</span>
                <span className="hover:text-[#FF2A63] hidden lg:block " >Help</span>
            </div>
            <div className='flex  lg:flex-row'>
                <span className="text-[#FF2A63] font-bold hidden lg:block ">Sonjinwoo</span>
                
                <>
                    <SearchBar />
                </>
                
                <span className='lg:flex lg:flex-row hidden m-2'><img alt='smileyIcon' src={smiley} 
                className='m-2 '/>Account</span>
                
                <Link to='/checkout' className='hidden lg:flex lg:flex-row ' >
                    <img alt='cartIcon' src={cart} className='m-2 '/>
                    <span>Cart</span>
                </Link>
            </div>
        </header>
    );
};

export default Header;