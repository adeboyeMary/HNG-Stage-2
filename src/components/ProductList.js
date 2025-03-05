import { Link } from 'react-router-dom';
// import { useContext } from 'react';

import { useDispatch, useSelector } from 'react-redux';

// import full from '../asset/png/fullFlash.png';

import HorizontalScroller from './HorizontalScroller';
import Card from './ui/Card';
import star from '../asset/svg/star.svg';

// import CartContext from '../store/CartContext.js';
import {cartActions} from '../store/cart-slice.js';




const ProductList = ({products}) => {
    const { loading, error } = useSelector((state) => state.products);
    console.log(products, '.....products.......');
    // const dispatch = useDispatch();
    // const movieUrl = 'https://api.timbu.cloud/images/';

    // const cartCtx = useContext(CartContext);

    // const addToCartHandler = (product) => {
    //     cartCtx.addItem(product)
    // };
   
    // const addToCartHandler2 = (product) => {
    //     dispatch(cartActions.addToCart(product))
    //     console.log('dispatched addToCart')
    // };

    return (
        <div  className='ml-3 bg-white rounded-sm p-3 w-[94.67%] lg:w-[89.58%] lg:m-auto lg:my-3'>
            <p className='pl-2 text-black '>Popular</p>
            <hr className='border-1 border-[#EDEDED] mt-1 mb-2 ml-2' />

            <HorizontalScroller>

            {/* bg-white w-[94-67%] mr-2 flex flex-row whitespace-normal  */}
                <ul className='bg-white w-[94.67%] mr-2 flex flex-row whitespace-normal gap-3 sm:gap-0 md:gap-0 lg:gap-4 '>
                    {products.map((product) => (
                        <li key={product.id} className="bg-white border-[1px] m-2 lg:m-0 p-[1rem] sm:p-[1rem] md:p-[1rem] lg:p-[1rem] 
                            w-[12rem] sm:w-[16rem] md:w-[16rem] lg:w-[16rem] border-[#EDEDED] justify-between lg:justify-between
                            hover:border-[1px] hover:border-[#E52659] h-[24rem] lg:h-[31rem] lg:break-normal flex flex-col 
                            lg:mb-[1rem] " >
                            {/* <div className=' lg:w-[100%] '> */}
                                    <div className="bg-[#F5F5F5] rounded-lg p-[0.7rem] sm:p-[0.7rem] md:p-[0.7rem] lg:p-[0.7rem] ">
                                            {/* lg:w-[147px] h-[187px]  */}
                                        {/* <img  src={`${movieUrl}${product.photos[0]?.url}`} alt={product.name}  */}
                                        <img  src={product.image} alt={product.name} className='w-[8rem] sm:w-[14rem] md:w-[14rem] 
                                        lg:w-[15rem] h-[7rem] lg:h-[15rem] ' />
                                        {/* className="m-auto w-[82px] h-[147px] lg:w-[139px] lg:h-[147px]" */}
                                    </div>
                                
                                    <div className='w-[10rem] sm:w-[18rem] md:w-[14rem] lg:w-[14rem] h-[10rem]   '>
                                        <p className='text-black text-[12px] mt-[1rem] '>{product.title}</p>
                                        {/* <p className=" mt-3 text-[12px] ">{product.description}</p> */}
    
                                        <div className="flex flex-row my-3 justify-between text-[12px]">
                                            {/* <p>#{product.current_price[0]?.NGN[0]}</p> */}
                                            <p className='font-bold'>${product.price}</p>
                                            <p className='discount text-[#FF2A63] '>#450,000</p>
                                        </div>
                                        <div className='hidden  lg:flex text-black lg:justify-between'>
                                            <span className='bg-[#E6E6E6] px-[3px] py-[2px] lg:px-[4px] rounded-sm text-[11px] '>Watches</span>
                                            <span className='ml- bg-[#E6E6E6] py-[2px] px-[5px] mt-2 lg:mt-0 lg:px-1 rounded-sm text-[11px] '>Official store</span>
                                        </div>
                                        
                                        <div className="flex flex-row my-3 justify-between">
                                            <p className='text-[11px]'>{product.rating.count} sold</p>
                                            <div className='flex flex-row'>
                                                <img src={star} alt='star' className='w-[10px] h-[10px] mt-[1px]' />
                                                <p className='flex flex-row  ml-[6px] text-[11px] '>{product.rating.rate}</p>
                                            </div>
                                        
                                        </div>
                                    </div>
                                    <div className='md:ml-[0.5rem] lg:ml-[0.5rem] '>
                                        <button className='bg-[#FF2A63] text-white px-[10px] py-[10px] rounded-[4px]
                                            hover:bg-[#E52659] w-[10rem] md:w-[13rem] lg:w-[13rem] text-[12px] '
                                            // onClick={() => addToCartHandler(product)} 
                                            // onClick={() => addToCartHandler2(product)}
                                            
                                            >
                                                Add to cart
                                        </button></div>
                                    
                            {/* </div> */}
                        </li>
                        
                    ))}
                </ul>
            </HorizontalScroller>

             {/* <div className=' ml-[8px] lg:ml-0 '>
             <Link to={`/${product.id}`}>
                                        <button 
                                            // onClick={() => addToCartHandler(product)} 
                                            onClick={() => addToCartHandler2(product)}
                                            className='bg-[#FF2A63] text-white px-[10px] py-[10px] rounded-[4px]
                                            hover:bg-[#E52659] w-[175px] text-[12px] '
                                            >
                                                Add to cart
                                        </button>
                                    </div> */}
        </div>
        
    )
};

export default ProductList;

