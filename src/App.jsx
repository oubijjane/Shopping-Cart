import { useState } from 'react'
import { Link,Outlet } from "react-router";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import Home from './Home.jsx'

function App() {

  return (
    <>
    <NavBar />
    <Outlet />
  </>
  )
}

function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/products/men">Men</Link></li>
        <li><Link to="/products/women">Women</Link></li>
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

export default App
