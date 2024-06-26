import React, { useEffect, useState } from 'react'
import ProductsCard from '../components/ProductsCard';
import NoProduct from '../assets/no-product.gif'
import { useSelector } from 'react-redux';
import { filteredData } from '../store/productsApiRedux';

const AllProducts = () => {
  const filteredDataArray = useSelector(filteredData)
  const [checkError, setCheckError] = useState<boolean>(true);

  useEffect(() => {
    const arrObj = filteredDataArray;
    arrObj.length !== 0 ? setCheckError(false) : setCheckError(true);
  }, [filteredDataArray]) 

  function ShowProducts() {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 w-full p-10 pb-10 pt-0 justify-center">
        {
          filteredDataArray.map((val: TProductsData) => {
            return (
              <ProductsCard key={val.id} data={val} />
            )
          })
        }
      </div>
    )
  }

  function ShowError() {
    return (
      <div className="flex justify-center">
        <img src={NoProduct} alt="no-products" className='object-scale-down' />
      </div>
    )
  }

  return (
    checkError === false ? ShowProducts() : ShowError()
  )
}

export default AllProducts
