import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



import CartItem from "./CartItem";
import delivery from '../asset/svg/delivery.svg';
import visa from '../asset/svg/visa.svg';
import ProductList from './ProductList';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems)

    return (
        <>
        <div className=' flex flex-col mt-[116px] top-[60px] lg:flex lg:flex-row lg:mt-[116px] z-[50] sticky lg:m-auto '>
            <CartItem />
            <div className='w-[398px] h-[284px] lg:ml-[10rem] rounded-[10px] border-[1px] border-white '>
                {cartItems.map((cartItem) => (
                    <div>
                        <div className='flex fex-row mt-[8rem] '>
                            <img src={delivery} alt='delivery' />
                            <p className='text-[16px]'>Payment method</p>
                            <hr />
                        </div>
                        
                        <div className='flex flex-row'>
                            <img src={visa} alt='visa' />
                            <select className='w-[355px] h-[46px] border-[1px] border-grey bg-[#FCFCFC] 
                                rounded-[10px] my-[1rem] px-[2px] '>
                                <option value= '' disabled selected>Visa</option>
                            </select>
                        </div>
                        <div className='flex flex-row'>
                            <span>item({cartItem.quantity})</span>
                        <span>#{cartItem.price}</span>
                        </div>
                        <div className='flex flex-row'>
                            <span>Subtotal</span>
                            <span>#{cartItem.total}</span>
                        </div>
                        <Link>
                            <button className='bg-[#FF2A63] text-white px-[75px] py-[3px] ml-[27px] mt-[21px] 
                        m-4 rounded-md hover:bg-[#E52659] '>Proceed to checkout</button>
                        </Link>
                    </div>
                ))}

            </div>
        </div>
        {/* <ProductList /> */}
        </>
    )
};

export default Cart;