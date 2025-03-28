import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../store/cart-slice';
import { Link } from 'react-router-dom';


const CartItems = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartItems);

    const incrementQuantityHandler = (cartItem) => {
        dispatch(cartActions.incrementQuantity(cartItem));
    };
    const decrementQuantityHandler = (cartItem) => {
        dispatch(cartActions.decrementQuantity(cartItem));
    };
    const clearCartHandler = () => {
        dispatch(cartActions.clearCart());
    };

    return (
        <div className="flex flex-col lg:w-[60%] ">
            {cartItems?.map((cartItem) => (
                <div key={cartItem.id} className='flex flex-row bg-[#FFFFFF] border-[1px] border-[#EDEDED] space-between 
                     rounded-md p-[1rem] gap-[1rem]  '>
                    <div className='bg-[#EDEDED] p-[19px] rounded-xl h-[100%] sm:h-[1] md:w-[29%] lg:h-[100%] '>
                        <img src={cartItem.image} alt='product' className='w-[100px] m-auto ' />
                    </div>

                    <div className='flex flex-col w-[40%] '>
                        <p className='text-[14px] lg:text-[17px] text-black '>{cartItem.title}</p>
                        <button className='bg-[#EDEDED] text-[13px] self-center w-[93%] sm:w-[75%] md:w-[40%] lg:w-[52%] mt-4 '>
                            Watches
                        </button>
                        <button className='bg-[#EDEDED] text-[13px] self-center w-[93%] sm:w-[75%] md:w-[40%] lg:w-[52%] mt-2 '>
                            Official store
                        </button>
                    
                    </div>

                    <div className='w-[26%]'>
                        <p className=''>#{cartItem.price}</p>
                        <div className='flex flex-row gap-[1rem] '>
                            <button 
                                onClick={() => decrementQuantityHandler(cartItem)}  
                                className="gap-[10px] w-[25px] h-[25px] lg:h-[25px] bg-transparent rounded-full flex items-center 
                                    justify-center border-[1px] text-[#807E7E] border-[#807E7E] text-[18px]
                                    hover:bg-[#E52659] hover:border-[#E52659]  hover:text-white 
                                    mt-[3rem] lg:text-2xl"
                            >
                                -
                            </button>
                            <span className='mt-[3rem] text-xl '>{cartItem.quantity}</span>
                            <button 
                                onClick={() => incrementQuantityHandler(cartItem)} 
                                className="gap-[10px] w-[25px] h-[25px] bg-transparent rounded-full flex items-center 
                                justify-center border-[1px] text-[#807E7E] border-[#807E7E]  text-[18px]
                                hover:bg-[#E52659] hover:border-[#E52659]  hover:text-white mt-[3rem] lg:text-2xl">
                                    +
                            </button>
                        </div>
                    </div>
                </div>
            ))}
            <div className='flex flex-row gap-[2rem] w-[97%] justify-end '>
                <button onClick={ clearCartHandler}
                    className=' hover:bg-[#E52659] hover:border-[#E52659] bg-[#FF2A63]  mt-[0.7rem] px-[0.9rem]
                    lg:py-[2px] rounded-md text-white lg:justify-end '>Clear cart
                </button>
                <Link to='/' >
                    <button className=' hover:bg-[#E52659] hover:border-[#E52659] bg-[#FF2A63]  mt-[0.7rem] px-[0.9rem]
                         lg:py-[2px] rounded-md text-white lg:justify-end '>Back to home
                    </button>
                </Link>
            </div>
        </div>
    )
};

export default CartItems;