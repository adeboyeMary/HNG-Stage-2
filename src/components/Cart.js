import { Link } from "react-router-dom";

import DealsOfTheDayProducts from "./DealsProducts";
import { DUMMY_DEALS } from "../constant/Dummy_deals";
import CartProducts from "./Cartproducts";




const Cart = ({items}) => {
    return (
        <div className="relative mt-[112px] bg-[#F5F5F5]">
            <CartProducts />
            
            <DealsOfTheDayProducts items={DUMMY_DEALS} />
        </div>
    )
};

export default Cart;