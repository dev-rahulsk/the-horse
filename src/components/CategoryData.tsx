import React from 'react'

const CategoryData = (props: {
  selectedCategory: string
  categoryData: string[]
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>
  setSelected: React.Dispatch<React.SetStateAction<boolean>>
  setCollapse: React.Dispatch<React.SetStateAction<React.SetStateAction<boolean>>>;
}) => {
  return (
    <>
      {
        props.categoryData.map((val, index) =>
          props.selectedCategory !== val ?
            <div
              key={index}
              onClick={() => { props.setSelectedCategory(val); props.setSelected(true); props.setCollapse(false) }}
              className='text-lg font-extralight cursor-pointer hover:border-orange-600 hover:border-s-8 hover:transition-all transition-all hover:ps-2 capitalize py-2'>{val}</div> :
            <div
              key={index}
              onClick={() => { props.setSelectedCategory(val); props.setSelected(true); props.setCollapse(false) }}
              className='text-lg font-extralight cursor-pointer border-orange-600 border-s-8 hover:transition-all transition-all ps-2 capitalize py-2'>{val}</div>
        )
      }
    </>
  )
}

export default CategoryData
