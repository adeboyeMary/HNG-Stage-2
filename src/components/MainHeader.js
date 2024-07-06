import React from 'react';
import { Link } from 'react-router-dom';

import icon1 from '../media/icon1.svg';
import smiley from '../media/smiley.svg';
import divider from '../media/divider.svg';
import cart from '../media/cart.svg';
import SearchBar from './SearchBar';

const MainHeader = () => {
    return (
        <div className='w-[100%] h-[83px] '>
            {/* px-[10px] pb-[5px]  */}
            <div className="flex flex-row justify-between w-[94.67%] m-auto ">
                <Link to='/' ><img alt='Icon1' src={icon1}></img></Link>

                <div className="flex flex-row ">
                    <img alt='smileyIcon' src={smiley} className='m-2'/>
                    <img alt='dividerIcon' src={divider} className='m-2'/>
                    <Link to='/checkout' ><img alt='cartIcon' src={cart} className='mt-2 '/></Link>
                </div>
            </div>

            <SearchBar />
        </div>
        
    )
};

export default MainHeader;