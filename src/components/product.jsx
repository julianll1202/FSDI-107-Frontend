import './product.css';
import { useState, useContext } from 'react';
import QuantityPicker from './quantityPicker';
import StoreContext from '../state/storeContext';


const Product = (props) =>{
    const [quantity, setQuantity]  = useState(1);
    const addCart =useContext(StoreContext).addToCart;
    const handleQtyChange = (qty) => {
        console.log("Quantity Picker changed",qty);
        setQuantity(qty);
    }

    const calculateTotal=()=>{
        const total = quantity*props.data.price;
        return total.toFixed(2);
    }

    const handleAdd = () => {
        // Add the attribute quantity to the props by creating a copy of its
        let prodForCart = {...props.data, qty: quantity};
        // call the context function (addToCart function from StoreContext)
        addCart(prodForCart); 
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
        <button onClick={handleAdd} className='btn btn-primary add-btn'>Add</button>
        </div>
    )
}

export default Product;