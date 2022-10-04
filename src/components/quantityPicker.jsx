import { useState } from 'react';
import './quantityPicker.css';
const QuantityPicker = () => {
    //this is a state variable, also called 
    // an inmutable variable
    const [quantity, setQuantity] = useState(1);

    // This is an arrow function
    // This increases the quantity
    const increase = () => {
        let value = quantity + 1;
        console.log("btn clicked");
        setQuantity(value);
    }
    // Decreases the quantity picker
    const decrease = () =>{
        let value = quantity - 1;
        console.log("btn clicked");
        if(value > 0 ){
            setQuantity(value);
        }
    }

    return (
        <div className="quantity-picker">
            <button className='btn btn-secondary btn-sm' onClick={decrease}>-</button>
            <label>{quantity}</label>
            <button className='btn btn-secondary btn-sm' onClick={increase}>+</button>
        </div>
    );
}

export default QuantityPicker;
