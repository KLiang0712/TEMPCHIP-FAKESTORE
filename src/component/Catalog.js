import React from 'react';
import { Link } from "react-router-dom";
import Theme from '../images/theme2-2.svg';

const Catalog = () => {
  return (
    <section className="h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24">
  
    {/* text */}
    <div className="container mx-auto flex justify-around h-full">
        {/* image */}
        <div className='flex flex-col justify-center'>
            {/* pretitle */}
            <div className="flex flex-col items-center uppercase">
                <div className="font-bold w-10 h-[2px] mr-3">New Trends
                </div>
            </div>
            
        </div>
      
  
        {/* title */}
        <h1 className="uppercase text-[55px] md:text-[70px] leading-[1.1] font-bold mb-4"><br />
          <span className="font-bold">Fall Clothes Sale!</span>
        </h1>
        
        <Link 
          to={'/'} 
          className='self-start uppercase font-bold border-b-2 border-primary'
        >
            Discover More
        </Link>
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
