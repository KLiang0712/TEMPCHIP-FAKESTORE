import React, {useState, useEffect} from "react";
import axios from "axios"; 
// import { ItemContext } from "../docs/ItemDoc";

/* components */
import Product from "../component/Products";
import Catalog from "../component/Catalog";
// import ItemInfo from "./ItemInfo";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  
 
  // const {products, selectedCategory, setSelectedCategory} = useContext(ItemContext); 
  // const [categories, setCategories] = useState([]);

  const fetchProducts = async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    setProducts(response.products);
    console.log(products);
  }

   /* fetch/retrieve */
   useEffect(() => {
    fetchProducts();
  }, []);

  /*
  useEffect(() => {
  fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((data) => {
      setProducts(data);
      setFilteredItems(data);
      });
  }, []); 
  */

  /*  
    fetchCategories();  
  }, []); 

  const fetchCategories = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products/categories');
      const data = await response.json();
      const uniqueCategories = [...new Set(data.map(item => item.category))];
      setCategories(['', ...uniqueCategories]);
    } catch (error) {
      console.error('Error 404:', error);
    }
  };
  */
  
  /* products filter */ 
  const handleCategoryChange = (category) => {
    // setSelectedCategory(event.target.value);
    setSelectedCategory(category);

    if (selectedCategory === 'All') {
      setFilteredItems(products); 
    } else {
      const filteredItems = products.filter((product) =>
        product.category.toLowerCase().includes(category.toLowerCase())
      ); 
      setFilteredItems(filteredItems);
    }
  };
  
  /*
  const filteredItems = products.filter(item => {

    if (selectedCategory === 'All') {
      return true;
      }

    return item.category === selectedCategory;
  });
  */ 

  return ( 
  <div>
    <Catalog />
      <section className='py-16'>
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2
                lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm
                mx-auto md:max-w-none md:mx-0">
                  {filteredItems.map((product) => {
                    return (
                      <Product product={product} key={product.id} 
                        selectedCategory={selectedCategory}
                        onCategoryChange={handleCategoryChange}
                      />
                    );
                  })}
            </div>
        </div>
      </section>
    </div>
  )
}

export default Home;