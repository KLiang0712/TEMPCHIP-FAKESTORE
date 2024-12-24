import React, { createContext, useState, useEffect } from "react";
export const ItemContext = createContext();

const ItemProvider = ({ children}) => {
  
  /* products state */
  const [products, setProducts] = useState([]);
 
  /* fetch products */
  useEffect(() => {
    const fetchProducts = async () => {
      /* EMART APIs */
      // ESCUELA-PLATZI 
      // const response = await fetch("https://api.escuelajs.co/api/v1/products");

      // FAKESTORE API  
      const response = await fetch("https://fakestoreapi.com/products");
      
      const data = await response.json();
      setProducts(data); 
    };
    fetchProducts();
  }, []);
   
  return (
    <ItemContext.Provider value={{products}}>{children}</ItemContext.Provider>
  );
};

export default ItemProvider;   