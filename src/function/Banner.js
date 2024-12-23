/* 
Source: https://github.com/nsafarova/ecommerce-shop-react-app/blob/master/src/components/Header.js 
*/

import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {BsBag} from 'react-icons/bs';

/* import context & Logo img */
import Logo from '../images/logo2-2.svg'; 
import { NavContext } from "../context/NavDoc";
import { CartContext } from "../context/CartDoc";

const Banner = () => {
  /* header state */
  const [isActive, setIsActive] = useState(false); 
  const {isOpen, setIsOpen} = useContext(NavContext);
  const { itemAmount } = useContext(CartContext); 

  /* Event Listener */
  useEffect(() => { 
    window.addEventListener('scroll', () => {
        window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
      }); 
  });

  return (
    <header className={`${isActive ? 'bg-black py-4 shadow-md' : 'bg-black py-6'} 
    fixed w-full z-10 lg:px-8 transition-all`}>  
      
      <div className="container mx-auto flex items-center justify-between h-full"> 
        <Link to={"/"}>
          <div className="w-[40px]">
            <img src={Logo} alt='' />
          </div>
        </Link>

          {/* cart */}
          <div 
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer flex relative"
            >
              <BsBag className='text-2xl bg-cyan-500' /> 
              
            <div className="bg-green-600 absolute -right-2
              -bottom-2 text-[12px] w-[18px] h-[18px] text-white
              rounded-full flex justify-center items-center">
                {itemAmount}
            </div>
          </div>
        </div>
    </header>
    );
}; 

export default Banner; 