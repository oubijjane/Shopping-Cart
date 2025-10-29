import {useState, useEffect, createContext } from 'react'
import { Link, Outlet } from "react-router";
import { getProductsData } from './products.js';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'

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
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/clothes/men">Men</Link></li>
        <li><Link to="/clothes/women">Women</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <ul>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/login">Login</Link></li>
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
    </>
  );
}

export { App, ProductsContext };