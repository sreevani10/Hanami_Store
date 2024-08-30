
import './App.css';
import { WishlistProvider } from './Context/WishlistContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Products from './components/Products/Products';
import ProductPage from './components/ProductPage/ProductPage';
import { ToastContainer } from 'react-toastify';
import { CartProvider } from './Context/CartContext';
import { SearchProvider } from './Context/SearchContext';
import { ProductDataContextProvider } from './Context/ProductsDataContext';



function App() {
  return (
    <div>
      <ProductDataContextProvider>
      <ToastContainer/>
      <SearchProvider>
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
    </SearchProvider>
    </ProductDataContextProvider>
    </div>
  );
}

export default App;
