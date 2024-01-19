import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { categoryData, selectedCat } from '../store/productsApiRedux'

const CategoryData = (props: {
  setCollapse: React.Dispatch<React.SetStateAction<React.SetStateAction<boolean>>>;
}) => {
  const {
    setCollapse,
  } = props;
  const category = useSelector(categoryData)
  const selectedCategory = useSelector(selectedCat)
  const navigate = useNavigate();
  const all = "all products";

  function getCategory(val: string) {
    setCollapse(false);
    if (val === all) {
      navigate("/");
    }
    else {
      navigate(`/category/${val}`);
    }
  }

  return (
    <>
      {
        category.map((val: string, index: number) =>
          selectedCategory !== val ?
            <div
              key={index}
              onClick={() => getCategory(val)}
              className='text-lg font-normal cursor-pointer hover:border-orange-600 hover:border-s-8 hover:transition-all transition-all hover:ps-2 capitalize py-2'>
              {val}
            </div> :
            <div
              key={index}
              onClick={() => getCategory(val)}
              className='text-lg font-semibold underline-offset-1 cursor-pointer border-orange-600 border-s-8 hover:transition-all transition-all ps-2 capitalize py-2'>
              {val}
            </div>
        )
      }
    </>
  )
}

export default CategoryData
