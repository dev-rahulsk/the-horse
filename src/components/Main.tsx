import React from 'react'
import ProductsCardData from './ProductsCardData';

const Main = (props: {
  filteredDataArray: TProductsData[], 
  selectedCategory: string, 
  searchedValue: string, 
  selected: boolean,
}) => {

  function ShowCategoryData() {
    return (
      <>
        {
          props.filteredDataArray.map((val) => {
            return (
              <ProductsCardData key={val.id} id={val.id} image={val.image} title={val.title} description={val.description} price={val.price} rating={val.rating.rate} />
            )
          })
        }
      </>
    )
  }

  function ShowSearchData() {
    return (
      <>
        {
          props.filteredDataArray.map((val) => {
            if (val.title.toLowerCase().search(props.searchedValue) !== -1) {
              return (
                <ProductsCardData key={val.id} id={val.id} image={val.image} title={val.title} description={val.description} price={val.price} rating={val.rating.rate} />
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
          props.selected === true ? <ShowCategoryData /> : <ShowSearchData />
        }
      </div>
    </>
  )
}

export default Main
