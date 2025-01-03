import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import NavProvider from './context/NavDoc';
import ItemProvider from "./context/ItemDoc";
import CartProvider from './context/CartDoc';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <NavProvider>
    <CartProvider>
      <ItemProvider>
            <React.StrictMode>
              <App />
            </React.StrictMode>
      </ItemProvider>
    </CartProvider>
  </NavProvider>
);
