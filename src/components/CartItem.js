import { useSelector } from 'react-redux';
// import {cartActions} from '../store/cart-slice.js';




const CartItem = () => {
    const movieUrl = 'https://api.timbu.cloud/images/';

    const cartItems = useSelector((state) => state.cart.cartItems)
    console.log(cartItems, '........')

    // const dispatch = useDispatch();

    // const incrementQuantityHandler = (cartItem) => {
    //     dispatch(cartActions.incrementQuantity(cartItem))
    // };
    // const decrementQuantityHandler = (cartItem) => {
    //     dispatch(cartActions.decrementQuantity(cartItem))
    // };


    return (
        <ul className=' w-[79.1%] h-[190px] mt-[97px] pt-[10rem]'>
            {cartItems.map((cartItem) => (
                <li className="flex flex-row border-[1px] border-[#EDEDED] p-4 mt-[8rem] ">
                    <div className='lg:w-[114px] lg:h-[113px] mt-[8rem] bg-[#F5F5F5] rounded-lg mr-[25px] '>
                        <img src={`${movieUrl}${cartItem.image}`} alt={cartItem.name} 
                        className='w-[62px] leading-[25.2px] m-auto mt-[0.8rem] ' />
                    </div>

                    <div className="flex ml-[164px] lg:ml-[2.8rem] flex-col w-[198%] h-[119px] gap-[231px]  mt-[8rem]">
                        <div className=' flex flex-row justify-between'>
                            <p className='lg:ml-[163px] text-[24px] text-black '>{cartItem.name} </p>
                            <p className='ml-[26px]'>#{cartItem.price} </p>
                        </div>

                        <div className='flex flex-row '>
                            <div className='flex flex-col'>
                                <button className='bg-[#E6E6E6] text-[14px] py-[1px] px-[3px] lg:py-[px] lg:px-[5px] 
                                rounded-sm mb-[3rem] '>Watches</button>

                                <button className='ml-3 bg-[#E6E6E6] text-[14px] py-[1px] px-[4px]  lg:mt-0 
                                rounded-sm '>Official store</button>
                            </div>

                            <div className='flex flex-row'>
                                <button 
                                // onClick={() => decrementQuantityHandler(cartItem)}  
                                className="gap-[10px] 'w-6 h-6 bg-transparent rounded-full flex items-center 
                                justify-center border-[1px] text-[#807E7E] border-[#807E7E]
                                hover:bg-[#E52659] hover:border-[#E52659]  hover:text-white mt-[8rem] text-3xl ">-</button>
                                <span className='text-3xl mt-[8rem]'>{cartItem.quantity}</span>
                                <button 
                                // onClick={() => incrementQuantityHandler(cartItem)} 
                                className="gap-[10px] mt-[120px] 'w-6 h-6 bg-transparent rounded-full flex items-center 
                                justify-center border-[1px] text-[#807E7E] border-[#807E7E]
                                hover:bg-[#E52659] hover:border-[#E52659]  hover:text-white text-3xl">+</button>
                            </div>
                        </div>
                    </div>
                </li>
            ))} 
        </ul>
    )
};

export default CartItem;