// import React from 'react'

import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const MotorDetails = () => {
    const {id} = useParams()
    console.log(id)

    const [data, setData] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        fetch(`https://dashboard-api-c2ql.onrender.com/motors/${id}`)
        .then((res) => res.json())
        .then(data => {
            console.log(data);
            setData(data)})
        .catch((err) => console.error(err))
    }, [id]);
    
    console.log(data)
  return (
    <div className="bg-gray-800 px-10 py-10 ml-40 mt-4 w-1/2 rounded text-white">
        <div className="flex">
         <button className="bg-blue-500 rounded px-4 my-2  text-white" onClick={() => navigate("/")}>Go Back</button>
        <h2 className="text-xl font-bold text-center mx-4 mb-4">Motor Details</h2>
        </div>
  
        
        {data && Object.keys(data).length > 0 && (
    <div className="" key={data._id}>
        <p className="text-justify">Name : <span className="text-cyan-200"> {data.name ? data.name : "data not found "} </span></p>
        <p className="text-justify">Description : <span className="text-cyan-200"> {data.description ? data.description : "data not found"} </span></p>
        <p className="text-justify">Location : <span className="text-cyan-200"> {data.location ? data.location : "data not found"} </span> </p>
        <p className="text-justify">Manufacturer : <span className="text-cyan-200"> {data.Manufacturer ? data.Manufacturer : "data not found"} </span></p>
        <p className="text-justify">Model Number : <span className="text-cyan-200"> {data.modelNumber ? data.modelNumber : "data not found"} </span> </p>
        <p className="text-justify">Installation Date : <span className="text-cyan-200"> {data.installationDate ? data.installationDate : "data not found"} </span> </p>
        <p className="text-justify">Last Maintenance Date : <span className="text-cyan-200"> {data.lastMaintanaceDate ? data.lastMaintanaceDate : "data not found"} </span> </p>
        <p className="text-justify">Status : <span className="text-cyan-200"> {data.status ? data.status : "data not found"} </span> </p>
        <p className="text-justify">
            Specifications : {data.Specifications ? (
                <ul key={data._id}>
                    <li>Power : <span className="text-cyan-200"> {data.Specifications.power} </span> </li>
                    <li>Voltage : <span className="text-cyan-200"> {data.Specifications.voltage} </span> </li>
                    <li>Current : <span className="text-cyan-200"> {data.Specifications.current} </span> </li>
                    <li>Speed : <span className="text-cyan-200"> {data.Specifications.speed} </span> </li>
                </ul>
            ) : "data not found"}
        </p>
    </div>
)}

        
            
            
    </div>
  )
}

export default MotorDetails