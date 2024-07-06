import { Link } from "react-router-dom";

const BottomNav = () => {
    return (
        <nav>
            <Link to='/'>Products</Link>
            <Link to='/checkout'>Checkout</Link>
        </nav>
    )
};

export default BottomNav;