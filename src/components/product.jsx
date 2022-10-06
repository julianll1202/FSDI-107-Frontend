import './product.css';
import { useState } from 'react';
import QuantityPicker from './quantityPicker';

const Product = (props) =>{
    const [quantity, setQuantity]  = useState(1);
    const handleQtyChange = (qty) => {
        console.log("Quantity Picker changed",qty);
        setQuantity(qty);
    }

    const calculateTotal=()=>{
        const total = quantity*props.data.price;
        return total.toFixed(2);
    }
    return(
        <div className='product'>
        <img src={"/images/"+props.data.image} alt='' />
        <h5>{props.data.title}</h5>
        <div className="prices">
            <label id='total-lb'>${calculateTotal()}</label>
            <label id='price-lb'>${props.data.price.toFixed(2)}</label>
        </div>
        <QuantityPicker onChange={handleQtyChange}/>
        <button className='btn btn-primary'>Add</button>
        </div>
    )
}

export default Product;