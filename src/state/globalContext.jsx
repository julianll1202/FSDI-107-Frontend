import { clear } from "@testing-library/user-event/dist/clear";
import { Provider, useState } from "react";
import StoreContext from "./storeContext";

const GlobalContext = (props) => {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({id:1, name:"Julian"});

    const addToCart = (prod) => {
        console.log("Adding to cart...");
        // Creates a copy of the array and appending "prod"
        let copy = [...cart, prod];
        console.log(copy);
        setCart(copy);
    };

    const removeFromCart = () => {
        console.log("Removing products...");
    };

    const clearCart = () => {
        console.log("Clearing cart...");
    };

    return (
        <StoreContext.Provider value ={{
            cart: cart,
            user: user,
            addToCart: addToCart,
            removeFromCart: removeFromCart,
            clearCart: clearCart
        }}>
            {props.children}
        </StoreContext.Provider>
    )
};

export default GlobalContext;