

import { useState } from 'react';
import React, { useContext } from 'react';
import { WishlistContext } from '../Context/WishlistContext';
import './Product.css'
import { PiBagBold } from "react-icons/pi";
import { RiHeart3Fill } from "react-icons/ri";
import { toast } from "react-toastify";
import App from '../../App';
import "react-toastify/dist/ReactToastify.css";
import Products from '../Products/Products';
import { useNavigate , useParams } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';


export type ProductProps ={
    
 
    id:number,
    imgUrl:string,
    name : string,
    price : number,
    rating : number,
    discount ?: number,
    sale:boolean,
    outOfStock?: boolean,
    tag?:boolean,

    // handleIncrement: () => void
};

export default function Product({id,imgUrl,name,price,rating,discount,sale,outOfStock,tag}:ProductProps ){

    const { wishlist, addWishlist, removeWishlist } = useContext(WishlistContext);
    const { cart, setCart, cartCount, setCartCount } = useContext(CartContext);
    const [isInCart, setIsInCart] = useState(false);
    const handleIncrement = () => {
        const product = { id, imgUrl, name, price, rating,sale};
        setCartCount(cartCount + 1);
        if(product)setCart([...cart, product]);
        setIsInCart(true);
      };


  const handleWishlist = () => {
    if (wishlist.includes(id)) {
      removeWishlist(id);
    } else {
      addWishlist(id);
    }}

    const navigate = useNavigate();
    const params = useParams();

    const notify=(event:any)=>{
        event.currentTarget.disabled=true;
        toast("out of stock")    
    }
    
    return(
        <div className={outOfStock? "overlay item" : "item"} >
            <div className="badge">
            {tag&&<div className="new">New</div>}
            </div>
            <div className='change-color'>
            <RiHeart3Fill className='heart' color={wishlist.includes(id)?"red":"black"} onClick={handleWishlist} />
            </div>
            <img src={imgUrl} onClick={() => navigate(`/products/${id}`)}/>
            <div className="fitt">
            <h5 className="name">{name}</h5>
            <div className="adjust">
            <p className="price">Rs.{price}</p>
            <p>|</p>
            <p className="rating" id="star">{rating}    ⭐</p>
            </div>    
            <div>
            {discount&&<p className="discount">Discount-{discount}%</p>}
            </div>
            <div className='add-to-cart'>
            {outOfStock ? (<button onClick={notify} className="notify">Notify</button>) : isInCart ? (<button className="cart" onClick={()=>navigate('/cart')}>Go to Cart</button>) : (<button className="cart" onClick={handleIncrement}>Add to Cart</button>)}
            </div> 
            <p className="sale">{sale}</p>
            </div>
        </div>
    
    )

};



