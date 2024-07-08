import React from 'react';
import { Link } from 'react-router-dom';

import icon1 from '../asset/svg/icon1.svg';
import smiley from '../asset/svg/smiley.svg';
import divider from '../asset/svg/divider.svg';
import cart from '../asset/svg/cart.svg';
import SearchBar from './SearchBar';

const MainHeader = () => {
    return (
        <header className=' bg-white w-[100%] h-[83px] fixed top-0 z-10'>
            {/* px-[10px] pb-[5px]  */}
            <div className="flex flex-row justify-between w-[94.67%] m-auto ">
                <Link to='/' ><img alt='Icon1' src={icon1}></img></Link>

                <div className="flex flex-row ">
                    <img alt='smileyIcon' src={smiley} className='m-2'/>
                    <img alt='dividerIcon' src={divider} className='m-2'/>
                    <Link to='/checkout' ><img alt='cartIcon' src={cart} className='m-2 '/></Link>
                </div>
            </div>

            <SearchBar />
        </header>
        
    )
};

export default MainHeader;