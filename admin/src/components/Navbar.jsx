import React from 'react'
import {assets} from '../assets/assets'

const Navbar = ({setToken}) => {
  return (
    <div className='relative flex items-center py-2 px-[4%]'>
      <img className='w-[max(11%,80px)]' src={assets.logo} alt=''/>
      <button onClick={() => setToken('')} className='absolute right-4 top-2 bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-lg'>Logout</button>
    </div>
  )
}

export default Navbar
 