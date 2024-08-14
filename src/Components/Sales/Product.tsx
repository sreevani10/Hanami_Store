

import { useState } from 'react';
import './Product.css'
import { PiBagBold } from "react-icons/pi";
import { RiHeart3Fill } from "react-icons/ri";

import { toast } from "react-toastify";
import App from '../../App';
import "react-toastify/dist/ReactToastify.css";
import Products from '../Products/Products';
import { JSX } from 'react/jsx-runtime';


type ProductProps ={
    
   id:number,
    imgUrl:string,
    name : string,
    price : number,
    rating : number,
    discount ?: string
    sale:boolean,
    outOfStock?: boolean,
    tag?:boolean,
    handleIncrement: () => void

    

};

export default function Product({imgUrl,name,price,rating,discount,sale,outOfStock,tag,handleIncrement}:ProductProps){
    

    const [color,setColor] = useState("black")
    

    function changeColor(){
        if (color=="black"){
            setColor("red");
        }
        else{
            setColor("black")
        }   

    }
 
    const notify=(event:any)=>{
        event.currentTarget.disabled=true;
        toast("out of stock")
    }
    
    
   
   
    return(

       
        <div className={outOfStock? "overlay item" : "item"}>
            <div className="badge">
            {tag&&<div className="new">New</div>}
            </div>
            <div className='change-color'>
            <RiHeart3Fill className='heart' color={color} onClick={changeColor} />

            </div>
            <img src={imgUrl}/>

            <div className="fitt">
            <h5 className="name">{name}</h5>

            <div className='add-to-cart'>
            <button onClick={handleIncrement}><PiBagBold /></button>
            </div> 


            <div className="adjust">
            <p className="price">Rs.{price}</p>
            <p>|</p>
            <p className="rating" id="star">{rating}    ⭐</p>
            </div>
            
            <div className="buttonAdjust">
            {discount&&<p className="discount">{discount}</p>}
            {outOfStock ?<button onClick={notify} className= "notify">Notify</button>: null}
            </div>
            
            <p className="sale">{sale}</p>
            </div>
        </div>
    
    )

};



