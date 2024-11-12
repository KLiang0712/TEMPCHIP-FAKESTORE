import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from 'react-icons/bs';
import { CartContext } from "../docs/CartDoc";

const Product = ({product}) => {
  const {addItem} = useContext(CartContext); 
     
  /* destructure product items using a renderList */  
  const { id, image, category, title, price } = product;
  return (
    <div>
      <div className="border border-[#16bbce] h-[300px] mb-4 relative overflow-hidden group transition">
          <div className="w-full h-full flex justify-center items-center bg-cyan-100">
              {/* image */}
              <div className="w-[200px] mx-auto flex justify-center items-center">
                <img
                  className="max-h-[160px] group-hover:scale-110 transition duration-300"
                  src={image}
                  alt=""
                />
              </div>
          </div>

            {/* buttons */}
            <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col justify-center items-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button onClick={() => addItem(product, id)}>
                  <div className="flex justify-center items-center text-white w-12 h-12 bg-green-500">
                    <BsPlus className="text-3xl" />
                  </div>
                </button>
                
                <Link
                  to={`/product/${id}`}
                  className="w-12 h-12 bg-teal-500 flex justify-center items-center text-primary drop-shadow-xl"
                >
                  <BsEyeFill />
                </Link>
            </div>
      </div>
          
      {/* category, title & price */}
      <div>
          <div className="text-sm capitalize text-black font-semibold mb-1">{category}</div>
          <Link to={`/product/${id}`}>
            <h2 className="text-green-900 font-semibold mb-1">{title}</h2>
          </Link>

          {/* (h2)$ {price}(/h2) */}
          <h2 className="text-cyan-600 font-bold">{`$ ${parseFloat(price).toFixed(2)}`}</h2>
      </div>
    </div>
  );
};

export default Product;