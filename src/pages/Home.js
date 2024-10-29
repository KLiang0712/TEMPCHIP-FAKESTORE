import React, {useContext} from "react";
import { ItemContext } from "../docs/ItemDoc";

/* components */
import Product from "../component/Products";
import Catalog from "../component/Catalog";

const Home = () => {
  const {products} = useContext(ItemContext); 
  console.log(products);

  // filtered products
  const filteredItems = products.filter((item) => {
      return (
        item.category === "men's clothing" ||  
        item.category === "women's clothing"  
      );
  });

  console.log(filteredItems); 
  
  return ( 
    <div>
      <Catalog />
      <section className='py-16'>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2
            lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm
            mx-auto md:max-w-none md:mx-0">

              {filteredItems.map((product) => {
                return <Product product={product} key={product.id} />;
                  /*
                  (
                  <div 
                    className='w-full h-[300px] bg-blue-50 mb-4' 
                    key={product.id}
                  >
                    {product.title}
                  </div>
                  );
                  */
              })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;