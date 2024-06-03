// import React from 'react'

import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";

const Overview = () => {

    const [dashboard, setDashboard] = useState([])

    useEffect(() => {
        fetch(`https://dashboard-api-c2ql.onrender.com/motors`)
        .then((res) => res.json())
        .then(data => {
            console.log(data);
            setDashboard(data)})
        .catch((err) => console.error(err))
    }, []);
  return (
    <table className=" table mx-6 my-6">
        <thead className="mb-2">
        <tr className="text-center  border-b border-gray-950 hover:bg-gray-300 bg-gray-200 last:border-b-0">
            <th>Name</th>
            <th>Location</th>
            {/* <th>Manufacturer</th> */}
            <th>Status</th>
            <th>Installation date</th>
            <th>Last maintanance Date</th>
            <th>Details</th>
        </tr>
        </thead>
        <tbody>
        {
            dashboard.map((data) => {
                return <tr key={data._id} className="text-center  border-b border-gray-950 hover:bg-gray-300 bg-gray-200 last:border-b-0">
                    <td className="py-2 text-center capitalize px-3 text-sm">{data.name ? data.name : "data not found"}</td>
                    <td className="py-2 text-center capitalize px-3 text-sm">{data.location ? data.location : "data not found"}</td>
                    {/* <td className="py-2 text-center capitalize px-3 text-sm">{data.Manufacturer}</td> */}
                    <td className="py-2 text-center capitalize px-3 text-sm">{data.status ? data.status : "data not found"}</td>
                    <td className="py-2 text-center capitalize px-2 text-sm">{data.installationDate ? data.installationDate : "data not found"}</td>
                    <td className="py-2 text-center capitalize px-2 text-sm">{data.lastMaintanaceDate ? data.lastMaintanaceDate : "data not found"}</td>
                    <td className="py-2 text-center capitalize px-2 text-sm">
                      <NavLink to={`/motorDetails/${data._id}`}>  <button className="bg-green-600 px-3 py-1 rounded">View</button> </NavLink>
                    </td>
                </tr>
            })
        }
        </tbody>
    </table>
  )
}

export default Overview