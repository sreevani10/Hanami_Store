import { Children, createContext, useState } from "react";
import { ProductProps } from "../Sales/Product";

type TCart = {
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
    // count:number;
}
interface Cart {
    cart:TCart[],
    setCart:(cart:TCart[]) => void,
    cartCount:number,
    setCartCount:(count:number)=>void
}

const CartContext = createContext<Cart>({cart: [],setCart: () => {},cartCount: 0, setCartCount: () => {}, });


const CartProvider = ({children}:any) => {
    const [cartCount, setCartCount] = useState(0);
    const [cart,setCart] = useState<TCart[]>([]);



return(
    <CartContext.Provider value = {{cart,setCart,cartCount,setCartCount}}>
       {children} 
    </CartContext.Provider>
)
}
export { CartProvider, CartContext, type TCart };