import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ItemContext = createContext();

const ItemProvider = ({ children }) => {
  /* products state */
  const [products, setProducts] = useState([]);
  
  /* fetch products */ 
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await axios.get("https://fakestoreapi.com/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <ItemContext.Provider value={[products]}>{children}</ItemContext.Provider>
  );
};

export default ItemProvider;