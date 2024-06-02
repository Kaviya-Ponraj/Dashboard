// import React from 'react'

import Overview from "./Overview"
import { Routes, Route } from "react-router-dom";
import Tickets from './Tickets';
import Assets from './Assets';
import Edit from "./Edit";
import MotorDetails from "./MotorDetails";

const Dashboard = () => {
  return (
    <>
    <div className=" w-[80%]">
      <div className="h-[5%] py-4 bg-gray-800">
    <div className = "text-white font-bold px-4">Welcome, <span className="text-blue-500">Swayatt Drishtigochar</span> </div>
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