import React from "react";
import './Products.css'
import SaleItems from "../../data/SaleItems.json"
import Product from "../Sales/Product";

 
const Products = (cartCounter:any, handleIncrement:()=>{}) => {
    
    const sale = SaleItems.filter(products =>products.sale === true && products.outOfStock === false);
    const products = SaleItems.filter(item =>item.sale === false);
   
    const items=[...sale , ...products]
   
    return (
        <>
        <div>
            <h1 className="heading">Exclusive Sale</h1>
            <p className="tag">Get in on the trend with our curated selection of best-selling styles.</p>
            <div className="saleproducts">
            {sale.map((product)=>{
                return <Product {...product} />
            })}
            </div>
        </div>
        <div className="items" >
            <h1>Our Products</h1>
            <div className="products">
               
            {items.map((product)=>{
                return <Product imgUrl={product.imgUrl} name={product.name} price={product.price} rating={product.rating} sale={false} outOfStock={product.outOfStock} tag={product.tag}/>
                
            })}
            
            </div>
        </div>
        </>
    )
}

export default Products;
// const Products =()=>{
//     const products = SaleItems.filter(item =>item.sale === false);
//     console.log("products")
//     console.log(products);
//     return(
//         <div className="items" >
//             <h1>Our Products</h1>
//             <div className="products">
               
//             {products.map((product)=>{
//                 return <Product imgUrl={product.imgUrl} name={product.name} price={product.price} rating={product.rating} sale={false} outOfStock={product.outOfStock} tag={product.tag}/>
//             })}
            
//             </div>
//         </div>
//     )
// }
// export default Products