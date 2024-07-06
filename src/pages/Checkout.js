import Cart from "../components/Cart";
import { DUMMY_PRODUCTS } from "../constant/Dummy-Products";

const Checkout = () => {
    return (
        <Cart items={DUMMY_PRODUCTS} />
    )
};

export default Checkout;