import React, { useContext } from "react";
import { ItemContext } from "../docs/ItemDoc";
// import axios from "axios"; 

/* components */
import Product from "../component/Products";
import Catalog from "../component/Catalog";

const Home = () => {
  const { products } = useContext(ItemContext);
  console.log(products);
  
  /* fetch/retrieve */
  /*
  const fetchProducts = async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    setProducts(response.products);
    console.log(products);
  }
  
   useEffect(() => {
    fetchProducts();
  }, []);
  */

  /* products filter */
  /* 
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);

    if (selectedCategory === 'All') {
      setFilteredItems(products); 
    } else {
      const filteredItems = products.filter((item) =>
        item.category.toLowerCase().includes(category.toLowerCase())
      ); 
      setFilteredItems(filteredItems);
    }
  };
  */
 
  const filteredItems = products.filter((item) => {
    return ( item.category === "men's clothing" || item.category === "women's clothing" 
      || item.category === "electronics" || item.category === "jewelery" );
  });
 
  return ( 
  <div>
    <Catalog />
      <section className='py-16'>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredItems.map((product) => {
              return (
                <Product product={product} key={product.id}/>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home;