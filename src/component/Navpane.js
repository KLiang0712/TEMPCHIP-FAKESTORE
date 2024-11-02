import React, { useContext } from "react";

import { Link, useNavigate } from 'react-router-dom'; 

import { IoMdArrowForward } from 'react-icons/io';
import { IoIosTrash } from 'react-icons/io';

import ItemList from "../component/ItemList";
import { NavContext } from "../docs/NavDoc";
import { CartContext } from "../docs/CartDoc";

const Navpane = () => {
  const { isOpen, handleClose } = useContext(NavContext);
  const { cart, clearCart, total, itemAmount } = (useContext(CartContext));
  
  /* navigate checkout function */
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div
      className={`${ isOpen ? 'right-0' : '-right-full'
      } w-full bg-white fixed top-0 h-full shadow-2xl 
        md:w-[35vw] xl:max-w-[30vw] transition-all 
        duration-300 z-20 px-4 lg:px-[35px]`}>

      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">
          Shopping Bag ({itemAmount})
        </div>
        {/* icon */}
        <div
          onClick={handleClose}
          className="cursor-poniter w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>

      <div className="flex flex-col gap-y-2 h-[520px]
      lg:h-[640px] overflow-y-auto overflow-x-hidden border-b">
        {cart?.map((item) => {
          return <ItemList item={item} key={item.id}/>;
        })}
      </div>

      <div className="flex flex-col gap-y-3 py-4 mt-4">
        <div className="flex w-full justify-between items-center">
          {/* total */}
          <div className="uppercase font-semibold">
            <span className="mr-2">Total:</span>$ {parseFloat(total).toFixed(2)}
          </div>
          {/* clear cart icon */}
          <div
            onClick={clearCart}
            className="cursor-pointer py-4 bg-red-500 
            text-white w-12 h-12 flex justify-center 
            items-center text-xl"
          >
            <IoIosTrash />
          </div>
        </div>
        <Link
          to={"/"}
          className="bg-gray-200 flex p-3 justify-center items-center text-primary w-full font-medium"
        >
          View Cart
        </Link>
        <Link
          to={"/"}
          className="bg-primary flex p-3 justify-center items-center text-white w-full font-medium"
        >
          Checkout
        </Link>

        <button onClick={handleCheckout} className='bg-primary flex p-4 justify-center items-center text-white w-full font-medium'>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Navpane;