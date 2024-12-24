import React, { useContext } from "react";

import { Link } from 'react-router-dom'; 

import { IoMdArrowForward } from 'react-icons/io';
import { IoIosTrash } from 'react-icons/io';

import ItemList from "../function/ItemList";
import { NavContext } from "../context/NavDoc";
import { CartContext } from "../context/CartDoc";

const Navpane = () => {
  const { isOpen, handleClose } = useContext(NavContext);
  const { cart, clearCart, total, itemAmount } = (useContext(CartContext));
  
  /* navigate checkout function */
  /*
  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate('/checkout');
  };
  */
 
  return (
    <div className={`${ isOpen ? "right-0" : "-right-full" } 
    "w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] lg:w-[40vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]"`}
    >
      <div className="border border-[#16bbce] bg-cyan-200 flex items-center justify-between py-6">
          {/* text-sm: small text | text-md: medium text | text-lg: large text */}
          <div className="uppercase text-lg text-black font-bold">Shopping Bag ({itemAmount})</div>
            <div onClick={handleClose}
              className="cursor-pointer w-10 h-10 flex justify-center items-center text-black">
              <IoMdArrowForward className="text-2xl" />
          </div>
      </div>

      <div className="flex flex-col gap-y-2 h-[520px] md:h-[640px] lg:h-[580px] overflow-y-auto overflow-x-hidden border-b">
          {cart.map((item) => {return <ItemList item={item} key={item.id} />; })}
      </div>

      {/* Source:  */}
      <div className='flex flex-col gap-y-3 mt-4'>
        <div className='flex w-full justify-between items-center'>
          <div className='uppercase font-semibold text-black'>
            <span className='mr-2'>Total:</span> ${parseFloat(total).toFixed(2)}
          </div>
            
            {/* clear cart icon */}
            <div onClick={clearCart} 
              className="cursor-pointer py-4 bg-red-900 text-white flex justify-center items-center text-xl"
              >
                <IoIosTrash />
            </div>
        </div>        
          
          <Link to={"/"}
            className="border border-[#006400] bg-green-200 flex p-3 justify-center items-center text-black w-full font-bold"
            >View Cart
          </Link>

          <Link to={"/"}
              className="border border-[#006400] bg-green-800 flex p-3 justify-center items-center text-white w-full font-bold"
          >Checkout
          </Link>  
      
      </div>
  </div>
  );
};

export default Navpane;