import React, { useContext } from "react";
import { ItemContext } from "../context/ItemDoc";

/* components */
import Product from "../function/Products";
import Catalog from "../function/Catalog";

const Home = () => {
  const { products } = useContext(ItemContext);
  console.log(products);

  // ESCUELA-PLATZI 
  /* 
  const filteredItems = products.filter((item) => {
  return ( item.category === "miscellaneous" || item.category === "clothes" 
      || item.category === "electronics" || item.category === "furniture" || item.category === "shoes" );
  });
  */
 
  // FAKESTORE API 
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