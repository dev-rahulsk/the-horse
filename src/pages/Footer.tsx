import React from 'react'
import { Link } from 'react-router-dom'
import FooterLogo from "../assets/the-horse-logo.png"
import { FaInstagram, FaSnapchat, FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
  return (
    <>
      <footer className="footer footer-center p-5 py-10 bg-gray-600 text-primary-content">
        <aside>
          <Link to='/' className="cursor-pointer">
            <img src={FooterLogo} alt="" className='h-32' />
          </Link>
          <p className="font-bold mt-2">
            Join the Horse Club for 15% off your first order
          </p>
          <p>Copyright © The Horse ‘24 <br /> All right reserved</p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.instagram.com/justanother._.rahul/" target='_blank'>
              <FaInstagram className='h-6 w-6' />
            </a>
            <a href="https://www.linkedin.com/in/rahul-singh-khichi-b07685164/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className='h-6 w-6' />
            </a>
            <a href="https://www.snapchat.com/add/bittu_bhaiyaa/" target="_blank">
              <FaSnapchat className='h-6 w-6' />
            </a>
          </div>
        </nav>
      </footer>
    </>
  )
}

export default Footer
