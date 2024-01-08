import React from 'react'
import ProductsData from './ProductsData';

const Main = (props: { productsData: TProductsData[], category: string, searchedValue: string, selected: boolean }) => {
  function ShowCategory() {
    return (
      <>
        {
          props.productsData.map((val) => {
            if (props.category === "") {
              return (
                <ProductsData key={val.id} id={val.id} image={val.image} title={val.title} description={val.description} price={val.price} rating={val.rating.rate} />
              )
            }
            else if (val.category === props.category) {
              return (
                <ProductsData key={val.id} id={val.id} image={val.image} title={val.title} description={val.description} price={val.price} rating={val.rating.rate} />
              )
            }
          })
        }
      </>
    )
  }

  function ShowSearch() {
    return (
      <>
        {
          props.productsData.map((val) => {
            if (val.title.toLowerCase().search(props.searchedValue) !== -1) {
              return (
                <ProductsData key={val.id} id={val.id} image={val.image} title={val.title} description={val.description} price={val.price} rating={val.rating.rate} />
              )
            }
          })
        }
      </>
    )
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 w-full p-10 pt-0 justify-center">
        {
          props.selected === true ? <ShowCategory /> : <ShowSearch />
        }
      </div>
    </>
  )
}

export default Main
