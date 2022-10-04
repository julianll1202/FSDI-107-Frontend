import './catalog.css';
import Product from '../components/product.jsx';


function Catalog(){
    return (
        <div className='catalog'>
            <h1>Check out amazing catalog!</h1>
            <div className='list-container'>
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    );
}

export default Catalog;