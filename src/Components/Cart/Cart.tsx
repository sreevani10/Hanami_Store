import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { confirmAlert as showPopUp } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.css";
import './Cart.css'
import PaymentCard from '../PaymentCard/PaymentCard';
import Navbar from "../Navbar/Navbar";
import { ProductDataContext } from "../../Context/ProductsDataContext";

const Cart = () => {
    const {cart,setCart,setCartCount} = useContext(CartContext);
    const {search} = useContext(ProductDataContext)
    const handleIncrement = (id: number) => {
        const updatedCart = cart.map((product) => {
          if ((product.id) === id) {
            return { ...product, quantity: (product.quantity) + 1 };
          }
          return product;
        });
        setCart(updatedCart);
      };
      const handleDecrement = (id: number) => {
        const updatedCart = cart.map((product) => {
          if ((product.id) === id) {
            if (product.quantity === 1) {
                showPopUp({
                  title: 'Confirm removal',
                  message: 'Are you sure you want to remove this product from the cart?',
                  buttons: [
                    {
                      label: 'Yes',
                      onClick: () => {
                        const newCart = cart.filter((product) => (product.id) !== id);
                        setCart(newCart);
                      }
                    },
                    {
                      label: 'No',
                      onClick: () => {
                        return { ...product, quantity: 1 };
                      }
                    }
                  ]
                });
              } else {
            return { ...product, quantity: product.quantity - 1 };
          }
        }
          return product;
        });
        setCart(updatedCart);
      };
      const handleRemove = (id: number) => {
        showPopUp({
            title: 'Confirm to delete',
            message: 'Are you sure you want to delete this item?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        const updatedCart = cart.filter((product) => (product.id) !== id);
                       setCart(updatedCart);
                        toast.success("Removed From Cart");
                    }
                },
                {
                    label: 'No',
                    onClick: () => {
                        
                        toast.success("Deleting from cart cancelled");
                    }
                }
            ]
        });
};
    return (
        <>
        <Navbar search={search }/>
        {cart.length === 0 ?  <p className="cart-tag">Your cart feels very light!</p> : 
        <div className="cart-payment">
        <div className="total-card">
        <div className="product-view">
            {cart.map((product)=>(
                <div  key = {(product.id)} className="card">
                    <img className="product-image" src={product.imgUrl} alt={product.name}/>
                    <ToastContainer/>
                    <div className="product-details">
                    <h2 className="product-name">{product.name}</h2>
                    <div className="size-quantity">
                    <button className="product-size">{product.size}</button>
                    <button className="button-plus" onClick={()=>handleDecrement((product.id))}>-</button>
                    {product.quantity} 
                    <button className="button-minus" onClick={()=>handleIncrement((product.id))}>+</button>
                    </div>
                    <p className="product-price">Rs.{product.price}</p>
                    <button className="remove-cart" onClick={()=>handleRemove(product.id)} >Remove from cart</button>
                    </div>
                </div>
            ))} 
        </div>       
        </div>
        <PaymentCard cart={cart} setCart={setCart} setCartCount={setCartCount} />
        </div>
        } 
        </>
    );
}

export default Cart;