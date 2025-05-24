import { useSelector } from 'react-redux';
// import { cartActions } from '../store/cart-slice';
import delivery from '../asset/svg/delivery.svg';
import visa from '../asset/svg/visa.svg';
import { Link } from 'react-router-dom';
import CartItems from './CartItems';
import Modal from './ui/Modal';
import { useState } from 'react';


const Cart = () => {
    // const dispatch = useDispatch();
    const {totalPrice, totalQuantity, price } = useSelector(state => state.cart);
    const [showModal, setShowModal] = useState(false);
    const cartItems = useSelector((state) => state.cart.cartItems);


    const overLayHandler = () => {
        setShowModal(true);
        // dispatch(cartActions.clearCart());
        // window.location.href = '/';
    };

    const closeModalHandler = () => {
        setShowModal(false);
        // dispatch(cartActions.clearCart());
    }

   
    return (
        <div className='mt-[118px] flex justify-center items-center w-full min-h-[50vh]'>
        {cartItems && cartItems.length > 0 ? (
        <div className='relative flex flex-col md:flex-col lg:flex-row justify-center gap-[2rem]
        w-[94%] ml-[0.7rem] md:w-[82%] md:gap-[2rem] lg:w-[75%] md:ml-[4.5rem] lg:ml-[rem] lg:gap-[1rem]'>
            {/* className='relative flex flex-col md:flex-col lg:flex-row mt-[118px] justify-center gap-[2rem] */}
            {/* w-[94%] ml-[0.7rem] md:w-[82%] md:gap-[2rem] lg:w-[75%] md:ml-[4.5rem] lg:ml-[9rem] lg:gap-[1rem] ' */}
            <CartItems />
            
            <div className='md:w-[] lg:w-[40%] '>
                <div className='flex flex-row'>
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
                            <p className='mt-[2rem]'>${totalPrice}</p>
                        </div>
                    </div>
                    
                    <button onClick={overLayHandler} 
                        className='hover:bg-[#E52659] hover:border-[#E52659] text-white py-[1px] bg-[#FF2A63] 
                        rounded-md w-[51%] ml-[5.5rem] md:w-[31%] md:ml-[12.5rem] lg:w-[53%] lg:ml-[5rem] '>
                            Proceed to checkout
                    </button>
                    

                    {showModal && (
                        <Modal onHideOverlay={closeModalHandler}>
                            <h1 className='bg-[#FF2A63] p-4 text-white font-bold text-[18px] '>Thank you for your patronage!</h1>
                            <div className='bg-[#F5F5F5] p-5 '>
                                <p className=' text-black mb-3 text-[13px] md:text-[14px] lg:text-[16px] '>
                                    Payment successful! You will receive an email shortly.
                                </p>
                                <div className='lg:ml-[3rem] '>
                                    <Link to='/'>
                                        <button className='bg-[#FF2A63] text-white border-[#FF2A63] px-2 
                                            py-1 rounded-sm hover:bg-transparent hover:border-[#72283c] 
                                            hover:border-solid hover:border-[1px] text-[13px] md:text-[13px]
                                            hover:text-[#72283c]'>Home
                                        </button>
                                    </Link>
                                    <button onClick={closeModalHandler}
                                    className='bg-transparent border-[#FF2A63] border-solid border-[1px] 
                                    text-[#FF2A63] ml-[1rem] text-[13px] lg:ml-[2rem] hover:border-[#72283c] px-3.5  py-1
                                    hover:bg-[#72283c] hover:text-white 
                                    rounded-sm'>Close</button>
                                </div>
                            </div>
                        </Modal>
                    )}
                </div>
            </div>
        </div>
         ): (
            <p className='font-bold text-red-500 text-xl text-center'>Cart is empty!</p>
        )}
        </div>
    )
};

export default Cart;