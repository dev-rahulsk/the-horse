import React, { useEffect } from 'react';
import AllProducts from './pages/AllProductsPage';
import instance from './common/API';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MasterLayout from './pages/MasterLayout';
import { productsData, setCategory, setProductsData } from './store/productsApiRedux';
import { useDispatch, useSelector } from 'react-redux';
import ProductsInfoPage from './pages/ProductsInfoPage';
import Cart from './pages/Cart';

function App() {
  const productsDataArray = useSelector(productsData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (productsDataArray.length === 0) {
      fetchData();
    }
  }, [])

  const fetchData = async () => {
    try {
      const res = await instance.get("/products");
      dispatch(setProductsData(res.data));
      const arrCategory: string[] = ["all products"];
      res.data.forEach((val: TProductsData) => {
        arrCategory.push(val.category)
      })
      let categories = Array.from(new Set(arrCategory));
      dispatch(setCategory((categories)));
    } catch (err) {
      console.log("Data Response Error", err);
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MasterLayout />}>
          <Route index element={<AllProducts />} />
          <Route path="/category/:cat" element={<AllProducts />} />
          <Route path="/product/:id" element={<ProductsInfoPage />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
