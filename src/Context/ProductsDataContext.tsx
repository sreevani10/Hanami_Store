
import React, { createContext, useState, useContext } from 'react';
import SaleItems from "../data/SaleItems.json"

type TFilterData={
    search:(value:string)=>void,
    saleitems:any[],
    setSaleItems:(value:any[])=>void,
    items:any[],
    setItems:(value:[])=>void

}
export const ProductDataContext = createContext<TFilterData>({search:()=>{},saleitems:[],setSaleItems:()=>{},items:[],setItems:()=>{}});
export function ProductDataContextProvider({ children }:any) {
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
    <ProductDataContext.Provider value={{ search, saleitems,setSaleItems,items,setItems, }}>
      {children}
    </ProductDataContext.Provider>
  );
}

