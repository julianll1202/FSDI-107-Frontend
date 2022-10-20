import { useState } from "react";
import "./admin.css";
const Admin = ()=>{
    // State variables for the coupons
    const [coupon, setCoupon] = useState({});
    const [couponList, setCouponList] = useState([]);

    // State variables for the products
    const[product, setProduct] = useState({});
    const[productList, setProductList] = useState([]);

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
    const saveCoupon = () => {
        let copy = {...coupon};
        // changes the discount to be a float instead of a string
        copy.discount = parseFloat(copy.discount);
        console.log(copy);

        let allCoupons = [...couponList];
        allCoupons.push(copy);
        setCouponList(allCoupons);
        console.log(allCoupons);
    }

    const saveProduct = () => {
        let copy = {...product};
        // changes the price to be a float instead of a string
        product.price = parseFloat(copy.price);

        let allProducts = [...productList];
        allProducts.push(copy);
        setProductList(allProducts);
        console.log(allProducts);
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

                        <ul>
                            {productList.map(p => <li key={p.title}>{p.title} - ${p.price} - {p.category}</li>)}
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
                        {couponList.map(c => <li key={c.code}>{c.code} - {c.discount}</li>)}
                    </ul>
                </section>
            </div> 
        </div>
    );
}

export default Admin;

/*
 - CREATE FORM: 
        TITLE
        PRICE
        IMAGE
        CATEGORY
 - CREATE STATE FOR THE OBJECT
 - CREATE STATE FOR THE LIST OF PRODUCTS
 - HANDLE CHANGE FUNCTION
 - SAVE FUNCTION
 - DISPLAY LIST
 */