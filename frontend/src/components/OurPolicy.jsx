import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className ='mt-40 flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-xs sm:text-sm md:text-base text-gray-700 my-20'>
      <div>
        <img src = {assets.exchange_icon} alt="" className='w-12 m-auto mb-5' />
        <p className='font-semibold text-center'>Easy Exchange Policy</p>
        <p className='text-gray-400'>We offer hassle free exchange policy.</p>
      </div>
      <div>
        <img src = {assets.quality_icon} alt="" className='w-12 m-auto mb-5' />
        <p className='font-semibold text-center'>7 Days Return Policy</p>
        <p className='text-gray-400'>We Provide 7 Days Free Return policy.</p>
      </div>
      <div>
        <img src = {assets.support_img} alt="" className='w-12 m-auto mb-5' />
        <p className='font-semibold text-center'>Best Customer Support</p>
        <p className='text-gray-400'>We Provide 24/7 Customer Support.</p>
      </div>

    </div>
  )
}

export default OurPolicy