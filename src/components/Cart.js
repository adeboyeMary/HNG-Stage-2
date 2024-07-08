import { Link } from "react-router-dom";

import DealsOfTheDayProducts from "./DealsProducts";
import { DUMMY_DEALS } from "../constant/Dummy_deals";


const Cart = ({items}) => {
    return (
        <>
            <DealsOfTheDayProducts items={DUMMY_DEALS} />
            <Link to='/orderSuccessful'>
                <p>Checkout</p>
            </Link>
        </>
    )
};

export default Cart;