import React, { useContext,useState } from "react";
import { CartContext } from "../../Context/CartContext";
import './Products.css'
import SaleItems from "../../data/SaleItems.json"
import Product from "../Product/Product";
import Navbar from "../Navbar/Navbar";




const Products = ()  => {
    
  const {cart,setCart,cartCount,setCartCount}=useContext(CartContext);
  const handleIncrement = (id: number) => {
    const product = SaleItems.find((product) => (product.id) === id);
    setCartCount(cartCount + 1);
    if(product) setCart([...cart, product]);
  };
  
    const sale = SaleItems.filter(products =>products.sale === true && products.outOfStock === false) ;
    const products = SaleItems.filter(item =>item.sale === false);
   
   
    const[saleitems,setSaleItems] = useState(sale);
    const[items,setItems] = useState(products);
    function search(value:string){
        if(value===""){
            setItems(products);
            setSaleItems(sale);
        }
        else{
            let filteredItems= products.filter((product)=>{if(product.name.toLowerCase().includes(value.toLowerCase())){return product}})
                setItems(filteredItems);
            let filteredSaleItems= sale.filter((product)=>{if(product.name.toLowerCase().includes(value.toLowerCase())){return product}})
                setSaleItems(filteredSaleItems);
          }
    }

      
  

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
