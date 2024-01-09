import React from 'react'
import StarRatings from 'react-star-ratings';

const ProductsCardData = (props: {
  id: number; image: string; title: string; description: string; price: number; rating: number
}) => {
  return (
    <>
      <div key={props.id} className="card rounded-box place-items-center">
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure className='aspect-square '>
            <img src={props.image} className='w-52 h-52 object-scale-down' alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title line-clamp-1">{props.title}</h2>
            <p className="overflow-ellipsis line-clamp-2">{props.description}</p>
            <div className="card-actions items-center justify-between py-2">
              <div>
                <h2 className="card-title font-medium text-lg line-clamp-1">${props.price}</h2>
                <StarRatings
                  rating={props.rating}
                  starDimension="1rem"
                  starSpacing="1px"
                  numberOfStars={5}
                  starRatedColor="#FFA41C" />
              </div>
              <button className="btn bg-green-500">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductsCardData
