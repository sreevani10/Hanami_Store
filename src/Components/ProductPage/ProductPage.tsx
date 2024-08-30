import React, { useContext, useState } from 'react';
import { CartContext } from '../../Context/CartContext';
import SaleItems from "../../data/SaleItems.json"
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './ProductPage.css'
import { RiHeart3Fill } from 'react-icons/ri';
import { toast, ToastContainer } from 'react-toastify';
import { WishlistContext } from '../../Context/WishlistContext';
import { ProductDataContext } from '../../Context/ProductsDataContext';

const ProductPage = () => {
  const { cart,setCart,cartCount, setCartCount} = useContext(CartContext);
  const [selectedSize, setSelectedSize] = useState('M');
  const {search} = useContext(ProductDataContext)
  
  const handleIncrement = (id:number |undefined) => {
    const product = SaleItems.find((product) => (product.id) === id);
    if(product){
      const productWithSize = { ...product, size: selectedSize, quantity:1 };
    setCartCount(cartCount + 1);
    if(!cart.find((item)=>(item.id==id && item.size===selectedSize)))
    {
      if(product)setCart([...cart, productWithSize]);
    }
    if(cart.find(item=>(item.id==id && item.size===selectedSize))){
      const data:any[]= cart.map((item)=>{
        if(item.id==id && item.size===selectedSize){
            return {...item, quantity:item.quantity+1}
        }
        return item;
      })
       setCart(data)
    }
    setIsInCart(true); 
  };
}
  const navigate = useNavigate();
  const [isInCart, setIsInCart] = useState(false);
  const { wishlist, addWishlist, removeWishlist } = useContext(WishlistContext);
  const handleWishlist = () => {
    if (wishlist.includes(Number(id))) {
      removeWishlist(Number(id));
    } else {
      addWishlist(Number(id));
    }}    
    const handleSizeClick = (size:string) => {
      setSelectedSize(size);
    };
  const { id } = useParams();
  if(!id){
    return <></>
  }
  const product = SaleItems.find((product) => (product.id) === parseInt(id));
  console.log(product?.imgUrl);
const notify=(event:any)=>{
  event.currentTarget.disabled=true;
  toast("out of stock")
  
}
   if(!product) return(<></>);
    return (
        <div>
          <ToastContainer/>
            <Navbar search={search}/>
            <div className="view">
            <img className="img" src={product?.imgUrl} alt="hello" />
            <div className="details-section">
            <h1>{product?.name}</h1>
            <div className="price-rating">
            <p>Rs.{product?.price} </p>
            <p>|</p>
            <p>{product?.rating}    ⭐</p>
            </div>
            {product?.discount&&<p className="discount">{product?.discount}</p>}
            <div className='button'>
            {product?.outOfStock ? (
              <p className='stock-tag'>This item is currently out of stock</p>
            ) : (
              <>
                <button className="btn" onClick={() => handleSizeClick('XS')}>XS</button>
                <button className="btn" onClick={() => handleSizeClick('S')}>S</button>
                <button className="btn" onClick={() => handleSizeClick('M')}>M</button>
                <button className="btn" onClick={() => handleSizeClick('L')}>L</button>
                <button className="btn" onClick={() => handleSizeClick('XL')}>XL</button>
                <button className="btn" onClick={() => handleSizeClick('XXL')}>XXL</button>
              </>
            )}
          </div>
            <div className='cart-wishlist'>
            {product?.outOfStock ? (<button onClick={notify} className="notify-button">Notify</button>) : isInCart ? (<button className="cart-button" onClick={()=>navigate('/cart')}>Go to Cart</button>) : (<button className="cart-button" onClick={()=>handleIncrement(product.id)}>Add to Cart</button>)}
                <RiHeart3Fill className='heart-icon' color={wishlist.includes(Number(id))?"red":"black"} onClick={handleWishlist} /> 
            </div>
            </div>
            </div>
    </div>
      );

};

export default ProductPage;


