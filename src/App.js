import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* import CHIP pages */
// import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import ItemInfo from "./pages/ItemInfo";
// import Payment from "./pages/Payment";

/* import components */
import Navpane from "./component/Navpane";
import Banner from "./component/Banner";
import Footer from "./component/Footer";

const App = () => {
  return (<div className='overflow-hidden'>
    <Router>
      <Banner />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ItemInfo />} />
            {/* <Route path='/checkout' element={<Checkout />} /> */}
            {/* <Route path='/payment' element={<Payment />} /> */}
          </Routes>
        <Navpane />
      <Footer />
    </Router>
  </div>
  );
};

export default App;
