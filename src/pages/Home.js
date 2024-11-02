import React, {useState, useEffect, useContext} from "react";
import { ItemContext } from "../docs/ItemDoc";

/* components */
import Product from "../component/Products";
import Catalog from "../component/Catalog";

const Home = () => {
  const {products, selectedCategory, setSelectedCategory} = useContext(ItemContext); 
  // console.log(products);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();  
  }, []); 

  const fetchCategories = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      const uniqueCategories = [...new Set(data.map(item => item.category.name))];
      setCategories(['', ...uniqueCategories]);
    } catch (error) {
      console.error('Error 404:', error);
    }
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  /* filtered products */ 
  const filteredItems = products.filter((item) => {
    /*
    return (
      item.category === "men's clothing" || 
      item.category === "women's clothing" || 
      item.category === "jewelery" ||
      item.category === "electronics"
    );
    */
    if (selectedCategory === 'All') {
      return true; // Tüm ürünleri göster
    }
    return item.category.name === selectedCategory;
  });

  return ( 
  <div>
    <Catalog />
      <section className='py-16'>
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2
                lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm
                mx-auto md:max-w-none md:mx-0">
                  {filteredItems.map((product) => {
                    return <Product product={product} key={product.id}/>
                  })}
            </div>
        </div>
      </section>
    </div>
  )
}

export default Home;