/* Source: https://github.com/idrisibrahimerten/react-tailwind-ecommerce-website-project/blob/master/src/components/CartItem.js */

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';
import { CartContext } from '../docs/CartDoc';

const ItemList = ({item}) => {
  const {removeItem, increaseAmount, decreaseAmount } = useContext(CartContext);

  /* destructure items */
  const {id, title, image, price, amount} = item;

  return (
    <div className='flex gap-x-4 py-2 lg:px-6 border-b border-cyan-600 w-full font-light text-black'>
      <div className='w-full min-h-[150px] flex items-center 
        gap-x-4'>
        {/* image */}
        <Link to={`/product/${id}`}>
          <img className='max-w-[80px]' src={image} alt='' />
        </Link>
          
        <div className='w-full flex flex-col'>
            {/* title & remove icon */}
            <div className='flex justify-between mb-2'>
              {/* title */}
              <Link to={`/product/${id}`}
                className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline'>
                  {title}
              </Link>

              {/* remove icon */}
              <div onClick={()=> removeItem(id)} 
              className='text-xl cursor-pointer'>
                <IoMdClose className='text-black hover:text-red-300 transition' /> 
              </div>
            </div>

            <div className='bg-cyan-200 flex gap-x-2 h-[36px]
            text-sm'>
                {/* quantity */}
                
                <div className='border border-black flex flex-1 max-w-[100px]
                item-center h-full border text-primary font-bold text-black'>
                  
                  {/* minus icon */}
                  <div onClick={()=> decreaseAmount(id)}
                  className='border border-black flex-1 flex justify-center
                  items-center cursor-pointer h-full font-bold text-black'>
                    <IoMdRemove />
                  </div>

                  {/* amount */}
                  <div className='h-full flex justify-center items-center px-2 font-bold text-black'>
                    {amount}
                  </div>

                  {/* plus icon */}
                  <div onClick={()=> increaseAmount(id)} className='border border-black flex-1 h-full flex justify-center
                  items-center cursor-pointer font-bold text-black'>
                    <IoMdAdd />
                  </div> 
                </div>

                {/* item prices */}
                {/* (h2)$ {price}(/h2) */}
                <div className='border border-black flex-1 flex items-center justify-center font-bold'>{`$ ${parseFloat(price).toFixed(2)}`}</div>

                {/* final price */}
                <div className='flex-1 flex justify-center items-center text-primary bg-cyan-600 font-bold'>
                  {`$ ${parseFloat(price * amount).toFixed(2)}`}
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemList;