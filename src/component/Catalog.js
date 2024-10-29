import React from 'react';

import Apparel from '../images/apparel2-2.svg';

import { Link } from "react-router-dom";


const Catalog = () => {
  return (
    <section className="h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24">
  
    {/* text */}
    <div className="container mx-auto flex justify-around h-full">
        {/* image */}
        <div className='flex flex-col justify-center'>
            {/* pretitle */}
            <div className="flex flex-col items-center uppercase">
                <div className="w-10 h-[2px] mr-3 bg-cyan-700"></div>New Trend
            </div>
            
        </div>
      
  
        {/* title */}
        <h1 className="uppercase text-[55px] md:text-[70px] leading-[1.1] font-semibold mb-4">Seasonal Sales<br />
        <span className="font-light">Fall Clothes</span></h1>
        <Link 
          to={'/'} 
          className='self-start uppercase font-semibold 
          border-b-2 border-primary'
          >
            Discover More
        </Link>
      </div>
    
      {/* image */}
      <div className='hiden lg:block'>
        <div>
          <img src={Apparel} alt="" />
        </div>
      </div>
  </section>  
  );
}; 

export default Catalog;
