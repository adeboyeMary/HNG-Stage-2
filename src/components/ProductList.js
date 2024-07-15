import { Link } from 'react-router-dom';
// import { useContext } from 'react';

import { useDispatch } from 'react-redux';

// import full from '../asset/png/fullFlash.png';

import HorizontalScroller from './HorizontalScroller';
import Card from './ui/Card';
import star from '../asset/svg/star.svg';

// import CartContext from '../store/CartContext.js';
import {cartActions} from '../store/cart-slice.js';




const ProductList = ({products}) => {
    const dispatch = useDispatch();
    const movieUrl = 'https://api.timbu.cloud/images/';

    // const cartCtx = useContext(CartContext);

    // const addToCartHandler = (product) => {
    //     cartCtx.addItem(product)
    // };
   
    const addToCartHandler2 = (product) => {
        dispatch(cartActions.addToCart(product))
        console.log('dispatched addToCart')
    };

    return (
        <div  className='ml-3 bg-white rounded-sm p-3 w-[94.67%] lg:w-[89.58%] lg:m-auto lg:my-3'>
            <p className='pl-2 text-black '>Popular</p>
            <hr className='border-1 border-[#EDEDED] mt-1 mb-2 ml-2' />

            <HorizontalScroller>
            {/* bg-white w-[94-67%] mr-2 flex flex-row whitespace-normal  */}
                <ul className='bg-white w-[94-67%] mr-2 flex flex-row whitespace-normal'>
                    {products?.map((product) => (
                    <Card key={product.id}>
                        <li key={product.id} className="text-[12px] w-[195px] h-[396px]  
                         lg:m-0 lg:p-[10px] " >
                            <Link to={`/${product.id}`}>
                                <div className="bg-[#F5F5F5] m-auto pt-3 pb-3  lg:w-[147px] h-[187px] 
                                    rounded-lg">
                                    <img  src={`${movieUrl}${product.photos[0]?.url}`} alt={product.name} 
                                    className="m-auto w-[82px] h-[147px] lg:w-[139px] lg:h-[147px]" />
                                </div>
                                
                                <>
                                    <p className='text-black text-sm mt-[1rem] '>{product.name}</p>
                                    <p className="leading-3 mt-3">{product.description}</p>
    
                                    <div className="flex flex-row my-3 justify-between">
                                        <p>#{product.current_price[0]?.NGN[0]}</p>
                                        <p className='discount text-[#FF2A63] '>#450,000</p>
                                    </div>
                                    <div className=' flex-col hidden lg:block lg:flex-row text-center text-black'>
                                        <span className='bg-[#E6E6E6] py-[3px] px-[7px] lg:py-[px] lg:px-[5px] rounded-sm '>Watches</span>
                                        <span className='ml-3 bg-[#E6E6E6] py-[2px] px-[5px] mt-2 lg:mt-0 rounded-sm '>Official store</span>
                                    </div>
                                    <div className="flex flex-row my-3 justify-between">
                                        <p className='text-[11px]'>325 sold</p>
                                        <div className='flex flex-row'>
                                            <img src={star} alt='star' className='w-[10px] h-[10px] mt-[1px]' />
                                            <p className='flex flex-row  ml-[6px] text-[11px] '>4.5</p>
                                        </div>
                                        
                                    </div>
                                </>
                                    </Link>

                                    <div className=' ml-[8px] lg:ml-0 '>
                                        <button 
                                            // onClick={() => addToCartHandler(product)} 
                                            onClick={() => addToCartHandler2(product)}
                                            className='bg-[#FF2A63] text-white px-[10px] py-[10px] rounded-[4px]
                                            hover:bg-[#E52659] w-[175px] text-[12px] '
                                            >
                                                Add to cart
                                        </button>
                                    </div>
                                </li>
                            </Card>
                            ))}
                        
            
            
                
                </ul>
            </HorizontalScroller>
        </div>
        
    )
};

export default ProductList;

