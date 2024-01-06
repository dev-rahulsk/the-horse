import React from 'react'

const Header = (props: {
  categoryData: string[],
  setCategory: React.Dispatch<React.SetStateAction<string>>
}) => {

  return (
    <>
      <div className="navbar bg-base-100 border-b-2">
        <div className="navbar-start">
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label htmlFor="my-drawer" className="drawer-button">
                <div role="button" className="btn btn-ghost btn-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </div>
              </label>
            </div>
            <div className="drawer-side z-10">
              <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
              <div className="menu p-10 w-80 min-h-full bg-base-200">
                {/* Sidebar content here */}
                <button className="">
                  <label htmlFor="my-drawer" aria-label="close sidebar">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                  </label>
                </button>
                <div className='pt-10'>
                  <label htmlFor="my-drawer" aria-label="close sidebar">
                  <div
                    onClick={() => props.setCategory("")}
                    className='text-lg font-extralight cursor-pointer hover:border-orange-600 hover:border-s-8 hover:transition-all transition-all hover:ps-2 capitalize py-2'>All Products</div>
                  {
                    props.categoryData.map((val, index) =>
                    <div
                    key={index}
                    onClick={() => props.setCategory(val)}
                    className='text-lg font-extralight cursor-pointer hover:border-orange-600 hover:border-s-8 hover:transition-all transition-all hover:ps-2 capitalize py-2'>{val}</div>
                    )
                  }
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-center">
          <a href='/' className="font-semibold text-2xl cursor-pointer">
            <svg width="187" height="20" viewBox="0 0 187 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M172.836 19.6117H187V14.5757H184.456V17.2607H177.844V10.9469H183.926V8.66482H177.844V2.69051H184.456V5.38654H186.972V0.353216H172.836V2.72086H175.176V17.2386H172.836V19.6117ZM151.742 15.7484C151.742 14.5232 152.47 13.723 153.502 13.723C154.551 13.723 155.255 14.5232 155.255 15.34C155.255 15.8588 155.103 16.2479 154.877 16.5929C155.547 17.1779 156.839 17.6166 158.387 17.6166C160.724 17.6166 162.222 16.477 162.222 14.5729C162.222 12.7627 160.465 11.9045 158.414 11.1511C154.965 9.85692 152.473 8.68966 152.473 5.27064C152.47 2.25451 154.877 0 158.591 0C161.96 0 164.59 1.81851 164.59 3.9516C164.59 5.15474 163.829 5.85565 162.89 5.85565C161.778 5.85565 161.108 5.03884 161.108 4.16132C161.108 3.68945 161.257 3.39694 161.425 3.13203C160.901 2.66291 159.758 2.31522 158.561 2.31522C156.422 2.31522 155.133 3.45765 155.133 5.06368C155.133 6.90702 156.864 7.70175 159.055 8.5434C162.363 9.77138 164.855 10.9773 164.855 14.3742C164.855 17.8815 162.104 19.9622 158.323 19.9622C154.551 19.9622 151.742 17.8291 151.742 15.7484ZM135.475 9.74378C134.509 9.74378 133.836 9.72171 133.339 9.68583V2.72086H135.563C138.403 2.72086 140.249 3.86605 140.249 6.11504C140.249 8.43302 138.226 9.74378 135.475 9.74378ZM128.333 19.6117H135.795V17.2386H133.339V11.9707C133.836 11.9983 134.597 12.0342 135.295 12.0342C135.684 12.0342 136.065 11.9983 136.438 11.9707L140.798 19.6117H144.868V17.2386H142.616L139.048 11.3001C141.328 10.475 142.975 8.60411 142.975 6.03226C142.975 2.36765 140.039 0.350456 135.706 0.350456H128.333V2.7181H130.676V17.2358H128.333V19.6117ZM118.449 9.98386C118.449 5.6818 115.49 2.46423 111.398 2.46423C107.27 2.46423 104.312 5.65145 104.312 9.98386C104.312 14.2914 107.27 17.509 111.398 17.509C115.49 17.509 118.449 14.3135 118.449 9.98386ZM101.588 9.98386C101.588 4.33241 105.686 0 111.456 0C117.132 0 121.169 4.36276 121.169 9.98386C121.169 15.627 117.069 19.965 111.31 19.965C105.625 19.9622 101.588 15.5994 101.588 9.98386ZM74.4926 19.6117H81.9625V17.2386H79.5011V10.9469H89.4215V17.2386H86.96V19.6117H94.4244V17.2386H92.0871V2.72086H94.4244V0.353216H86.96V2.72086H89.4215V8.63447H79.5011V2.72086H81.9625V0.353216H74.4926V2.72086H76.8354V17.2386H74.4926V19.6117ZM51.5584 17.6829H54.0171V2.2821H51.5584V0.353216H65.5491V5.06644H63.4629V2.25451H56.2054V8.86626H62.5026V10.7372H56.2054V17.7049H63.4629V14.8985H65.5739V19.6117H51.5557V17.6829H51.5584ZM22.9976 19.6117H30.1723V17.6829H27.6557V10.7124H38.3046V17.6829H35.7907V19.6117H42.9598V17.6829H40.4984V2.2821H42.9598V0.353216H35.7907V2.2821H38.3046V8.78072H27.6557V2.2821H30.1723V0.353216H22.9976V2.2821H25.4536V17.6829H22.9976V19.6117ZM4.30481 17.6829H6.90426V2.19656H2.07514V5.29823H0V0.353216H16.0078V5.29823H13.9299V2.19656H9.10634V17.6829H11.7113V19.6117H4.30481V17.6829Z" fill="currentColor"></path>
            </svg>
          </a>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              <span className="badge badge-sm bg-orange-600 indicator-item">8</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
