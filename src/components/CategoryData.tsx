import React from 'react'

const CategoryData = (props: {
  categoryData: string[],
  setCategory: React.Dispatch<React.SetStateAction<string>>
}) => {
  return (
    <>
      {
        props.categoryData.map((val, index) =>
          <div
            key={index}
            onClick={() => props.setCategory(val)}
            className='text-lg font-extralight cursor-pointer hover:border-orange-600 hover:border-s-8 hover:transition-all transition-all hover:ps-2 capitalize py-2'>{val}</div>
        )
      }
    </>
  )
}

export default CategoryData
