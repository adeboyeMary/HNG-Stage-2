import React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './main.css';
import RootLayout from './pages/RootLayout';
import Product from './pages/Product';
import Checkout from './pages/Checkout';
import OrderSuccessful from './pages/OrderSuccessful';
import ProductDetails, { loader as productDetailsLoader } from './pages/ProductDetails';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Product />,
        // loader: productLoader
      },
      {
        path: 'checkout',
        element: <Checkout />,
        // loader: cartLoader
      },
      {
        path: 'orderSuccessful',
        element: <OrderSuccessful />
      },
      {
        path: ':productId',
        element: <ProductDetails />,
        // loader: productDetailsLoader
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
