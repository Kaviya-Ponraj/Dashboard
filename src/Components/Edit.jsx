// import React from 'react'

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"


const Edit = () => {

    const assets = {
        Manufacturer : "",
        location : "",
        modelNumber : "",
        name : "",
        status : ""
    }

    const {id} = useParams();

    // console.log(id);
    const navigate = useNavigate()
    
    const [asset, setAsset] = useState(assets)

    const inputChangeHandler = (e) => {
        const {name, value} = e.target;
        console.log(e.target);
        setAsset({...asset, [name] : value})
        console.log(asset);
    }
    // console.log(id)
    console.log(asset);

    // get one data with id
    useEffect(() => {
        fetch(`https://dashboard-api-c2ql.onrender.com/motors/${id}`)
        .then((res) => res.json())
        .then(data => {
            console.log(data);
            setAsset(data)})
        .catch((err) => console.error(err))
    }, [id]);

    // update the data

    const submitForm = (e) => {
        e.preventDefault();
        
       
            fetch(`https://dashboard-api-c2ql.onrender.com/motors/${id}`, 
                {
                    method : "PUT",
                    body : JSON.stringify(asset),
                    headers :{
                        "Content-Type" : "application/json; charset=UTF-8"
                    }
                }
            )
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Failed to update data to the API');
                }
                return res.json();
            })
            .then((data) => {
                console.log(data)
                navigate("/assets")
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        }
    

  return (
    <div className="flex items-center justify-center mt-10">
    <form className="bg-gray-700 h-1/5 w-1/2 rounded py-6 px-10" >
        <h2 className="justify-center text-white font-bold text-center">Edit Asset</h2>
        <div className="m-5">
            <label htmlFor="modelNumber" className="text-white">Model No : </label>
            <input type="text" placeholder="Enter your name" value={asset.modelNumber} onChange={inputChangeHandler} name="modelNumber" id="modelNumber" className="rounded border-none outline-none px-2 py-1"/>
        </div>
        <div className="m-5">
            <label htmlFor="name" className="text-white">Name : </label>
            <input type="text" placeholder="Enter your name" value={asset.name} onChange={inputChangeHandler} name="name" id="name" className="rounded border-none outline-none px-2 py-1"/>
        </div>
        <div className="m-5">
            <label htmlFor="status" className="text-white">Status : </label>
            <input type="text" placeholder="Enter your name" value={asset.status} onChange={inputChangeHandler} name="status" id="status" className="rounded border-none outline-none px-2 py-1"/>
        </div>
        <div className="m-5">
            <label htmlFor="location" className="text-white">Location : </label>
            <input type="text" placeholder="Enter your name" value={asset.location} onChange={inputChangeHandler} name="location" id="location" className="rounded border-none outline-none px-2 py-1"/>
        </div>
        <div className="m-5">
            <label htmlFor="Manufacturer" className="text-white">Manufacturer : </label>
            <input type="text" placeholder="Enter your name" value={asset.Manufacturer} onChange={inputChangeHandler} name="Manufacturer" id="Manufacturer" className="rounded border-none outline-none px-2 py-1"/>
        </div>
        <button type="submit" className="bg-green-600 rounded px-4 py-2 mx-2 text-white" onClick={submitForm}>Save Changes</button>
        <button className="bg-red-600 rounded px-4 py-2 text-white mx-2" onClick={() => navigate("/assets")}>Cancel</button>
    </form>
    </div>
  )
}

export default Edit