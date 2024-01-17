import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { RootState } from '../store/store'

const CategoryData = (props: {
  selectedCategory: string
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>
  setCollapse: React.Dispatch<React.SetStateAction<React.SetStateAction<boolean>>>;
}) => {
  const {
    selectedCategory,
    setSelectedCategory,
    setCollapse,
  } = props;
  const category = useSelector((state: RootState) => state.categories.category)
  const navigate = useNavigate();
  let { cat } = useParams();

  function getCategory(val: string) {
    setCollapse(false);
    if (val === "all products") {
      navigate("/");
    }
    else {
      navigate(`/category/${val.replace(/\s/g, '-')}`);
    }
  }

  useEffect(() => {
    cat === undefined ? setSelectedCategory("all products") : setSelectedCategory(`${cat.replace(/-/g, ' ')}`);    
  }, [cat])

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
