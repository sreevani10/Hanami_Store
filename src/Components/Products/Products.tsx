import React from "react";
import './Products.css'
import SaleItems from "../../data/SaleItems.json"
import Product from "../Sales/Product";

const Products =()=>{
    const products = SaleItems.filter(item =>item.sale === false);
    console.log("products")
    console.log(products);
    return(
        <div className="items" >
            <h1>Our Products</h1>
            <div className="products">
               
            {products.map((product)=>{
                return <Product imgUrl={product.imgUrl} name={product.name} price={product.price} rating={product.rating} sale={false} outOfStock={product.outOfStock} tag={product.tag}/>
            })}
            
            </div>
        </div>
    )
}
export default Products