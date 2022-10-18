// This way we import the CSS file
import "./navBar.css";
import {Link} from 'react-router-dom';

function NavBar(){
    // The component always needs to return something
    return (
        <nav className="navbar navbar-expand-lg bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/home">Gamify</Link>
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
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
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