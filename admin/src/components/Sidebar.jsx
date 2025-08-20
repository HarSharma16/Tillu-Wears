import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'


const Sidebar = () => {
  return (
    <div className="h-screen w-56 bg-gray-100 shadow-md flex flex-col w-[18%] min-h-screen border-r-2">
      <div className="flex flex-col gap-6 pt-6 pl-[20%] text-[15px]">
        <NavLink to="/add" className="flex items-center gap-3 p-2 rounded hover:bg-gray-200 transition">
          <img src={assets.add_icon} alt="" className="w-6 h-6" />
          <button className="text-gray-700 font-medium hidden md:block">Add Items</button>
        </NavLink>
        <NavLink to="/list" className="flex items-center gap-3 p-2 rounded hover:bg-gray-200 transition">
          <img src={assets.order_icon} alt="" className="w-6 h-6" />
          <button className="text-gray-700 font-medium hidden md:block">List Items</button>
        </NavLink>
        <NavLink to="/orders" className="flex items-center gap-3 p-2 rounded hover:bg-gray-200 transition">
          <img src={assets.order_icon} alt="" className="w-6 h-6" />
          <button className="text-gray-700 font-medium hidden md:block">Orders</button>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar