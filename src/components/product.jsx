import './product.css';
import QuantityPicker from './quantityPicker';

const Product = () =>{
    return(
        <div className='product'>
        <img src='https://picsum.photos/200/200
' alt='' />
        <h5>Title</h5>
        <div className="prices">
            <label id='total-lb'>Total</label>
            <label id='price-lb'>Price</label>
        </div>
        <QuantityPicker />
        <button className='btn btn-primary'>Add</button>
        </div>
    )
}

export default Product;