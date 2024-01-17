import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import StarRatings from 'react-star-ratings'
import { RootState } from '../store/store';
import { BsArrowLeft } from "react-icons/bs";

const ProductsInfoPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const productsDataArray = useSelector((state: RootState) => state.apiFetch.productsDataArray)
  const [productInfo, setProductInfo] = useState<TProductsData>();
  const [similarProducts, setSimilarProducts] = useState<TProductsData[]>([]);

  useEffect(() => {
    setProductInfo(location.state)
    const data = productsDataArray.filter((val: TProductsData) => {
      if (location.state.category === val.category && location.state.id !== val.id) {
        return val;
      }
    })
    setSimilarProducts(data);
  }, [location.state])

  return (
    <>
      <div className="md:px-24 p-5 pt-0 -m-2 mx-auto text-gray-700 body-font overflow-hidden">
        <div className='flex justify-end cursor-pointer'>
          <BsArrowLeft onClick={() => navigate("/")} className='sm:h-6 sm:w-6 h-5 w-5 mb-2' />
        </div>
        <div className="md:w-full xs:w-4/5 mx-auto flex flex-wrap items-center">
          <img className="max-h-96 md:w-[40%] w-full object-scale-down md:border-0 border-2 border-gray-200 object-center md:pe-10 md:p-0 md:py-0 p-10 py-5" src={productInfo?.image} alt="products" />
          <div className="md:w-[60%] w-full md:pl-10 mt-6 md:mt-0 border-s-0">
            <h1 className="text-gray-900 text-2xl title-font font-medium">{productInfo?.title}</h1>
            <div className="flex justify-between items-center my-4">
              <span className="font-medium text-xl text-gray-900">$ {productInfo?.price}</span>
              <StarRatings
                rating={productInfo?.rating.rate}
                starDimension="1rem"
                starSpacing="1px"
                numberOfStars={5}
                starRatedColor="#FFA41C" />
            </div>
            <div className="my-6 border-b-2 border-gray-200"></div>
            <h1 className="text-lg font-extrabold mb-2 underline">DESCRIPTION</h1>
            <p className="leading-relaxed text-justify">{productInfo?.description}</p>
            <div className="my-6 border-b-2 border-gray-200"></div>
            <div className="flex justify-center">
              <button className="btn py-2 px-6 text-white bg-orange-600 hover:bg-orange-700 border-0  focus:outline-none rounded mr-4">Add to cart</button>
              <button className="btn py-2 px-6 text-white bg-slate-500 hover:bg-slate-600 border-0 focus:outline-none rounded ml-4">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="md:p-24 p-5">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-10">Customers also bought</h2>
        <div className="w-full space-x-10 rounded-box overflow-x-scroll inline-flex pb-2">
          {similarProducts.map((val) =>
            <div
              key={val.id}
              onClick={() => navigate("/product", { state: val })}
              className="carousel-item rounded-box gradient cursor-pointer flex-col">
              <img src={val.image} alt='' className="p-16 -z-10 rounded-box h-96 w-80 object-scale-down" />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default ProductsInfoPage
