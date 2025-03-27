import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Cart from "../components/Cart";

import delivery from '../asset/svg/delivery.svg';
import visa from '../asset/svg/visa.svg';


const Checkout = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    // const { cartItems } = useSelector((state) => state.cart);
   

    
    if (!cartItems || cartItems.length === 0){
        return <p className='font-bold text-red-500 text-5xl text-center'>Cart is empty!</p>
    }


    console.log(cartItems, ".....Current cart items");

    
    return (
        <>
            {/* {error && <p>{error} </p>} */}
            <Cart />
        </>
    )
};

export default Checkout;


