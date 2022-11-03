import './catalog.css';
import { useEffect, useState } from 'react';
import Product from '../components/product.jsx';
import Dataservice from './../services/dataService';


function Catalog(){
    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadData();
    },[]) // cause the array is empty, the funcion will only be called once

    // this is an asynchronous arrow function
    const loadData = async () => {
        // get catalog from server
        let service = new Dataservice();
        let result = await service.getCatalog();
        setProducts(result);
        console.log(result);
    }
    return (
        <div className='catalog'>
            <h1>Check out our amazing catalog!</h1>
            <h5>We have {products.length} products waiting for you</h5>
            <div className='list-container'>
                {products.map( prod => <Product key={prod._id} data={prod} />)}
            </div>
        </div>
    );
}

export default Catalog;