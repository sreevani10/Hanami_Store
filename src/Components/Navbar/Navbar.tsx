import React, { useContext,useState } from "react";
import { CartContext } from "../Context/CartContext";
import { IoSearch } from "react-icons/io5";
import { PiBagBold } from "react-icons/pi";
import logo from '../Assets/logo.png'
import { useNavigate } from "react-router-dom";
import './Navbar.css'


const Navbar = ({ search} : { search:(value:string)=>void}) =>{

    const {cartCount} = useContext(CartContext);
   
    const navigate = useNavigate();


    const[value,setValue] = useState("");
    function searchHandler(click: any){
             const newValue=click.target.value 
             setValue(newValue)
             search(newValue);
    }
    return(
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} className="image" alt =""/>
                <p className="shopname">Hanami</p>
            </div>
            <div className="input-wrapper">
                <input type = "text" placeholder="Search here" onChange={(click)=>searchHandler(click)}/>
                <IoSearch id="search-icon"/>
            </div>
            <div onClick={() => navigate('/cart')}>
                <div className="nav-login-cart">
                <PiBagBold id="cart-icon"/>
                <div className="nav-cart-count">{cartCount}</div>
                </div>
            </div>
            <button className="login">Login</button>    
        </div>

    )
}
export default Navbar