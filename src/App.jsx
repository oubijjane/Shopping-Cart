import { useState, useEffect, createContext } from 'react'
import { Link, Outlet, NavLink } from "react-router";
import { getProductsData } from './products.js';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const ProductsContext = createContext();

function useProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductsData().then(data => setProducts(data));
  }, []);

  return products;
}

function NavBar() {
  return (
    <nav>
      <div className="logo">
        <p>ShopEase</p>
      </div>
      <ul>
        <li><NavLink to="/home" className={getActiveClass}>Home</NavLink></li>
        <li><NavLink to="/clothes/men" className={({ isActive }) =>
          isActive
            ? "selected"
            : ""
        }>Men</NavLink></li>
        <li><NavLink to="/clothes/women" className={({ isActive }) =>
          isActive
            ? "selected"
            : ""
        }>Women</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) =>
          isActive
            ? "selected"
            : ""
        }>About</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) =>
          isActive
            ? "selected"
            : ""
        }>Contact</NavLink></li>
      </ul>
      <ul>
        <li><NavLink to="/cart" className={({ isActive }) =>
          isActive
            ? "selected"
            : ""
        }>Cart</NavLink></li>
        <li><NavLink to="/login" className={({ isActive }) =>
          isActive
            ? "selected"
            : ""
        }>Login</NavLink></li>
      </ul>
    </nav>
  );
}
function App() {
  const products = useProducts();
  return (
    <>
      <NavBar />
      <ProductsContext.Provider value={products}>
        <Outlet />
      </ProductsContext.Provider>
      <Footer />
    </>
  );
}
function Footer() {
  return (
    <footer>
      <p>&copy; 2023 Fashion Store. All rights reserved.</p>
    </footer>
  );
}

const getActiveClass = ({ isActive }) =>
  (isActive ? " selected" : "");

export { App, ProductsContext };