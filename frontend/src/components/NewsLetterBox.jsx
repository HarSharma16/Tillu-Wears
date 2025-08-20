import React from 'react'

const NewsLetterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();

    }
  return (
    <div className='text-center my-50'>
        <p className ='text-2xl font-medium text-gray-800 '>Subscribe Now & Get 20% Off</p>
        <p className='text-gray-500 mt-3'>Subscribe to our NewsLetter and get the latest updates.</p>
  <form onSubmit={onSubmitHandler}>
        <input type="email" placeholder='Enter Your Email' className='border border-gray-300 rounded-md p-2 mt-5 w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4' />
        <button type='submit' className='bg-[#414141] text-white px-4 py-2 rounded-md ml-2'>SUBSCRIBE</button> 
      </form>
    </div>
  )
}

export default NewsLetterBox
