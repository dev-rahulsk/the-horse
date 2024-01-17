import React from 'react'
import { useNavigate } from 'react-router-dom';
import StarRatings from 'react-star-ratings';

const ProductsCardData = (props: {
  data: TProductsData
}) => {
  const { data } = props;
  const navigate = useNavigate();

  const handleOnBtnClick = (e: any) => {
    e.stopPropagation()
    console.log("onClick on card");
  }

  return (
    <>
      <div key={data.id} className="card group relative rounded-box place-items-center justify-center cursor-pointer">
        <div className="card card-compact bg-base-100 shadow-xl w-full h-full">
          <figure className='aspect-square'>
            <img src={data.image} className='w-52 h-52 object-scale-down' alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title line-clamp-1">{data.title}</h2>
            <p className="overflow-ellipsis line-clamp-2">{data.description}</p>
            <div className="card-actions items-center justify-between py-2">
              <h2 className="card-title font-medium text-lg line-clamp-1">${data.price}</h2>
              <StarRatings
                rating={data.rating.rate}
                starDimension="1rem"
                starSpacing="0px"
                numberOfStars={5}
                starRatedColor="#FFA41C" />
            </div>
          </div>
        </div>
        <div
          onClick={() => navigate("/product", { state: data })}
          className="absolute rounded-box flex justify-center items-center left-0 w-full h-0 bg-gradient-to-b from-slate-600 to-slate-600 via-slate-500 opacity-0 group-hover:h-full group-hover:opacity-40 duration-500">
          <button className="text-normal hover:outline-none rounded-full btn z-30" onClick={handleOnBtnClick}>Quick Add</button>
        </div>
      </div>
    </>
  )
}

export default ProductsCardData
