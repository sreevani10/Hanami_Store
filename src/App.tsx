import React, { useState } from 'react';
import './App.css';

import { WishlistProvider } from './Context/WishlistContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import ProductPage from './components/ProductPage/ProductPage';
import { ToastContainer } from 'react-toastify';
import { CartProvider } from './Context/CartContext';




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
