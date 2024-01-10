import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import instance from './common/API';

function App() {
  const [productsDataArray, setProductsDataArray] = useState<Array<TProductsData>>([]);
  const [filteredDataArray, setFilteredData] = useState<Array<TProductsData>>(productsDataArray);
  const [categoryData, setCategoryData] = useState<Array<string>>([""]);
  const [titleData, setTitleData] = useState([{ id: 0, title: "" }]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [searchedValue, setSearchedValue] = useState<string>("");
  const [selected, setSelected] = useState<boolean>(true); 

  async function apiCall() {
    try {
      const res = await instance.get("/products");
      setSelectedCategory("all products")
      setProductsDataArray(res.data);
      {
        const arrCategory: string[] = [];
        res.data.forEach((val: TProductsData) => {
          arrCategory.push("all products", val.category)
        })
        setCategoryData(removeDuplicate(arrCategory));
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

  useEffect(() => {
    const arrObj: TProductsData[] = []
    const arrTitle: { id: number, title: string }[] = [];
    productsDataArray.forEach((val) => {
      if (selectedCategory === val.category) {
        arrObj.push(val);
        arrTitle.push({ id: val.id, title: val.title });
      }
      else if (selectedCategory === "all products") {
        arrObj.push(val);
        arrTitle.push({ id: val.id, title: val.title });
      }
    })
    setFilteredData(arrObj);
    setTitleData(arrTitle);
  }, [selectedCategory])

  return (
    <>
      <Header
        filteredDataArray={filteredDataArray}
        selectedCategory={selectedCategory}
        titleData={titleData} 
        categoryData={categoryData} 
        setSelectedCategory={setSelectedCategory} 
        setSearchedValue={setSearchedValue} 
        selected={selected} 
        setSelected={setSelected} />
      
      <Main 
        filteredDataArray={filteredDataArray}
        selectedCategory={selectedCategory}
        searchedValue={searchedValue}
        selected={selected} />
    </>
  );
}

export default App;
