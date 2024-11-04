/* 
Source: https://github.com/nsafarova/ecommerce-shop-react-app/blob/master/src/components/Header.js 
*/

import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {BsBag} from 'react-icons/bs';

/* import docs */
import Logo from '../images/logo2-2.svg'; 
import { NavContext } from "../docs/NavDoc";
import { CartContext } from "../docs/CartDoc";
import {ItemContext } from "../docs/ItemDoc";

const Banner = () => 
{
  /* header state */
  const [isActive, setIsActive] = useState(false); 
    const {isOpen, setIsOpen} = useContext(NavContext);
  const { itemAmount } = useContext(CartContext); 

  /* Products & Categories */
  const { setSelectedCategory, setProducts } = useContext(ItemContext);
  const [categories, setCategories] = useState([]);

  /* Event Listener */
  useEffect(() => { 
    window.addEventListener('scroll', () => {
        window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
      }); 
  }, []);

  /* Fetch categories */
  useEffect(() => {
    fetchCategories();
  }, []);
    
  const fetchCategories = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products/categories');
      const data = await response.json();
      const uniqueCategories = [...new Set(data.map(item => item.category))];
      setCategories(['All', ...uniqueCategories]);
    } catch (error) {
      console.error('Failed to fetch categories:', error);
    }
  };
  
  const handleCategoryChange = async (event) => {
    const selectedCategory = event.target.value;
    setSelectedCategory(selectedCategory);
  

    /* Fetch products based on selected category */
    try {
      let apiUrl = 'https://fakestoreapi.com/products/categories';
      if (selectedCategory !== 'All') {
        apiUrl += `?category=${selectedCategory}`;
      }
      
      const response = await fetch(apiUrl);
      const data = await response.json();
      
      setProducts(data);
    } catch (error) {
      console.error('Failed to fetch products:', error);
    }
  };

  return (
    <header className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'
    } fixed w-full z-10 transition-all`}>  
      
      <div className="container mx-auto flex items-center 
        justify-between h-full"> 
          <Link to={'/'}>
              <div>
                <img className="w-[40px]" src={Logo} alt='' />
              </div>
          </Link>

        {/* Category Filter */}
        <select
          id='category'
          className='border border-black px-2 py-1 rounded'
          onChange={handleCategoryChange}
        >
          {categories.map((category, index) => (
            <option value={category} key={index}>
              {category}
            </option>
          ))}
        </select>

          {/* cart */}
          <div 
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer flex relative"
            >
              <BsBag className='text-2xl' /> 
              
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