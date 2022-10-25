import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import WishList from "./components/wishlist";
import Catalog from "./pages/catalog";
import Home from "./pages/home";
import About from "./pages/about";
import Admin from "./pages/admin";
import Cart from "./pages/cart";

import ReactDOM from 'react-dom'



import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import GlobalContext from "./state/globalContext";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCartShopping, faUser, faTrash } from '@fortawesome/free-solid-svg-icons';
library.add(faCartShopping, faUser, faTrash);


function App() {
  return (
    <GlobalContext>
      <BrowserRouter>
      <div>
        <NavBar />

        <Routes>
          <Route path="/catalog" element={<Catalog />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/" element={<Home />}/>
          <Route path="/wishlist" element={<WishList />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/admin" element={<Admin />}/>
          <Route path="/cart" element={<Cart />} />
        </Routes>

        <Footer />
      </div>
      </BrowserRouter>
    </GlobalContext>
  );
}

export default App;
