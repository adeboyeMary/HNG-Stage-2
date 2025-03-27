import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { cartActions } from '../store/cartSlice';

import delivery from '../asset/svg/delivery.svg';
import love from '../asset/svg/love.svg';
import loveFilled from '../asset/png/filledHeart.png';
import star2 from '../asset/svg/star2.svg';
import { useState } from 'react';
import Modal from './ui/Modal';


const ProductItem = ({products}) => {
    const dispatch = useDispatch();
    const [isAdded, setIsAdded] = useState(false);
    const [showModal, setShowModal] = useState(false);


    const addToCartHandler = (product) => {
        // dispatch(cartActions.addToCart(product))
        // console.log('dispatched addToCart')
        setIsAdded(true);
        setShowModal(true);
    };
    const closeModalHandler = () => {
        setShowModal(false);
    };
    
    return (
        <div className=" mt-[98px] lg:mt-[7rem] p-5 w-[94.67%] m-auto lg:p-4 lg:w-[89.58%] lg:m-auto 
            bg-[#FCFCFC] ">
            {products.map((product) => (
                <div key={product.id} className='productItemContainer flex flex-col md:flex-col lg:flex-row
                    lg:flex-nowrap text-black text-[15px] gap-[2rem] md:gap-[2rem] lg:mt-[2rem]
                     sm:gap-[3rem]  md:pt-5  sm:flex-col '>
                    <div className='flex flex-row gap-[0.7rem] lg:gap-[0.25rem] lg:w-[33%] md:m-auto xl:gap-1 
                        md:gap-[1.25rem] sm:gap-[0.40rem] w-[88%] m-auto lg:m-0 md:w-[53%] '>
                        <div className="w-[25%] h-[86%] gap-[7px] flex flex-col lg:gap-[14px] lg:w-[83px] 
                            md:w-[52px] sm:w-[84px] ">
                            <img src={product.image} alt={product.title} className=' h-[65px] '/>
                            {/* w-[61px] */}
                            <img src={product.image} alt={product.title} className=' h-[65px] '/>
                            <img src={product.image} alt={product.title} className=' h-[65px] '/>
                            <img src={product.image} alt={product.title} className=' h-[65px] '/>
                        </div>
                        <div className="  text-[16px] lg:w-[300px] lg:ml-[11px] ">
                            <img src={product.image} alt={product.title}
                            className='w-[284px] h-[268px] m-auto lg:w-[32rem] lg:h-[290px] rounded-[5px] 
                             lg:m-auto xl:m-auto left-[81px] lg:ml-[-4rem] opacity-[90%]  ' />
                        </div>
                    </div>

                    <div className="sm:ml-[20px] lg:gap-[10px] lg:ml[0px] md:ml-0 md:mt-[2rem] lg:ml-[rem] 
                        mt-[1.3rem] lg:mt-0 md:w-[100%] lg:w-[42%] ">
                        <div className='text-black '>
                            <p className='md:text-[29px] lg:text-[32px] font-bold lg:mb-[0.8rem] sm:text-[28px]
                                text-[20.5px] '>{product.title} -</p>
                            <p className='lg:text-[15px] md:text-[15px] text-[13px] '>{product.description} </p>
                        </div>
                
                        <div className="flex flex-row my-3 lg:mt-3 lg:gap-5 gap-5 lg:text-[15px] text-[13px]">
                            <p className=' '>Price: ${product.price}</p>
                            <p className='discount text-[#FF2A63] mt-0 '>40%</p>
                        </div>
                        <div className='lg:mt-[0.5rem] '>
                            <p className=''>Category: {product.category}</p>
                        </div>

                        <div className='flex flex-row text-[13px] gap-[10px] lg:mt-[0.5rem] '>
                            <img src={star2} alt='star' className='h-[14px] ' />
                            <span>{product.rating.rate} </span>
                        </div>

                        <div className='flex flex-row text-center text-black gap-[10px] lg:mt-[0.5rem] '>
                            <span className='bg-[#E6E6E6] text-[11px] py-[5px] px-[7px]'>Watches</span>
                            <span className='ml-3 bg-[#E6E6E6] text-[11px] py-[5px] px-[7px] '>Official store</span>
                        </div>
                        <div >
                        {/* <select className='w-[300px] h-[46px] border-[1px] border-grey bg-[#FCFCFC] 
                        rounded-[10px] my-[1rem] px-[2px] '>
                            <option value= '' disabled selected>Details</option>
                        </select> */}
                        </div>
                    </div>

                    <div className='flex flex-col h-[324.06px] lg:w-[25%] lg:ml-5'>
                        <div className='flex flex-row'>
                            <img src={delivery} alt="deliver"  />
                            <span className='ml-[6px] text-[14px] mt-[3px] '>Delivery</span>
                            <hr className='mb-[2rem] border-[2px] border-grey ' />
                        </div>
                        <div className='bg-[#FCFCFC] my-[1rem] '>
                            {/* <select className='bg-[#FCFCFC] w-[355px] gap-[260px] px-[2px] '>
                                <option value= '' disabled selected>Shipping to </option>
                            </select> */}
                
                            <p className='text-[10.5px] '>{product.description} </p>
                        </div>
                        <div className='flex flex-row'>
                            <img src={isAdded ? loveFilled : love } alt='love' 
                            className={isAdded ? 'h-[33px] mt-[-1px] mr-[1rem] lg:mt-[6px] ' : 'mt-[-7px] lg:mt-[3px]'} />
                            <Link to=''>
                            <button onClick={addToCartHandler}
                            className='bg-[#FF2A63] text-white px-[4rem] py-[0.4rem] lg:mt-2 rounded-md 
                            hover:bg-[#E52659] lg:px-[3rem] lg:py-[0.4rem] lg:text-[13px] md:px-[3.5rem] 
                            md:py-[0.4rem] xl:px-[4rem] text-[12px] '>Add to cart</button>
                            </Link>
                        </div>
                    </div>

                    {showModal && (
                        <Modal onHideOverlay={closeModalHandler}>
                            <div className='bg-[#F5F5F5] p-5 '>
                                <h1 className='font-bold mb-3 text-[13px] md:text-[14px] lg:text-[18px] '>
                                    Added to cart!
                                </h1>
                                <div className='lg:ml-[3rem] '>
                                    <Link to='/'>
                                        <button className='bg-[#FF2A63] text-white border-[#FF2A63] px-2 
                                            py-1 rounded-sm hover:bg-transparent hover:border-[#FF2A63] 
                                            hover:border-solid hover:border-[1px] text-[13px] md:text-[13px]
                                            hover:text-[#FF2A63]'>Back to Home
                                        </button>
                                    </Link>
                                    <button onClick={closeModalHandler}
                                    className='bg-transparent border-[#FF2A63] border-solid border-[1px] 
                                    text-[#FF2A63] ml-[1rem] text-[13px] lg:ml-[2rem] hover:border-[#FF2A63] px-3.5  py-1
                                    hover:bg-[#FF2A63] hover:text-white 
                                    rounded-sm'>Close</button>
                                </div>
                            </div>
                        </Modal>
                    )}
                </div>
            ))}
        </div>


                //  <button onClick={() => addToCartHandler2(product)} className='bg-[#FF2A63] 
                // text-white px-[6rem] py-[0.2rem] lg:mt-2 rounded-md 
                // hover:bg-[#E52659] '>Add to cart</button>
                    )
};

export default ProductItem;