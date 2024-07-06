import { Link } from "react-router-dom";


const Cart = ({items}) => {
    return (
        <>
            <ul className="bg-white text-black rounded-lg">
                {items?.map((item)=> (
                    <li key={item.id}>
                        <h2>{item.name}</h2>
                        <div>
                            <p>#{item.price}</p>
                            <p>{item.quantity}</p>
                        </div>
                        <div>
                            <button>-</button>
                            <button>+</button>
                        </div>
                    </li>
                ))}
            </ul>

            <Link to='/orderSuccessful'>
                <p>Checkout</p>
            </Link>
        </>
    )
};

export default Cart;