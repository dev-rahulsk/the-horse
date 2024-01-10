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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 w-full p-10 pt-0 justify-center">
          {
            props.filteredDataArray.map((val) => {
              return (
                <ProductsCardData id={val.id} image={val.image} title={val.title} description={val.description} price={val.price} rating={val.rating.rate} />
              )
            })
          }
        </div>
      </>
    )
  }

  function ShowSearchData() {
    const arrObj = getSearchedArray(props.filteredDataArray);
    if (arrObj.length === 0) {
      return (
        <div>
          <img src={require("../assets/no-product.png")} alt="no-products" className='' />
        </div>
      )
    }
    return (
      <>
      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 w-full p-10 pt-0 justify-center">
          {
            arrObj.map((val) => {
              return (
                <ProductsCardData id={val.id} image={val.image} title={val.title} description={val.description} price={val.price} rating={val.rating.rate} />
              )
            })
          }
        </div>
      </>
    )
  }

  function getSearchedArray(data: TProductsData[]) {
    const arrObj: TProductsData[] = []
    data.forEach((val) => {
      if (val.title.toLowerCase().search(props.searchedValue) !== -1) {
        arrObj.push(val);
      }
    })
    return arrObj;
  }

  return (
    <>
      {
        props.selected === true ? <ShowCategoryData /> : <ShowSearchData />
      }
    </>
  )
}

export default Main
