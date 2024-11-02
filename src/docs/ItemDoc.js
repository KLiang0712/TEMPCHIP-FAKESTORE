import React, { createContext, useState, useEffect } from "react";
export const ItemContext = createContext();

const ItemProvider = ({ children}) => {
  /* products state */
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(''); 

  /* fetch products */
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data); 
    };
    fetchProducts();
  }, []);
   
  return (
    <ItemContext.Provider value={{products, selectedCategory, setSelectedCategory}}>{children}</ItemContext.Provider>
  );
};

export default ItemProvider;  