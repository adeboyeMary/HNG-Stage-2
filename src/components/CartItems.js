import { useSelector } from 'react-redux';

const CartItems = () => {
    const cartItems = useSelector((state) => state.cart.cartItems)
    const movieUrl = 'https://api.timbu.cloud/images/';

    return (
        <div className="flex flex-col">
            {cartItems.map((cartItem) => (
                <div>
                    <div className='bg-[#EDEDED] w-[150px] rounded-xl ml-3 '>
                        <img src={`${movieUrl}${cartItem.image}`} alt='product' className='w-[100px] m-auto mt-5' />
                    </div>
                </div>
            ))}

        </div>
    )
};

export default CartItems;