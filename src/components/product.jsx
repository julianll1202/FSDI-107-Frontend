import './product.css';
import QuantityPicker from './quantityPicker';

const Product = (props) =>{
    return(
        <div className='product'>
        <img src={"/images/"+props.data.image} alt='' />
        <h5>{props.data.title}</h5>
        <div className="prices">
            <label id='total-lb'>Total</label>
            <label id='price-lb'>{props.data.price}</label>
        </div>
        <QuantityPicker />
        <button className='btn btn-primary'>Add</button>
        </div>
    )
}

export default Product;