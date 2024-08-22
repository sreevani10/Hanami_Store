import React, { useState } from 'react';
import './App.css';

import { WishlistProvider } from './Components/Context/WishlistContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './Components/Cart/Cart';
import Navbar from './Components/Navbar/Navbar';
import Products from './Components/Products/Products';
import ProductPage from './Components/ProductPage/ProductPage';
import { ToastContainer } from 'react-toastify';
import { CartProvider } from './Components/Context/CartContext';




function App() {
  
  return (
    <div>

      <ToastContainer/>
      <CartProvider>
      <WishlistProvider>
      <BrowserRouter>
      <Routes>
         <Route path="/" element={<Products />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
    </Routes>

    </BrowserRouter>
    </WishlistProvider>  
    </CartProvider> 
    </div>
  );
}

export default App;
