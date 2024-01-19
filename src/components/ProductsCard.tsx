import React from 'react'
import { useNavigate } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import { increment } from '../store/cartRedux';
import { useDispatch } from 'react-redux';

const ProductsCardData = (props: {
  data: TProductsData
}) => {
  const { data } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    dispatch(increment());
  }

  return (
    <>
      <div key={data.id} className="card group relative rounded-box justify-center place-items-center cursor-pointer">
        <div className="card card-compact bg-base-100 shadow-xl w-full h-full">
          {/* <figure className=''> */}
            <img src={data.image} className='w-52 h-52 aspect-square mx-auto m-5 object-scale-down' alt="Shoes" />
          {/* </figure> */}
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
          onClick={() => navigate(`/product/${data.id}`, { state: data })}
          className="absolute rounded-box flex justify-center items-center left-0 w-full h-0 group-hover:h-full opacity-0 group-hover:opacity-100 duration-500">
          <button className="text-normal outline-none rounded-full btn z-30" onClick={handleOnBtnClick}>Quick Add</button>
        </div>
      </div>
    </>
  )
}

export default ProductsCardData
