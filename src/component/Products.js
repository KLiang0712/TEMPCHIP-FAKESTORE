import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { BsPlus, BsEyeFill } from 'react-icons/bs';

import { CartContext } from "../docs/CartDoc"; 

const Product = ({product}) => {
    console.log(product);

    const products = useSelector(state => state.allProducts.products); 
    const renderList = products.map((product) => {

    // destructure product items 
    const {id, title, image, price, category } = product;     
        
    return (
        <div>
            <div className="border border-[#16bbce] h-[300px] mb-4 relative overflow-hidden group transition">
                <div className="w-full h-full flex justify-center items-center">
                        {/* image */}
                        <div className="w-[200px] mx-auto flex 
                        justify-center item-center">
                            <img className="max-w-[160px] 
                            group-hover:scale-110 transition duration-300"
                            src={image}
                            alt=''
                        />
                        </div>
                </div>
                {/* category & title & price */}    
                    
                <div>
                    <div className="text-sm capitalize text-gray-500 mb-1">{category}</div>
                    <Link to={`/product/${id}`}>
                        <h2 className="font-semibold mb-1">{title}</h2>
                    </Link>
                    <div className="font-semibold">$ {price}</div>
                </div>

                {/* buttons */}
                <div className="absolute top-6 right-11 
                    group-hover:right-5 bg-green-900 
                    p-2 flex flex-col items-center justify-center
                    gap-y-2 opacity-0 group-hover:opacity-100 
                    transition-all duration-300">
                        
                    <button onClick={() => addItem(product, id)}>
                        <div className="
                            flex justify-center items-center text-white 
                            w-12 h-12 bg-green-300">
                                <BsPlus className="text-3xl" />
                                Add to Cart
                        </div>
                    </button>
                    <Link 
                        to={`/product/${id}`}
                    className="w-12 h-12 bg-white flex justify-center"><BsEyeFill /></Link>

                </div>
            </div>
            <div>2</div>
        </div>
        )
    });
    return <>{renderList}</>
};

export default Product; 