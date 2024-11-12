/* Source: https://github.com/nsafarova/ecommerce-shop-react-app/blob/master/src/components/Hero.js */

import React from 'react';
import { Link } from "react-router-dom";
import Exhibit from '../images/exhibit2-2.svg';

const Catalog = () => {
  return (
    <section className="h-[900px] bg-cyan-600 bg-no-repeat bg-cover bg-center py-20">
      {/* image */}
        <div className='hiden lg:block'>
          <div>
          <img className="h-[300px]" src={Exhibit} alt="" />
          </div>
        </div>

        <div className="container mx-auto flex justify-around h-full">
          {/* text */}  
          <div className="flex flex-col justify-center">
            <div className="font-semibold flex items-center uppercase">
              <div className="w-10 h-[2px] mr-3 bg-white"></div>Hot New Trends
            </div>
            <h1 className="uppercase text-[55px] md:text-[70px] leading-[1.1] font-semibold mb-4">Fall Clothing & Gift Sale!</h1>
            <Link to={'/'} className="self-start uppercase font-semibold border-b-2 border-primary">Discover More</Link>
          </div> 
      </div>
        
  </section>
  );
}; 

export default Catalog;
