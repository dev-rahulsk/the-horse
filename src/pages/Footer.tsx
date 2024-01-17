import React from 'react'
import { Link } from 'react-router-dom'
import HorseLogo from "../assets/the-horse-logo.png"
import { FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
  return (
    <>
      <footer className="footer footer-center p-5 py-10 bg-gray-600 text-primary-content">
        <aside>
          <Link to='/' className="cursor-pointer">
            <img src={HorseLogo} alt="" className='h-32' />
          </Link>
          <p className="font-bold mt-2">
            Join the Horse Club for 15% off your first order
          </p>
          <p>Copyright © The Horse ‘24 <br /> All right reserved</p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <FaInstagram className='h-6 w-6' />
            <FaTwitter className='h-6 w-6' />
            <FaLinkedinIn className='h-6 w-6' />
          </div>
        </nav>
      </footer>
    </>
  )
}

export default Footer
