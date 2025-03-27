import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../store/cart-slice';
import delivery from '../asset/svg/delivery.svg';
import visa from '../asset/svg/visa.svg';
import { Link } from 'react-router-dom';
import CartItems from './CartItems';


const Cart = () => {
    const {total, totalQuantity, price } = useSelector(state => state.cart);
   
    return (
        
        <div className='relative flex flex-col md:flex-col lg:flex-row mt-[118px] justify-center gap-[2rem]
        w-[94%] ml-[0.7rem] md:w-[82%] md:gap-[2rem] lg:w-[75%] md:ml-[4.5rem] lg:ml-[9rem] lg:gap-[1rem] '>
            <CartItems />
            <div className='md:w-[] lg:w-[40%] '>
                <div className='flex flex-row'>
                {/* ml-4 */}
                    <img src={delivery} alt='delivery' />
                    <p className='ml-3'>Payment method</p>
                    <hr className='border-[1px] border-[#807E7E] '></hr>
                </div>
                    
                <div className='flex flex-row'>
                    <img src={visa} alt='visa' />
                    <select className='w-[355px] h-[46px] border-[1px] border-grey bg-[#FCFCFC]  */}
                        rounded-[10px] my-[1rem] px-[2px] '>
                        <option value= '' disabled selected>Visa</option>
                    </select> 
                </div>

                <div className=' bg-white border-[1px] border-[#807E7E] rounded-lg p-4 '>
                    <div className='flex flex-row justify-between '>
                        <div>
                            <p className='text-16px '>item({totalQuantity})</p>
                            <p className='text-16px mt-[2rem] '>Subtotal</p>
                        </div>
                        <div className=''>
                            <p>$ {price}</p>
                            <p className='mt-[2rem]'>${total}</p>
                        </div>
                    </div>

                    <Link to='/'>
                        <button className='hover:bg-[#E52659] hover:border-[#E52659] text-white py-[1px] bg-[#FF2A63] 
                        rounded-md w-[51%] ml-[5.5rem] md:w-[31%] md:ml-[12.5rem] lg:w-[53%] lg:ml-[5rem] '>
                            Proceed to checkout
                        </button>
                    </Link>
                </div>
            </div>
        </div>

         
    )
};

export default Cart;