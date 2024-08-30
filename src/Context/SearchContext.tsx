import React, { createContext, useState, useContext } from 'react';
type searchProduct={
    value:string,
    setValue:(value:string)=>void
}

export const SearchContext = createContext<searchProduct>({value:'', setValue:()=>{}});
export function SearchProvider({ children }:any) {
    const[value,setValue] = useState("");
  return (
    <SearchContext.Provider value={{ value, setValue }}>
      {children}
    </SearchContext.Provider>
  );
}

