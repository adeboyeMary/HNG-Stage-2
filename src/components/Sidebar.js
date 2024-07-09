import { useState } from 'react';
import { Link } from 'react-router-dom';

import icon1 from '../asset/svg/icon1.svg';
import divider from '../asset/svg/divider.svg';
import cart from '../asset/svg/cart.svg';
import smiley from '../asset/svg/smiley.svg';
import SearchBar from './SearchBar';


const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const onClickHandler = () => {
        setIsOpen(!isOpen);
    };
    const searchHandler = () => {
        setIsSearchOpen(!isSearchOpen);
    };


    return (
        <>
        {/* className='lg:hidden bg-white flex flex-row w-[100%] justify-between' */}
            <div >
                <div className='m-auto'>
                    <div className='flex flex-row justify-between m-auto w-[94.67%]'>
                    <button onClick={onClickHandler} className='lg:hidden'>
                        <img alt='Icon1' src={icon1}></img>
                    </button>
                    <div className='flex flex-row'>
                        <img alt='smileyIcon' src={smiley} className='m-2 '/>
                        <img alt='dividerIcon' src={divider} className='m-2'/>
                        <Link to='/checkout' ><img alt='cartIcon' src={cart} className='m-2'></img></Link>
                    </div>
                    </div>
                    <SearchBar />
                </div>

                {/* <div className={`lg-hidden flex flex-row w-[94.67%] m-auto h-[34px] bg-[#EDEDED] rounded-md
                    S{isSearchOpen ? 'block' : 'hidden' }`}> 
                    <img src={search} alt="searchIcon" className="bg-transparent w-[45.5px]"></img>
                    <img alt='dividerIcon' src={divider} className='bg-[#EDEDED] m-2 '/>
                    <input className="bg-[#EDEDED] w-[289.5px] p-2 text-[14px] " 
                    type="text" placeholder='At first there was nothing...' />
                </div> */}
                
                
                <div className={`lg:hidden fixed top-0 left-0 bg-[#ffffff] p-4 z-50 transform 
                ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform`}>
                    <button onClick={onClickHandler} className='text-5xl text-[#FF2A63]'> &times; </button>

                    <ul className=''>
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
                </div>

                <div onClick={onClickHandler} className={`fixed top-0 left-0 w-full h-full bg-[black] 
                bg-opacity-50 transition-opacity duration-300 ease-in 
                ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} lg:hidden`} ></div>
            </div>
        </>
    )
};

export default Sidebar;