import { clear } from "@testing-library/user-event/dist/clear";
import { Provider, useState } from "react";
import StoreContext from "./storeContext";

const GlobalContext = (props) => {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({id:1, name:"Julian"});

    const addToCart = (prod) => {
        console.log("Adding to cart...");
        // Creates a copy of the array and appending "prod"
        // let copy = [...cart, prod];

        let cartCopy = [...cart];
        let found = false
        // Search the array for the product
        for (let i=0; i < cartCopy.length; i++){
            let item = cartCopy[i];
            // If both 
            if(item._id === prod._id){
                item.qty += prod.qty;
                console.log("found");
                found = true
            }
        }

        if(!found){
            cartCopy.push(prod);
        }
        console.log(cartCopy);
        setCart(cartCopy);
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