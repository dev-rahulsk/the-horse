import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import StarRatings from 'react-star-ratings'
import { RiArrowGoBackFill } from "react-icons/ri";
import { increment } from '../store/cartRedux';
import { productsData, selectedCat } from '../store/productsApiRedux';

const ProductsInfoPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const selectedCategory = useSelector(selectedCat);
  const all = "all products";
  const productsDataArray = useSelector(productsData)
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

  const handleOnClick = () => {
    if (selectedCategory === all) {
      navigate("/");
    }
    else {
      navigate(`/category/${selectedCategory}`);
    }
  }

  const handleOnBtnClick = () => {
    dispatch(increment());
  }

  return (
    <>
      <div className="md:px-24 p-5 pt-0 -m-2 mx-auto text-gray-700 body-font overflow-hidden">
        <div className='flex justify-end cursor-pointer'>
          <RiArrowGoBackFill onClick={handleOnClick} className='sm:h-6 sm:w-6 h-5 w-5 mb-2' />
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
              <button className="btn md:w-40 w-28 text-white bg-cyan-700 hover:bg-cyan-800 border-0 focus:outline-none rounded-3xl mr-4" onClick={handleOnBtnClick}>Add to cart</button>
              <button className="btn md:w-40 w-28 text-white bg-zinc-700 hover:bg-zinc-800 border-0 focus:outline-none rounded-3xl ml-4">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="md:p-16 md:pb-10 pb-10 p-5">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-5">Customers also bought</h2>
        <div className="carousel w-full rounded-box overflow-x-scroll inline-flex pb-2">
          {similarProducts.map((val) =>
            <div
              key={val.id}
              onClick={() => navigate(`/product/${val.id}`, { state: val })}>
              <div className="carousel-item rounded-box cursor-pointer">
                <img src={val.image} alt='' className="md:max-h-96 max-h-60 max-w-64 md:p-5 -z-10 rounded-box aspect-square object-scale-down" />
              </div>
              <h1 className="text-lg max-w-64 font-extrabold mb-2 px-4 line-clamp-2 text-center cursor-pointer">{val.title}</h1>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default ProductsInfoPage
