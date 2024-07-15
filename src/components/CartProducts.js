import { Link } from 'react-router-dom';

import wristwatch from '../asset/png/wristwatch.png';
import { useState } from 'react';

const CartProducts = () => {
    const [count, setCount] = useState(1);

    const increaseProductHandler = () => {
        setCount(count + 1);
    };
    const decreaseProductHandler = () => {
        setCount(count - 1);
    };


    return (
        <div className="products flex flex-col text-black text-xs lg:flex lg:flex-row m-auto 
        lg:w-[63.49%] p-2">
            <div className='flex flex-col '>
                <div className="flex flex-row  bg-white border-[1px] border-[#EDEDED] 
                    mb-[10px] rounded-md p-3">

                    <div className='bg-[#E6E6E6] w-[91px] p-[8px] rounded-md'>
                        <img src={wristwatch} alt="wristwatch"/>
                    </div>

                    <div className='ml-[8px]'>
                        <div className="flex flex-row justify-between">
                            <p className='text-sm mb-[12px]'>Apple watch ultra</p>
                            <p className='ml-[44px]'>#376,000</p>
                        </div>

                        <span className='bg-[#E6E6E6] py-[3px] px-[7px] lg:py-[3px] 
                        lg:px-[5px] rounded-sm '>Watches</span>
                        <div className='flex flex-row justify-between'>
                            <span className='mt-2 bg-[#E6E6E6] py-[2px] px-[5px] rounded-sm '>Official store</span>
                            <div className='flex flex-row space-x-2 text-[#807E7E] mt-[9px]'>
                                <button onClick={decreaseProductHandler} className='w-6 h-6 bg-transparent rounded-full flex items-center 
                                justify-center border-[1px] text-[#807E7E] border-[#807E7E]
                                hover:bg-[#E52659] hover:border-[#E52659]  hover:text-white'>-</button>
                                <p className=' text-lg '>{count}</p>
                                <button onClick={increaseProductHandler} className='w-6 h-6 bg-transparent rounded-full flex items-center 
                                justify-center border-[1px] text-[#807E7E] border-[#807E7E]
                                hover:bg-[#E52659] hover:border-[#E52659]  hover:text-white'>+</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row  bg-white border-[1px] border-[#EDEDED] 
                mb-[10px] rounded-md p-3">
                    <div className='bg-[#E6E6E6] w-[91px] p-[8px] rounded-md'>
                        <img src={wristwatch} alt="wristwatch"/>
                    </div>
                    <div className='ml-[8px]'>
                        <div className="flex flex-row justify-between">
                            <p className='text-sm mb-[12px]'>Apple watch ultra</p>
                            <p className='ml-[44px]'>#376,000</p>
                        </div>

                        <span className='bg-[#E6E6E6] py-[3px] px-[7px] lg:py-[3px] 
                        lg:px-[5px] rounded-sm '>Watches</span>
                        <div className='flex flex-row justify-between'>
                            <span className='mt-2 bg-[#E6E6E6] py-[2px] px-[5px] rounded-sm '>Official store</span>
                            <div className='flex flex-row space-x-2 text-[#807E7E] mt-[9px]'>
                                <button className='w-6 h-6 bg-transparent rounded-full flex items-center 
                                justify-center border-[1px] text-[#807E7E] border-[#807E7E]
                                hover:bg-[#E52659] hover:border-[#E52659]  hover:text-white'>-</button>
                                <span className='text-lg'>1</span>
                                <button className='w-6 h-6 bg-transparent rounded-full flex items-center 
                                justify-center border-[1px] text-[#807E7E] border-[#807E7E]
                                hover:bg-[#E52659] hover:border-[#E52659]  hover:text-white'>+</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row bg-white border-[1px] border-[#EDEDED] 
                mb-[10px] rounded-md p-3">
                    <div className='bg-[#E6E6E6] w-[91px] p-[8px] rounded-md'>
                        <img src={wristwatch} alt="wristwatch"/>
                    </div>
                    <div className='ml-[8px]'>
                        <div className="flex flex-row justify-between">
                            <p className='text-sm mb-[12px]'>Apple watch ultra</p>
                            <p className='ml-[44px]'>#376,000</p>
                        </div>

                        <span className='bg-[#E6E6E6] py-[3px] lg:mt-3 px-[7px] lg:py-[3px] 
                        lg:px-[5px] rounded-sm '>Watches</span>
                        <div className='flex flex-row justify-between'>
                            <span className='mt-2 bg-[#E6E6E6] py-[2px] px-[5px] rounded-sm '>Official store</span>
                            <div className='flex flex-row space-x-2 text-[#807E7E] mt-[9px] '>
                                <button className='w-6 h-6 bg-transparent rounded-full flex items-center 
                                justify-center border-[1px] text-[#807E7E] border-[#807E7E]
                                hover:bg-[#E52659] hover:border-[#E52659]  hover:text-white'>-</button>
                                <span className='text-lg'>1</span>
                                <button className='w-6 h-6 bg-transparent rounded-full flex items-center 
                                justify-center border-[1px] text-[#807E7E] border-[#807E7E] 
                                hover:bg-[#E52659] hover:border-[#E52659] hover:text-white'>+</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className='border-[1px] bg-white border-[#EDEDED] rounded-md p-3 lg:ml-5'>
                <div className='flex flex-row justify-between'>
                    <p>items(4)</p>
                    <p>#1,504,000</p>
                </div>

                <div className='flex flex-row justify-between'>
                    <p>Shipping</p>
                    <p>#7500</p>
                </div>
                <div className='flex flex-row justify-between mt-8 '>
                    <p>Subtotal</p>
                    <p>#1,511,500</p>
                </div>
                <Link to='/'>
                <button className='bg-[#FF2A63] text-white px-[75px] py-[3px] ml-[27px] mt-[21px] 
                m-4 rounded-md hover:bg-[#E52659] '>Proceed to checkout</button>
                </Link>
                
            </div>
        </div>
    )
};

export default CartProducts;