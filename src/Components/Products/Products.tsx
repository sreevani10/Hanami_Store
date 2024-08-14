import React, { useState } from "react";
import './Products.css'
import SaleItems from "../../data/SaleItems.json"
import { ProductProps } from "../Sales/Product";
import Product from "../Sales/Product";
import Navbar from "../Navbar/Navbar";

 
const Products = (/*{ handleIncrement }: { handleIncrement: (id: number) => void }*/)  => {
    
    const sale = SaleItems.filter(products =>products.sale === true && products.outOfStock === false);
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

      
  const [cart, setCart] = useState<boolean[]>([]);

  const handleIncrement = (id: number) => {
    if (!cart[id]) {
      setCart((cart) => ({ ...cart, [id]: true }));
    }
  };
  

    return (
        <>
              <Navbar size={Object.keys(cart).length} search={search}/>

        <div>
            <h1 className="heading">Exclusive Sale</h1>
            <p className="tag">Get in on the trend with our curated selection of best-selling styles.</p>
            {saleitems.length==0&&<div className="tag">No products found</div>}
            <div className="saleproducts">
            {saleitems.map((product)=>{
                return <Product {...product} handleIncrement={()=>handleIncrement((product.id))}  />
            })}
            </div>
        </div>
        <div className="items" >
            <h1>Our Products</h1>
            {items.length==0&&<div>No products found</div>}
            <div className="products">
               
            {items.map((product)=>{
                return <Product imgUrl={product.imgUrl} name={product.name} price={product.price} rating={product.rating} sale={false} outOfStock={product.outOfStock} tag={product.tag} handleIncrement={() => handleIncrement((product.id))}/>
                
            })}
            
            </div>
        </div>
        </>
    )
}

export default Products;
