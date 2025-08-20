import axios from 'axios'
import React, { useState } from 'react'
import { backendUrl } from '../App'


const Login = ({setToken}) => {

    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')

    const onSubmitHandler= async(e) => {
        try {
            e.preventDefault();
            const response = await axios.post(backendUrl + '/api/user/admin',{email,password})
            if (response.data.success) {
                setToken(response.data.token)
            }else{
                Toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
            
        }
    }
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white shadow-md rounded-md p-6 max-w-md mx-auto mt-10'>
        <h1 className='text-2xl font-bold mb-6'>Admin Panel</h1>
        <form onSubmit={onSubmitHandler}>
            <div className='mb-3 min-w-72'>
                <p className='text-sm font-medium text-gray-600 mb-2'>Email Address</p>
                <input onChange={(e) => setEmail(e.target.value)} value={email} className='rounded-md w-full px-2 py-2 border border-gray-300 outline-none' type="email" placeholder=" your@email" required />
            </div>
            <div className='mb-3 min-w-72'>
                <p className='text-sm font-medium text-gray-600 mb-2'>Password</p>
                <input onChange={(e) => setPassword(e.target.value)} value={password} className='rounded-md w-full px-2 py-2 border border-gray-300 outline-none' type="password" placeholder=" your password" required />
            </div>
            <button className='mt-2 w-full text-white bg-black text-white rounded-md px-4 py-2' type="submit"> Login </button>
        </form>
      </div>
    </div>
  )
}

export default Login
