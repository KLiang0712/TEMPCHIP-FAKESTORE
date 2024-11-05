import React, { useEffect, useState, useContext } from "react"; 
import { useParams } from "react-router-dom";
import { CartContext } from "../docs/CartDoc";
import { ItemContext } from "../docs/ItemDoc";

const ItemInfo = () => {
    // Product ID fetch from URL 
    const { id } = useParams(); 
    const [product, setProduct] = useState(null);
    const { addItem } = useContext(CartContext);
    const { products } = useContext(ItemContext);
  
    /* fetch/retrieve */

     useEffect(() => {
        fetchProductDetails();
      }, []);
    
      const fetchProductDetails = async () => {
        try {
          const response = await fetch(`https://fakestoreapi.com/products/${id}`);
          const products = await response.json();
          setProduct(products); 
        } catch (error) {
          console.log(error);
        }
      };

    /*a single product through ID */
    /*
    const product = products.find((item) => {
        return item.id === parseInt(id);
    });
    */
    
    // if product is NOT found
    if (!product) {
        return (
            <section className="h-screen flex justify-center items-center">
                Loading...
            </section>
        );
    } 
    console.log(product); 

    // destructure product 
    const {title, image, description, price} = product;     

    return (
        <section className="pt-[450px] md:pt-32 pb-[400px] md:pb-12 lg:py-32 h-screen flex items-center">
          <div className="container mx-auto">
            {/* image and text wrapper */}
            <div className="flex flex-col lg:flex-row items-center">
              {/* image */}
              <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
                <img className="max-w-[200px] lg:max-w-xs" src={image} alt="" />
              </div>
              {/* text */}
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">{title}</h1>
                <div className="text-2xl text-red-500 font-medium mb-6">$ {price}</div>
                <p className="mb-8">{description}</p>
                <button onClick={()=>addItem(product, product.id)} className='bg-primary py-4 px-8 text-white'>Add to cart</button>
              </div>
            </div>
          </div>
        </section>
    );
};  

export default ItemInfo; 