import { useState } from 'react';
import { Link } from 'react-router-dom';

import icon1 from '../asset/svg/icon1.svg';
import divider from '../asset/svg/divider.svg';
import cart from '../asset/svg/cart.svg';
import smiley from '../asset/svg/smiley.svg';
import SearchBar from './SearchBar';
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


const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const onClickHandler = () => {
        setIsOpen(!isOpen);
    };


    return (
        <>
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
                
                <div className={`lg:hidden fixed top-0 left-0 bg-[#ffffff] p-4 z-50 transform 
                ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform`}>
                    <button onClick={onClickHandler} className='text-5xl text-[#FF2A63]'> &times; </button>

                    <ul className=''>
                    <li className='flex flex-row mb-[10px]'><img src={electronic} alt='electronic' /> Electronics</li>
                    <li className='flex flex-row mb-[10px]'><img src={telecoms} alt='telecoms' />Telecommunication</li>
                    <li className='flex flex-row mb-[10px]'><img src={food} alt='food'/>Food</li>
                    <li className='flex flex-row mb-[10px]'><img src={sport} alt='sport'/>Sports</li>
                    <li className='flex flex-row mb-[10px]'><img src={finance} alt='finance'/>Finances</li>
                    <li className='flex flex-row mb-[10px]'><img src={photo} alt='photography'/>Photography</li>
                    <li className='flex flex-row mb-[10px]'><img src={business} alt='business'/>Business</li>
                    <li className='flex flex-row mb-[10px]'><img src={health} alt='health' />Health</li>
                    <li className='flex flex-row mb-[10px]'><img src={travel} alt='travel'/>travel</li>
                    <li className='flex flex-row mb-[10px]'><img src={store} alt='store'/>Stores</li>
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