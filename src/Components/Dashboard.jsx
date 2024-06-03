// import React from 'react'

import Overview from "./Overview"
import { Routes, Route } from "react-router-dom";
import Tickets from './Tickets';
import Assets from './Assets';
import Edit from "./Edit";
import MotorDetails from "./MotorDetails";
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
  return (
    <>
    {/* for large screens */}
    <div className="  w-[80%]">
      <div className=" hidden lg:block h-[5%] py-4 bg-gray-800">
    <div className = "  text-white font-bold px-4">Welcome, <span className="text-blue-500">Swayatt Drishtigochar</span> </div>
    </div>

    {/* small screens */}
    <div className="block lg:hidden text-center ml-[20%] justify-center w-full">
    <div className="flex gap-2 justify-center m-3 border-gray-900 border w-[80%] py-2 px-4 rounded-lg">
    <NavLink to={'/'} className={(`bg-gray-800 text-white hover:bg-blue-600 rounded px-2 py-0.5`)}> Overview </NavLink>
    <NavLink to={'/assets'} className={(`bg-gray-800 text-white hover:bg-blue-600 rounded px-2 py-0.5`)}> Assets </NavLink>
    <NavLink to={'/tickets'} className={(`bg-gray-800 text-white hover:bg-blue-600 rounded px-2 py-0.5`)}> Tickets </NavLink>
    </div>
    </div>

    <Routes>
    <Route path='/' element={<Overview />} />
    <Route path='/assets' element={<Assets />} />
    <Route path='/tickets' element={<Tickets />} />
    <Route path="/edit/:id" element={<Edit />} />
    <Route path="/motorDetails/:id" element={<MotorDetails />} />
   </Routes>
    </div>
    </>
  )
}

export default Dashboard