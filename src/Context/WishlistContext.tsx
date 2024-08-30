import React, { createContext, useState } from 'react';



type TWishlistedProducts = {
    wishlist: number[];
    addWishlist: (id: number) => void;
    removeWishlist: (id: number) => void;
  }
  
  const WishlistContext = createContext<TWishlistedProducts>({wishlist:[],addWishlist:()=>{}, removeWishlist:()=>{}});
  

const WishlistProvider = ({ children }:any) => {
  const [wishlist, setWishlist] = useState<number[]>([]);

  const addWishlist = (id:number) => {
    setWishlist((prevWishlist) => [...prevWishlist, id]);
  };

  const removeWishlist = (id:number) => {
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item !== id));
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addWishlist, removeWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export { WishlistProvider, WishlistContext };
