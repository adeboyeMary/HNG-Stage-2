import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../store/cart-slice';

import delivery from '../asset/svg/delivery.svg';
import visa from '../asset/svg/visa.svg';
import { Link } from 'react-router-dom';


const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems)
    const total = useSelector(state => state.cart.total);
    console.log(total, '....../////whats in here.........');
    const price = useSelector(state => state.cart.price);
    const quantity = useSelector(state => state.cart.quantity);
    console.log(quantity, '/////whats in here./////');
    const movieUrl = 'https://api.timbu.cloud/images/';
    const dispatch = useDispatch();

    // if (cartItems === 0){
    //     return <p className='font-bold text-red-500 text-center'>Cart is empty!</p>
    // }

    const incrementQuantityHandler = (cartItem) => {
        dispatch(cartActions.incrementQuantity(cartItem))
    };
    const decrementQuantityHandler = (cartItem) => {
        dispatch(cartActions.decrementQuantity(cartItem))
    };
    const clearCartHandler = (cartItem) => {
        dispatch(cartActions.clearCart(cartItem));
    };


    return (
        
        <div className='relative flex flex-col lg:flex-row mt-[96px] justify-center '>
           {cartItems.map((cartItem) => (
                <div className='flex flex-row bg-[#FFFFFF] border-[1px] border-[#EDEDED] space-between 
                w-[591px] rounded-md py-4 '>
                <div className='bg-[#EDEDED] w-[150px] rounded-xl ml-3 '>
                    <img src={`${movieUrl}${cartItem.image}`} alt='product' className='w-[100px] m-auto mt-5' />
                </div>

                <div className='flex flex-col ml-6'>
                    <p className='text-[17px] text-black '>{cartItem.name}</p>
                    <button className='bg-[#EDEDED] text-[14px] py-[1px] px-[1px] mt-4 '>Watches</button>
                    <button className='bg-[#EDEDED] text-[14px] py-[1px] px-[3px] mt-2 '>Official store</button>
                    <button onClick={() => clearCartHandler(cartItem)}
                        className=' hover:bg-[#E52659] hover:border-[#E52659] bg-[#FF2A63] 
                        px-[15px] py-[1px] ml-[2rem] mt-[2rem] rounded-md text-white'>Clear</button>
                </div>

                <div className='flex flex-column ml-[6.9rem]'>
                    <p className='ml-4'>#{cartItem.price}</p>
                    <div className='flex flex-row mt-[10px] '>
                        <button 
                        onClick={() => decrementQuantityHandler(cartItem)}  
                                className="gap-[10px] w-[25px] h-[25px] bg-transparent rounded-full flex items-center 
                                justify-center border-[1px] text-[#807E7E] border-[#807E7E]
                                hover:bg-[#E52659] hover:border-[#E52659]  hover:text-white 
                                mt-[8rem] text-2xl mr-4"
                            >
                                -
                        </button>
                        <span className='mt-[8rem] text-xl mr-4 '>{cartItem.quantity}</span>
                        <button 
                        onClick={() => incrementQuantityHandler(cartItem)} 
                            className="gap-[10px] w-[25px] h-[25px] bg-transparent rounded-full flex items-center 
                            justify-center border-[1px] text-[#807E7E] border-[#807E7E]
                            hover:bg-[#E52659] hover:border-[#E52659]  hover:text-white mr-2 mt-[8rem] text-2xl">
                                +
                        </button>
                    </div>
                </div>
                </div>
            ))}
            
            {/* {cartItems.map((cartItem) => ( */}
                <div>
                
                    <div className='flex flex-row ml-4'>
                        <img src={delivery} alt='delivery' />
                        <p className='ml-3'>Payment method</p>
                        <hr className='border-[1px] border-[#807E7E] '></hr>
                    </div>
                    
                
                
                    <div className='flex flex-row ml-4'>
                        <img src={visa} alt='visa' />
                        <select className='w-[355px] h-[46px] border-[1px] border-grey bg-[#FCFCFC]  */}
                            rounded-[10px] my-[1rem] px-[2px] '>
                            <option value= '' disabled selected>Visa</option>
                        </select> 
                    </div>

                    <div className=' bg-white border-[1px] h-[116px] border-[#807E7E] rounded-lg px-4 ml-4'>
                        <div className='flex flex-row'>
                            <div>
                                <p className='text-16px '>item({cartItems.quantity})</p>
                                <p className='text-16px mt-[2rem] '>Subtotal</p>
                            </div>
                            <div className='ml-[15rem] '>
                                <p>#{price}</p>
                                <p className='mt-[2rem]'>#{cartItems.total}</p>
                            </div>
                        </div>

                        <Link to='/'>
                            <button className='hover:bg-[#E52659] hover:border-[#E52659] text-white
                            bg-[#FF2A63] px-[15px] py-[1px] ml-[7rem] rounded-md '>Proceed to checkout</button>
                        </Link>
                    </div>
                </div>
            {/* ))} */}
            
        </div>

         
    )
};

export default Cart;