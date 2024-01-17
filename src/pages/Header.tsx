import React, { useEffect, useState } from 'react'
import CategoryData from '../common/CategoryData'
import { useDispatch, useSelector } from 'react-redux'
import { filteredDataReceived } from '../store/filteredDataRedux'
import Input from '../common/Input'
import { RootState } from '../store/store'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { IoMdClose } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { HiOutlineShoppingCart, HiOutlineMenuAlt2 } from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs";
import { setCategory } from '../store/categoriesRedux'

const Header = () => {
  const productsDataArray = useSelector((state: RootState) => state.apiFetch.productsDataArray)
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    if (location.pathname === "/product") {
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
            <svg strokeWidth="187" height="20" className='h-4' viewBox="0 0 187 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M172.836 19.6117H187V14.5757H184.456V17.2607H177.844V10.9469H183.926V8.66482H177.844V2.69051H184.456V5.38654H186.972V0.353216H172.836V2.72086H175.176V17.2386H172.836V19.6117ZM151.742 15.7484C151.742 14.5232 152.47 13.723 153.502 13.723C154.551 13.723 155.255 14.5232 155.255 15.34C155.255 15.8588 155.103 16.2479 154.877 16.5929C155.547 17.1779 156.839 17.6166 158.387 17.6166C160.724 17.6166 162.222 16.477 162.222 14.5729C162.222 12.7627 160.465 11.9045 158.414 11.1511C154.965 9.85692 152.473 8.68966 152.473 5.27064C152.47 2.25451 154.877 0 158.591 0C161.96 0 164.59 1.81851 164.59 3.9516C164.59 5.15474 163.829 5.85565 162.89 5.85565C161.778 5.85565 161.108 5.03884 161.108 4.16132C161.108 3.68945 161.257 3.39694 161.425 3.13203C160.901 2.66291 159.758 2.31522 158.561 2.31522C156.422 2.31522 155.133 3.45765 155.133 5.06368C155.133 6.90702 156.864 7.70175 159.055 8.5434C162.363 9.77138 164.855 10.9773 164.855 14.3742C164.855 17.8815 162.104 19.9622 158.323 19.9622C154.551 19.9622 151.742 17.8291 151.742 15.7484ZM135.475 9.74378C134.509 9.74378 133.836 9.72171 133.339 9.68583V2.72086H135.563C138.403 2.72086 140.249 3.86605 140.249 6.11504C140.249 8.43302 138.226 9.74378 135.475 9.74378ZM128.333 19.6117H135.795V17.2386H133.339V11.9707C133.836 11.9983 134.597 12.0342 135.295 12.0342C135.684 12.0342 136.065 11.9983 136.438 11.9707L140.798 19.6117H144.868V17.2386H142.616L139.048 11.3001C141.328 10.475 142.975 8.60411 142.975 6.03226C142.975 2.36765 140.039 0.350456 135.706 0.350456H128.333V2.7181H130.676V17.2358H128.333V19.6117ZM118.449 9.98386C118.449 5.6818 115.49 2.46423 111.398 2.46423C107.27 2.46423 104.312 5.65145 104.312 9.98386C104.312 14.2914 107.27 17.509 111.398 17.509C115.49 17.509 118.449 14.3135 118.449 9.98386ZM101.588 9.98386C101.588 4.33241 105.686 0 111.456 0C117.132 0 121.169 4.36276 121.169 9.98386C121.169 15.627 117.069 19.965 111.31 19.965C105.625 19.9622 101.588 15.5994 101.588 9.98386ZM74.4926 19.6117H81.9625V17.2386H79.5011V10.9469H89.4215V17.2386H86.96V19.6117H94.4244V17.2386H92.0871V2.72086H94.4244V0.353216H86.96V2.72086H89.4215V8.63447H79.5011V2.72086H81.9625V0.353216H74.4926V2.72086H76.8354V17.2386H74.4926V19.6117ZM51.5584 17.6829H54.0171V2.2821H51.5584V0.353216H65.5491V5.06644H63.4629V2.25451H56.2054V8.86626H62.5026V10.7372H56.2054V17.7049H63.4629V14.8985H65.5739V19.6117H51.5557V17.6829H51.5584ZM22.9976 19.6117H30.1723V17.6829H27.6557V10.7124H38.3046V17.6829H35.7907V19.6117H42.9598V17.6829H40.4984V2.2821H42.9598V0.353216H35.7907V2.2821H38.3046V8.78072H27.6557V2.2821H30.1723V0.353216H22.9976V2.2821H25.4536V17.6829H22.9976V19.6117ZM4.30481 17.6829H6.90426V2.19656H2.07514V5.29823H0V0.353216H16.0078V5.29823H13.9299V2.19656H9.10634V17.6829H11.7113V19.6117H4.30481V17.6829Z" fill="currentColor"></path>
            </svg>
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
              <span className="badge badge-sm bg-orange-600 indicator-item text-white">8</span>
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
          <BsArrowRight onClick={handleOnClick} className="w-6 h-6 mb-3" />
        </div>
      </div>
    </>
  )
}

export default Header
