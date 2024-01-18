import React, { createContext, useEffect } from 'react';
import Main from './pages/AllProductsPage';
import instance from './common/API';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MasterLayout from './pages/MasterLayout';
import { productsDataReceived } from './store/apiFetchRedux';
import { useDispatch } from 'react-redux';
import ProductsInfoPage from './pages/ProductsInfoPage';

export const AppContext = createContext<TProductsData[]>([]);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    try {
      const res = await instance.get("/products");
      dispatch(productsDataReceived(res.data));
    } catch (err) {
      console.log("Data Response Error", err);
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MasterLayout />}>
          <Route index element={<Main />} />
          <Route path="/category/:cat" element={<Main />} />
          <Route path="/product/:id" element={<ProductsInfoPage />} />
        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
