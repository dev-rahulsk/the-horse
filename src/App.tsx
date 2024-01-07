import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import instance from './common/API';

function App() {
  const [productsData, setProductsData] = useState<Array<TProductsData>>([{ id: 0, image: "", title: "", category: "", description: "", price: 0, rating: { count: 0, rate: 0 } }]);
  const [categoryData, setCategoryData] = useState<Array<string>>([""]);
  const [category, setCategory] = useState<string>("");

  async function apiCall() {
    try {
      const res = await instance.get("/products");
      setProductsData(res.data);
      console.log(res.data);
      
      {
        const arr: string[] = [];
        res.data.forEach((val: TProductsData) => {
          arr.push(val.category)
        })
        setCategoryData(removeDuplicate(arr));
      }
    } catch {
      console.log("Data Response Error");
    }
  }

  function removeDuplicate(arr: string[]) {
    let outputArray = Array.from(new Set(arr));
    return outputArray;
  }

  useEffect(() => {
    apiCall();
  }, [])

  return (
    <>
      <Header categoryData={categoryData} setCategory={setCategory} />
      <Main productsData={productsData} category={category} />
    </>
  );
}

export default App;
