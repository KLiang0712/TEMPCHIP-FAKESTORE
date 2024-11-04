import React, {useContext} from "react";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
import { BsPlus, BsEyeFill } from 'react-icons/bs';
import { CartContext } from "../docs/CartDoc";

const Product = ({product}) => {
    // console.log(product);
    const {addItem} = useContext(CartContext); 
    // const products = useSelector(state => state.allProducts.products); 
    
    /* destructure product items using a renderList */ 
    const {id, image, category, title, price} = product;
    
    // const renderList = products.map((product) => {
    
     // İndirimli fiyatı hesapla
  const bargain = (price - (price * 0 / 100)).toFixed(2);
   
    // Check if images array is empty
    const imageUrl = image && image.length > 0 ? image[0] : '';
    
    return (
        <div>
      <div className='border border-[#e4e4e4] h-[300px] mv-4 relative overflow-hidden group transition'>
        <div className='w-full h-full flex justify-center items-center'>
          {/* image */}
          <div className='w-[200px] mx-auto flex justify-center items-center'>
            <img className='max-h-[160px] group-hover:scale-110 transition duration-300' src={imageUrl} alt=""/>
          </div>
          {/* buttons */}
          <div className='absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
            <button onClick={() => addItem(product, id)}>
              <div className='flex justify-center items-center text-white w-12 h-12 bg-red-500'>
                <BsPlus className='text-3xl'/>
              </div>
            </button>
            <Link to={`/product/${id}`} className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl'><BsEyeFill/></Link>
          </div>
        </div>
      </div>
      {/* category & title & price */}
      <div className='text-sm capitalize text-gray-500 mb-1'>{category.name}</div>
      <Link to={`/product/${id}`}>
        <h2 className='font-semibold mb-1'>{title}</h2>
      </Link>
      <div className='font-semibold'>
        {/* Discounted Price - "bargain" */}
        {bargain < price && (
          <div className="flex items-center">
            <span className="line-through mr-1 text-gray-500">$ {price.toFixed(2)}</span>
            {/**  <span className="text-green-500">İndirim </span> */}
            <span>$ {bargain}</span>
          </div>
        )}
  
        {bargain >= price && (
          <span> $ { price.toFixed(2)}</span>
        )}
      </div>
    </div>
        
    );

    // return <>{renderList}</>
}

export default Product; 