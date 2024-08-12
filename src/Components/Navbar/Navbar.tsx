import React from "react";
import { IoSearch } from "react-icons/io5";
import { PiBagBold } from "react-icons/pi";
import logo from '../Assets/logo.png'

import './Navbar.css'

const Navbar = () =>{

    return(
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} className="image" alt =""/>
                <p className="shopname">Hanami</p>
            </div>
            <div className="input-wrapper">
                <input type = "text" placeholder="Search here"/>
                <IoSearch id="search-icon"/>
            </div>

            <div className="nav-login-cart">
                <PiBagBold id="cart-icon"/>
                
                <button>Login</button>
            </div>
            
           

            
            
        </div>

    )
}

export default Navbar