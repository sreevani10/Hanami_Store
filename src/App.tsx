import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Products from './Components/Products/Products'
import { ToastContainer } from 'react-toastify';


function App() {
   
  // const [cart, setCart] = useState<boolean[]>([]);

  // const handleIncrement = (id: number) => {
  //   if (!cart[id]) {
  //     setCart((cart) => ({ ...cart, [id]: true }));
  //   }
  // };
  
  
  


  return (
    <div>
      <ToastContainer/>
      {/* <Navbar size={Object.keys(cart).length}/> */}
     
      {/* <SalesSection/> */}
      {/* <Products  handleIncrement={handleIncrement}/> */}
      <Products/>

      
      
    
     
    </div>
  );
}

export default App;
