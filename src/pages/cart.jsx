import { useContext, useEffect, useState } from "react";
import ProductInCart from "../components/productInCart";
import Dataservice from "../services/dataService";
import StoreContext from "../state/storeContext";
import "./cart.css";


const Cart = () => {
    const cart = useContext(StoreContext).cart;

    const getCount = () => {
        // Initiate count on 0
        let count = 0;
        // Travel the array
        for (let i=0;i<cart.length;i++){
            // stores the 'i' element of cart
            let item = cart[i];
            // sum the quantity of the element to count
            count += item.qty;
        }
        return count;
    }

    const getTotal = () => {
        let total = 0;
        // travel the cart
        for (let i = 0; i < cart.length; i++){
            // multiply the price by its qty
            let item = cart[i];
            // sum that to the total
            total += (item.qty * item.price);
        }
        return total
    }

    return (
        <div className="cart">
            <h1 className="header">You're one step closer to gaming greatness</h1>
            <h4>You have {getCount()} products in your cart, continue to checkout</h4>

            <div className="container">
                <section className="products">
                    <ul className="product-list">
                        {cart.map(prod => <ProductInCart key={prod._id} data={prod}/>)}
                    </ul>
                </section>
                <section className="total">
                    <h4>Total</h4>
                    <h5>${getTotal()}</h5>
                    <button className="btn btn-primary ">Pay</button>
                </section>
            </div>
        </div>
    )
}

export default Cart;