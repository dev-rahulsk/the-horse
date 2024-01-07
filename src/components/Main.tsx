import React from 'react'
import ProductsData from './ProductsData';

const Main = (props: { productsData: TProductsData[], category: string }) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 w-full p-10 pt-0 justify-center">
        {
          props.productsData.map((val) => {
            if (props.category === "") {
              return (
                <ProductsData id={val.id} image={val.image} title={val.title} description={val.description} price={val.price} rating={val.rating.rate} />
              )
            }
            else if (val.category === props.category) {
              return (
                <ProductsData id={val.id} image={val.image} title={val.title} description={val.description} price={val.price} rating={val.rating.rate} />
              )
            }
          })
        }
      </div>
    </>
  )
}

export default Main
