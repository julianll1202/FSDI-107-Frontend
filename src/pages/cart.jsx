import { useContext } from "react";
import StoreContext from "../state/storeContext";
import "./cart.css";

const Cart = () => {
    const cart = useContext(StoreContext).cart;
    return (
        <div className="cart">
            <h1 className="header">You're one step closer to gaming greatness</h1>
            <h4>You have {cart.length} products in your cart, continue to checkout</h4>

            <ul className="product-list">
                {cart.map(prod => <li key={prod._id}>{prod.title} - ${prod.price} - {prod.qty} </li>)}
            </ul>
        </div>
    )
}

export default Cart;