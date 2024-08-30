import React, { useContext,useState } from "react";
import './Products.css'
import SaleItems from "../../data/SaleItems.json"
import Product from "../Product/Product";
import Navbar from "../Navbar/Navbar";
import { ProductDataContext } from "../../Context/ProductsDataContext";




const Products = ()  => {
    const sale = SaleItems.filter(products =>products.sale === true && products.outOfStock === false) ;
    const products = SaleItems.filter(item =>item.sale === false);
    const {saleitems, items, setItems, setSaleItems, search} = useContext(ProductDataContext)
    return (
        <>
         <Navbar search={search}/>
        <div>
            <h1 className="heading">Exclusive Sale</h1>
            <p className="tag">Get in on the trend with our curated selection of best-selling styles.</p>
            {saleitems.length==0&&<div className="tag">No products found</div>}
            <div className="saleproducts">
            {saleitems.map((product)=>{
                return <Product {...product} />
            })}
            </div>
        </div>
        <div className="items" >
            <h1>Our Products</h1>
            {items.length==0&&<div>No products found</div>}
            <div className="products">
               
            {items.map((product)=>{
                return <Product id={product.id} imgUrl={product.imgUrl} name={product.name} price={product.price} rating={product.rating} sale={false} outOfStock={product.outOfStock} tag={product.tag} quantity={product.quantity}/>
                
            })}
            
            </div>
        </div>
        </>
    )
}

export default Products;
