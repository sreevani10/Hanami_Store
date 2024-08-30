import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter } from 'react-router-dom';
import ProductPage from './components/ProductPage/ProductPage'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
  },
  {
    path: "/products/:id",
    element : <ProductPage />
  }
])

reportWebVitals();
