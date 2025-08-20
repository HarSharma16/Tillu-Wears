import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className ='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} alt="" className='w-44 mb-5' />
                <p className ='w-full md:w-3/4 text-gray-600 text-xl'>
                We are a team of passionate individuals committed to providing the best online shopping experience. Discover timeless fashion with comfort, elegance, and style. From ethnic wear to modern trends, we bring handpicked collections tailored for every mood and moment. Dress with confidence—because your outfit deserves as much attention as you do.
                </p>
            </div>
            <div>
                <p className='text-xl font-medium w-44 mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-3 text-gray-600 text-lg '>
                    <li className='hover:text-black cursor-pointer'>Home</li>
                    <li className='hover:text-black cursor-pointer'>Contact Us</li>
                    <li className='hover:text-black cursor-pointer'>Delivery</li>
                    <li className='hover:text-black cursor-pointer'>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-3 text-gray-600 text-lg '>
                    <li className='hover:text-black cursor-pointer'>harsharma16072004@gmail.com</li>
                    <li className='hover:text-black cursor-pointer'>Phone: +91 956-983-7300</li>
                        </ul>
            </div>
        </div>
        <div>
            <hr />
            <p className='text-center text-gray-500 text-sm py-5'>© 2025 @TilluWears. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer
