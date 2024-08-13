import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
// import SalesSection from './Components/SalesSection/SalesSection';
import Products from './Components/Products/Products'
import { ToastContainer } from 'react-toastify';


function App() {
  const [show,setShow] = useState(true);
  const [cart,setCart] = useState(0);

  function handleIncrement(){
    // increases count
    setCart(cart+1);
  }

  return (
    <div>
      <ToastContainer/>
      <Navbar size={cart}/>
     
      {/* <SalesSection/> */}
      <Products />
      
      
    
     
    </div>
  );
}

export default App;
