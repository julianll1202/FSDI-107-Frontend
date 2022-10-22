import { createContext } from "react";


// Context is an interface (promise) of the information
// that will be available in the state
let StoreContext = createContext({
    cart: [],
    user: {},
    addToCart:() => {},
    removeFromCart: () => {},
    clearCart: () => {},

});

export default StoreContext;