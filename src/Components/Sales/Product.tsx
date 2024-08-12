
import './Product.css'
import { CiStar } from "react-icons/ci";

type ProductProps ={
   
    imgUrl:string,
    name : string,
    price : number,
    rating : number,
    discount ?: string
    sale:boolean,
    outOfStock: boolean,
    tag?:boolean

}

export default function Product({imgUrl,name,price,rating,discount,sale,outOfStock,tag}:ProductProps){
    return(


        <div className={outOfStock? "overlay item" : "item"}>
            <div className="badge">
            {tag&&<div className="new">New</div>}
            </div>
            <img src={imgUrl}/>
           
            <div className="fitt">
            <h5 className="name">{name}</h5>
            <div className="adjust">
            <p className="price">Rs.{price}</p>
            <p>|</p>
            <p className="rating" id="star">{rating}⭐</p>
            </div>
            
            <div className="buttonAdjust">
            {discount&&<p className="discount">{discount}</p>}
            <button className={outOfStock? 'notify':'wishlist'}>{outOfStock? 'Notify':'Wishlist'}</button>
            </div>
            <p className="sale">{sale}</p>
            </div>
        </div>
    
    )

};


