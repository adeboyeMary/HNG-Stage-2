import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './main.css';
import RootLayout from './pages/RootLayout';
import Product from './pages/Product';
import Checkout from './pages/Checkout';
import OrderSuccessful from './pages/OrderSuccessful';
import ProductDetails from './pages/ProductDetails';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Product />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
      },
      {
        path: 'orderSuccessful',
        element: <OrderSuccessful />
      },
      {
        path: ':productId',
        element: <ProductDetails />,
      }
    ]
  }
]);

function App() {
  return (
    <React.Fragment>
        <RouterProvider router={router} />
    </React.Fragment>
  );
}

export default App;
