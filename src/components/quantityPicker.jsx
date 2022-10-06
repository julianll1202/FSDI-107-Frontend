import { useState } from 'react';
import './quantityPicker.css';
const QuantityPicker = (props) => {
    //this is a state variable, also called 
    // an inmutable variable
    const [quantity, setQuantity] = useState(1);

    // This is an arrow function
    // This increases the quantity
    const increase = () => {
        let value = quantity + 1;
        setQuantity(value);
        props.onChange(value);
    }
    // Decreases the quantity picker
    const decrease = () =>{
        let value = quantity - 1;
        if(value > 0 ){
            setQuantity(value);
            props.onChange(value);
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
