import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartDoc";
import { ItemContext } from "../context/ItemDoc";

const ItemInfo = () => { 
    /* fetch/retrieve */
    const { id } = useParams();
    const { addItem } = useContext(CartContext);
    const { products } = useContext(ItemContext);

    /* Get an individual product via id */
    const product = products.find((item) => {
      return item.id === parseInt(id);
    });
    

    /* if product is NOT found */
    if (!product) {
        return (
            <section className="h-screen flex justify-center items-center">
                Loading...
            </section>
        );
    } 
    console.log(product); 

    /* destructure of products */ 
    const { title, price, description, image } = product;
    
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
                <h1 className="text-[26px] text-black font-bold mb-2 max-w-[450px] mx-auto lg:mx-0">{title}</h1>
                <div className="text-2xl text-cyan-500 font-bold mb-6">$ {price}</div>
                <p className="mb-8 text-black">{description}</p>
                <button onClick={()=>addItem(product, product.id)} className='border border-[#006400] bg-green-200 py-4 px-8 text-black font-bold'>Add to cart</button>
              </div>
          </div>
        </div>
      </section>
    );
};  

export default ItemInfo; 