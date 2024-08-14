import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { PiBagBold } from "react-icons/pi";
import logo from '../Assets/logo.png'

import './Navbar.css'

const Navbar = ({size, search} : {size:number, search:(value:string)=>void}) =>{

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

            <div className="nav-login-cart">
                <PiBagBold id="cart-icon"/>
                <div className="nav-cart-count">
                    {size}
                </div>
                
                <button>Login</button>
            </div>
            
           

            
            
        </div>

    )
}

export default Navbar