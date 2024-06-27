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
import { cartValue } from '../store/cartRedux';
import { productsData, selectedCat, setFilteredData, setSelectedCategory } from '../store/productsApiRedux';

const Header = () => {
  const productsDataArray = useSelector(productsData)
  const selectedCategory = useSelector(selectedCat)
  const value = useSelector(cartValue)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { cat } = useParams();
  const all = "all products";

  const [titleData, setTitleData] = useState<Array<{ id: number, title: string }>>([])
  const [inputValue, setInputValue] = useState<string>("");
  const [searchedValue, setSearchedValue] = useState<string>("");
  const [collapse, setCollapse] = useState<React.SetStateAction<boolean>>(false);

  useEffect(() => {
    if (cat === undefined) {
      if (location.pathname === "/") {
        dispatch(setSelectedCategory(all));
        console.log(location.pathname);
      }
    }
    else {
      dispatch(setSelectedCategory(`${cat}`));
    }
  }, [location.pathname, cat])

  useEffect(() => {
    setInputValue("");
    const arrObj: TProductsData[] = [];
    const arrTitle: { id: number, title: string }[] = [];
    productsDataArray.forEach((val: TProductsData) => {
      if (selectedCategory === val.category) {
        arrObj.push(val);
        arrTitle.push({ id: val.id, title: val.title });
      }
      else if (selectedCategory === all) {
        arrObj.push(val);
        arrTitle.push({ id: val.id, title: val.title });
      }
    })
    dispatch(setFilteredData(arrObj));
    setTitleData(arrTitle);
  }, [selectedCategory])

  useEffect(() => {
    const arrObj: TProductsData[] = []
    productsDataArray.forEach((val: TProductsData) => {
      if (val.title.toLowerCase().search(searchedValue) !== -1 && (val.category === selectedCategory || selectedCategory === all)) {
        arrObj.push(val);
      }
    })
    dispatch(setFilteredData(arrObj));
  }, [searchedValue])

  const handleOnClick = () => {
    setSearchedValue(inputValue);
  }

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (selectedCategory === all) {
      navigate("/");
    }
    else {
      navigate(`/category/${selectedCategory}`);
    }
    setSearchedValue(inputValue);
    e.preventDefault();
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
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <div className="indicator">
                <HiOutlineShoppingCart className="h-5 w-5" />
                <span className="badge badge-sm border-0 bg-cyan-700 indicator-item text-white">{value}</span>
              </div>
            </div>
            <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
              <div className="card-body">
                <span className="font-bold text-lg">{value} Items</span>
                <span className="text-cyan-700">Subtotal: $0</span>
                <Link to={"/cart"}>
                  <div className="card-actions">
                    <button className="btn bg-cyan-700 hover:bg-cyan-800 btn-block text-white">View cart</button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={
        collapse === false ?
          "w-full -z-50 flex justify-center border-b-2 transition-all -translate-y-11" :
          "w-full -z-50 flex justify-center pt-4 pb-6 transition-all"
      }>
        <form
          onSubmit={handleOnSubmit}
          className={
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
        </form>
      </div>
    </>
  )
}

export default Header
