/* Source: https://github.com/nsafarova/ecommerce-shop-react-app/blob/master/src/components/Hero.js */

import React from 'react';
import { Link } from "react-router-dom";
import Theme from '../images/theme2-2.svg';

const Catalog = () => {
  return (
    <section className="h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-20">
        <div className="container mx-auto flex justify-around h-full">
          {/* text */}
          <div className="flex flex-col justify-center">
            <div className="font-semibold flex items-center uppercase">
              <div className="w-10 h-[2px] mr-3 bg-cyan-700"></div>Hot New Trends
            </div>
            <h1 className="uppercase text-[55px] md:text-[70px] leading-[1.1] font-semibold mb-4">Fall Clothes Sale!</h1>
            <Link to={'/'} className='self-start uppercase font-semibold border-b-2 border-primary'>Discover More</Link>
          </div>
        </div>

        {/* image */}
        <div className='hiden lg:block'>
          <div>
            <img src={Theme} alt="" />
          </div>
        </div>
  </section>
  );
}; 

export default Catalog;
