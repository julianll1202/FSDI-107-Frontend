import { useEffect } from "react";
import { useState } from "react";
import { useAsyncValue } from "react-router-dom";
import Dataservice from "../services/dataService";
import "./admin.css";
const Admin = ()=>{
    // State variables for the coupons
    const [coupon, setCoupon] = useState({});
    const [couponList, setCouponList] = useState([]);

    // State variables for the products
    const[product, setProduct] = useState({});
    const[productList, setProductList] = useState([]);

    /* use effect calls loadcoupons
    loadcoupons creates a service instance
    calls the getcoupons method
    */
    useEffect(()=>{
        loadCoupons();
        loadProducts();
    }, []);

    const loadProducts = async () => {
        let service = new Dataservice();
        let products = await service.getCatalog();
        setProductList(products);
    }
    const loadCoupons = async () => {
        let service = new Dataservice();
        let list = await service.getCoupons();
        setCouponList(list);
    }

    // Handle change functions
    const handleCouponChange = (e) => {
        const text = e.target.value;
        const name = e.target.name;

        let copy = {...coupon};
        copy[name] = text;
        setCoupon(copy);
    }

    const handleProductChange = (e) => {
        const text = e.target.value;
        const name = e.target.name;
        
        let copy = {...product};
        copy[name] = text;

        setProduct(copy);
    }

    // Save functions
    const saveCoupon = async() => {
        // instance of service
        let service = new Dataservice;
        let copy = {...coupon};
        // changes the discount to be a float instead of a string
        copy.discount = parseFloat(copy.discount);
        // console log the object
        console.log(copy);

        // send to server
        let c = await service.saveCoupon(copy);
        // add to list
        let allCoupons = [...couponList];
        allCoupons.push(copy);
        setCouponList(allCoupons);
        console.log(c);
    }

    const saveProduct = async() => {
        let service = new Dataservice();
        let copy = {...product};
        // changes the price to be a float instead of a string
        copy.price = parseFloat(copy.price);

        // removes the path of the image
        copy.image = copy.image.substring(copy.image.indexOf("th\\")+3);

        // saves the product on sever
        let p = await service.saveProduct(copy);
        let allProducts = [...productList];
        allProducts.push(copy);
        setProductList(allProducts);
        console.log(p);
    }

    return (
        <div className="admin-page">
            <h1>Administrator page</h1>
            <div className="container">
                <section className="product-section">
                    <h2>Products</h2>
                        <div className="product-form">
                        <label className="form-label">Title</label>
                        <input name="title" className="form-control" type="text" onChange={handleProductChange}/>

                        <label  className="form-label">Price</label>
                        <input name="price" className="form-control" type="number" onChange={handleProductChange}/>

                        <label className="form-label">Category</label>
                        <input name="category" className="form-control" type="text" onChange={handleProductChange}/>

                        <label className="form-label">Image</label>
                        <input name="image" className="form-control" type="file" onChange={handleProductChange}/>

                        <button onClick={saveProduct}>Add</button>

                        <ul className="products-list">
                            {productList.map((p,index) => <li key={index}>{p.title} - ${p.price} - {p.category}</li>)}
                        </ul>
                    </div>
                </section>
                <section className="discount-section">
                    <h2>Discounts</h2>
                    <div className="discount-form mb-3 row">
                        <label className="form-label">Code</label>
                        <input name="code" className="form-control" type="text" onChange={handleCouponChange}/>
                        <label className="form-label">Discount</label>
                        <input name="discount" className="form-control" type="number" onChange={handleCouponChange} />

                        <button onClick={saveCoupon}>Add</button>
                    </div>

                    <ul>
                        {couponList.map((c,index) => <li key={index}>{c.code} - {c.discount}</li>)}
                    </ul>
                </section>
            </div> 
        </div>
    );
}

export default Admin;
