import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import WishList from "./components/wishlist";
import Catalog from "./pages/catalog";
import Home from "./pages/home";
import About from "./pages/about";
import Admin from "./pages/admin";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
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
      </Routes>

      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
