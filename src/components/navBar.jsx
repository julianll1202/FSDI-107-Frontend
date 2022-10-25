// This way we import the CSS file
import "./navBar.css";
import {Link} from 'react-router-dom';
import StoreContext from "../state/storeContext";
import { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NavBar(){
    // This gives us access to everything in StoreContext
    const user = useContext(StoreContext).user;
    const cart = useContext(StoreContext).cart;

    const getCount = () => {
        // Initiate count on 0
        let count = 0;
        // Travel the array
        for (let i=0;i<cart.length;i++){
            // stores the 'i' element of cart
            let item = cart[i];
            // sum the quantity of the element to count
            count += item.qty;
        }
        return count;
    }
    // The component always needs to return something
    return (
        <nav className="navbar navbar-expand-lg bg-primary nav-bar">
            <div className="container-fluid">
                <Link className="navbar-brand store-name" to="/home">Gamify</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/catalog">Catalog</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/wishlist">WishList</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/admin">Admin</Link>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <Link className="btn btn-outline-light" to="/cart">
                        <FontAwesomeIcon icon="fa-solid fa-cart-shopping" /> <span className="badge bg-danger">{getCount()}</span>
                    </Link> 

                    <label className="user-welcome btn btn-outline-light">
                    <FontAwesomeIcon icon="fa-solid fa-user" /> {user.name}
                    </label>
                </form>
                </div>
            </div>
</nav>
    );
}
// We always need to export the component
export default NavBar;

//page
// route on app.js
// menu item on navbar