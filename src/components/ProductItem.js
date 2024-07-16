import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { cartActions } from '../store/cart-slice';

import delivery from '../asset/svg/delivery.svg';
import love from '../asset/svg/love.svg';
import star2 from '../asset/svg/star2.svg';



const ProductItem = ({product}) => {
    const movieUrl = 'https://api.timbu.cloud/images/';
    const dispatch = useDispatch();

    const addToCartHandler2 = (product) => {
        dispatch(cartActions.addToCart(product))
        console.log('dispatched addToCart')
    };
    
    return (
        <div className="flex flex-col lg:flex lg:flex-row mt-[98px] p-5 w-[94.67%] 
        lg:w-[89.58%] m-auto bg-[#FCFCFC] ">
            <div className='flex flex-row'>
                <div className="w-[120px] h-[268px] gap-[7px] flex flex-col lg:gap-[14px] ">
                    <img src={`${movieUrl}${product.photos[0]?.url}`} alt={product.name} className='w-[61px]'/>
                    <img src={`${movieUrl}${product.photos[0]?.url}`} alt={product.name} className='w-[61px]'/>
                    <img src={`${movieUrl}${product.photos[0]?.url}`} alt={product.name} className='w-[61px]'/>
                    <img src={`${movieUrl}${product.photos[0]?.url}`} alt={product.name} className='w-[61px]'/>
                </div>
                <div className="w-[336px] h-[268px] text-[16px] lg:w-[300px] lg:ml-[11px] ">
                    <img src={`${movieUrl}${product.photos[0]?.url}`} alt={product.name}
                    className='w-[284px] h-[268px] lg:w-[400px] lg:h-[290px] rounded-[5px] 
                    m-auto left-[81px] lg:ml-[-4rem] opacity-[90%] ' />
                </div>
            </div>
            

            <div className="ml-[20px] lg:gap-[10px] lg:ml[0px] ">
                <div className='w-[355px] h-[40px] text-[16px]  font-bold text-black mt-3 '>
                    <span className=' '>{product.name} -</span>
                    <span>{product.description} </span>
                </div>
                
                <div className="flex flex-row my-3 lg:ml-[3px]">
                    <p className='ml-[10px] '>#{product.current_price[0]?.NGN}</p>
                    <p className='discount text-[#FF2A63] mr-[5px] '>#450,000</p>
                </div>
                <div className='flex flex-row text-[12px] gap-[10px]'>
                    <img src={star2} alt='star' className='gap-[3.4px]' />
                    <span>4.0</span>
                </div>

                <div className='flex flex-row text-center text-black gap-[10px]'>
                    <span className='bg-[#E6E6E6] text-[11px] py-[5px] px-[7px]'>Watches</span>
                    <span className='ml-3 bg-[#E6E6E6] text-[11px] py-[5px] px-[7px] '>Official store</span>
                </div>
                <div >
                <select className='w-[300px] h-[46px] border-[1px] border-grey bg-[#FCFCFC] 
                rounded-[10px] my-[1rem] px-[2px] '>
                    <option value= '' disabled selected>Details</option>
                </select>
                </div>
            </div>

            

            <div className='flex flex-col w-[407px] h-[324.06px] lg:ml-5'>
                <div className='flex flex-row'>
                    <img src={delivery} alt="deliver"  />
                    <span className='ml-[6px] text-[14px] mt-[3px] '>Delivery</span>
                    {/* <hr className='mb-[2rem] border-[2px] border-grey ' /> */}
                </div>
                <div className='bg-[#FCFCFC] my-[1rem] '>
                    <select className='bg-[#FCFCFC] w-[355px] gap-[260px] px-[2px] '>
                        <option value= '' disabled selected>Shipping to </option>
                    </select>
                
                    <p className='text-[12px] '>{product.description} </p>
                </div>
                <div className='flex flex-row'>
                    <img src={love} alt='love' />
                    <Link t0='/cart'>
                    <button onClick={() => addToCartHandler2(product)} className='bg-[#FF2A63] text-white px-[6rem] py-[0.2rem] lg:mt-2 rounded-md 
                    hover:bg-[#E52659] '>Add to cart</button>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default ProductItem;