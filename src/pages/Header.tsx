import React, { useEffect, useState } from 'react'
import HeaderLogo from "../assets/HeaderLogo"
import Input from '../components/Input'
import CategoryData from '../components/CategoryData'
import { HiOutlineShoppingCart, HiOutlineMenuAlt2 } from "react-icons/hi";
import { MdCenterFocusStrong } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { RootState } from '../store/store'
import { setCategory } from '../store/categoriesRedux'
import { filteredDataReceived } from '../store/filteredDataRedux'

const Header = () => {
  const productsDataArray = useSelector((state: RootState) => state.apiFetch.productsDataArray)
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  
  const [filteredDataArray, setFilteredDataArray] = useState<Array<TProductsData>>([])
  const [titleData, setTitleData] = useState<Array<{ id: number, title: string }>>([])
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");
  const [searchedValue, setSearchedValue] = useState<string>("");
  const [collapse, setCollapse] = useState<React.SetStateAction<boolean>>(false);

  useEffect(() => {
    const arrCategory: string[] = ["all products"];
    productsDataArray.forEach((val: TProductsData) => {
      arrCategory.push(val.category)
    })
    let categories = Array.from(new Set(arrCategory));
    dispatch(setCategory((categories)));
    setSelectedCategory("all products")
  }, [productsDataArray])

  useEffect(() => {
    setSearchedValue("");
    const arrObj: TProductsData[] = [];
    const arrTitle: { id: number, title: string }[] = [];
    productsDataArray.forEach((val: TProductsData) => {
      if (selectedCategory === val.category) {
        arrObj.push(val);
        arrTitle.push({ id: val.id, title: val.title });
      }
      else if (selectedCategory === "all products") {
        arrObj.push(val);
        arrTitle.push({ id: val.id, title: val.title });
      }
    })
    setFilteredDataArray(arrObj)
    dispatch(filteredDataReceived(arrObj));
    setTitleData(arrTitle);
  }, [selectedCategory, productsDataArray])

  useEffect(() => {
    const arrObj: TProductsData[] = []
    filteredDataArray.forEach((val) => {
      if (val.title.toLowerCase().search(searchedValue) !== -1) {
        arrObj.push(val);
      }
    })
    if (location.pathname===`/product/${id}`) {
      navigate(-1);
    }
    dispatch(filteredDataReceived(arrObj));
  }, [searchedValue])

  const handleOnClick = () => {
    setSearchedValue(inputValue);
  }

  useEffect(() => {
    setInputValue("");
  }, [collapse])

  return (
    <>
      <div className="navbar bg-base-100 z-10 relative">
        <div className="navbar-start bg-base-100">
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label htmlFor="my-drawer" className="drawer-button">
                <div role="button" className="btn btn-ghost btn-circle">
                  <HiOutlineMenuAlt2 className="h-5 w-5" />
                </div>
              </label>
            </div>
            <div className="drawer-side z-10">
              <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay "></label>
              <div className="menu p-10 w-80 min-h-full bg-base-200">
                {/* Sidebar content here */}
                <label htmlFor="my-drawer" aria-label="close sidebar">
                  <IoMdClose className="sm:h-6 sm:w-6 h-5 w-5 cursor-pointer" />
                </label>
                <div className='pt-10'>
                  <label htmlFor="my-drawer" aria-label="close sidebar" className='h-screen'>
                    <CategoryData
                      selectedCategory={selectedCategory}
                      setSelectedCategory={setSelectedCategory}
                      setCollapse={setCollapse} />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-center bg-base-100">
          <Link to='/' className="cursor-pointer">
            <HeaderLogo />
          </Link>
        </div>
        <div className="navbar-end bg-base-100">
          <button
            onClick={() => collapse === false ? setCollapse(true) : setCollapse(false)}
            className="sm:pe-4 pe-0">
            <label htmlFor="searchInput">
              <FiSearch className="h-5 w-5" />
            </label>
          </button>
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <HiOutlineShoppingCart className="h-5 w-5" />
              <span className="badge badge-sm border-0 bg-cyan-700 indicator-item text-white">0</span>
            </div>
          </div>
        </div>
      </div>
      <div className={
        collapse === false ?
          "w-full -z-50 flex justify-center border-b-2 transition-all -translate-y-11" :
          "w-full -z-50 flex justify-center pt-4 pb-6 transition-all"
      }>
        <div className={
          collapse === false ?
            'sm:w-96 w-64 flex items-center justify-between ' :
            'sm:w-96 w-64 flex items-center justify-between border-b-2 '
        }>
          <Input
            inputValue={inputValue}
            setInputValue={setInputValue}
            setSearchedValue={setSearchedValue}
            collapse={collapse}
            titleData={titleData}
          />
          <MdCenterFocusStrong onClick={handleOnClick} className="w-6 h-6 mb-3 cursor-pointer" />
        </div>
      </div>
    </>
  )
}

export default Header
