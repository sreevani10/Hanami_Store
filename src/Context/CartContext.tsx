import { Children, createContext, useState } from "react";

type TCartProduct = {
    quantity:number,
    id:number,
    imgUrl:string,
    name : string,
    price : number,
    rating : number,
    discount ?: number
    sale:boolean,
    outOfStock?: boolean,
    tag?:boolean,
    size?:string,
}
interface Cart {
    cart:TCartProduct[],
    setCart:(cart:TCartProduct[]) => void,
    cartCount:number,
    setCartCount:(count:number)=>void
}

const CartContext = createContext<Cart>({cart: [],setCart: () => {},cartCount: 0, setCartCount: () => {}, });
const CartProvider = ({children}:any) => {
    const [cartCount, setCartCount] = useState(0);
    const [cart,setCart] = useState<TCartProduct[]>([]);
return(
    <CartContext.Provider value = {{cart,setCart,cartCount,setCartCount}}>
       {children} 
    </CartContext.Provider>
)
}
export { CartProvider, CartContext, type TCartProduct };