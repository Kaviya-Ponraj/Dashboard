// import React from 'react'

import { useEffect, useState } from "react"
import { NavLink } from 'react-router-dom';



// import CreateMotor from "./CreateMotor";

const Assets = () => {
    const [dashboard, setDashboard] = useState([])
    const [showModal, setShowModal] = useState(false);

    const [modelNumber, setModelNumber] = useState("")
    const [name, setName] = useState("")
    const [status, setStatus] = useState("")
    const [location, setLocation] = useState("")
    const [Manufacturer, setManufacturer] = useState("")

    // const [edit, setedit] = useState(false)

    console.log({modelNumber, name, status, location, Manufacturer})



    // Get data from api (read)
    useEffect(() => {
        fetch(`https://dashboard-api-c2ql.onrender.com/motors`)
        .then((res) => res.json())
        .then(data => {
            console.log(data);
            setDashboard(data)})
        .catch((err) => console.error(err))
    }, []);

    // create data (create)
    const submit = (e) => {
        e.preventDefault();
        
        if(modelNumber && name && status && location && Manufacturer ) {
            fetch(`https://dashboard-api-c2ql.onrender.com/motors/`, 
                {
                    method : "POST",
                    body : JSON.stringify({
                        modelNumber,
                        name,
                        status,
                        location,
                        Manufacturer
                    }),
                    headers :{
                        "Content-Type" : "application/json; charset=UTF-8"
                    }
                }
            )
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Failed to add data to the API');
                }
                return res.json();
            })
            .then((data) => {
                console.log(data)
                setDashboard([...dashboard, data])
                
                setModelNumber("")
                setName("")
                setStatus("")
                setLocation("")
                setManufacturer("")

                setShowModal(false)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        }
    }

    // // update data (edit)
    
    // const onChangeHandler = (id, key, value) => {
    //     setDashboard((assets) => {
    //       return assets.map(data => {
    //             return data._id === id ? {...data, [key] : value } : data;
    //         })
    //     })
    // }


    // function UpdateData(id) {
    //     const oneAsset = dashboard.find((data) => data._id === id );

    //     fetch(`http://localhost:3001/motors/${id}`, 
    //     {
    //         method : "PUT",
    //         body : JSON.stringify({
    //             oneAsset
    //         }),
    //         headers :{
    //             "Content-Type" : "application/json; charset=UTF-8"
    //         }
    //     }
    // )
    // .then((res) => {
    //     if (!res.ok) {
    //         throw new Error('Failed to add data to the API');
    //     }
    //     return res.json();
    // })
    // .then((data) => {
    //     console.log(data)
    //     // setDashboard([...dashboard, data])
    // })
    // .catch((error) => {
    //     console.error('Error:', error);
    // });
    // }

    // delete an asset

    const deleteAsset = (id) => {
        fetch(`https://dashboard-api-c2ql.onrender.com/motors/${id}`, 
                {
                    method : "DELETE",
                }
            )
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Failed to delete data to the API');
                }
                return res.json();
            })
            .then((data) => {
                console.log(data)
                setDashboard((data) => {
                    return data.filter(asset => asset.id !== id)
                    
                })
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        }
    


    
  return (
    <div className="mt-10 mx-10 ">
        <button className="bg-green-600 text-white rounded ml-10 px-6 py-2" onClick={() => setShowModal(true)}>Add +</button>

        {
            showModal ? (<div>
            <div className="w-full h-full bg-gray-400 mt-3 rounded px-10 py-4">
                <form >
                    <div className="m-3">
                    <label htmlFor="modelnum">Model No :  </label>
                    <input placeholder="Enter Model Number..." className="w-100 px-2 py-1 rounded outline-none" type="text" id="modelnum" value={modelNumber} onChange={(e) => setModelNumber(e.target.value)}/>
                    </div>
                    <div className="m-3">
                    <label htmlFor="modelnum">Name :  </label>
                    <input placeholder="Enter THe Asset Name..." className="w-100 px-2 py-1 rounded outline-none" type="text" id="modelnum" value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="m-3">
                    <label htmlFor="modelnum">Status :  </label>
                    <input placeholder="Enter the status" className="w-100 px-2 py-1 rounded outline-none" type="text" id="modelnum" value={status} onChange={(e) => setStatus(e.target.value)}/>
                    </div>
                    <div className="m-3">
                    <label htmlFor="modelnum">Location :  </label>
                    <input placeholder="Enter the location" className="w-100 px-2 py-1 rounded outline-none" type="text" id="modelnum" value={location} onChange={(e) => setLocation(e.target.value)}/>
                    </div>
                    <div className="m-3">
                    <label htmlFor="modelnum">Manufacturer :  </label>
                    <input placeholder="Enter the manufacturer name..." className="w-100 px-2 py-1 rounded outline-none" type="text" id="modelnum" value={Manufacturer} onChange={(e) => setManufacturer(e.target.value)}/>
                    </div>
                    <button type="submit" onClick={submit} className="bg-green-600 ml-6 rounded text-white px-3 z-10 py-1">Create Motor</button>
                    <button onClick={() => setShowModal(false)} className="rounded text-white px-3 z-10 py-1 bg-red-600 ml-4">Close</button>
                </form>
            </div>
            
            </div>) : null
        }
     
       <table className=" table mx-6 my-6">
        <thead className="mb-6">
        <tr className="text-center  border-b border-gray-950 hover:bg-gray-300 bg-gray-200 last:border-b-0">
            <th>Model No</th>
            <th>Name</th>
            <th>Status</th>
            <th>Location</th>
            <th>Manufacturer</th>
            <th>Action</th>
        </tr>
        </thead>
        <tbody>
        {     dashboard.map((data) => {
                return <tr key={data._id} className="text-center border-b border-gray-950 hover:bg-gray-300 bg-gray-200 last:border-b-0">
                    <td  className="py-2 text-center capitalize px-3 text-sm" >
                        {data.modelNumber}
                    </td>
                    <td className="py-2 text-center capitalize px-3 text-sm" >
                        {data.name}
                    </td>
                    <td className="py-2 text-center capitalize px-3 text-sm" >
                       {data.status}
                    </td>
                    <td className="py-2 text-center capitalize px-3 text-sm" >
                        {data.location}
                    </td>
                    <td className="py-2 text-center capitalize px-3 text-sm" >
                        {data.Manufacturer}
                    </td>
                    <td className="py-2 text-center capitalize px-2 text-sm" >
                        <button className="bg-gray-900 px-3 text-white rounded py-2 mx-2"> <NavLink to={`/edit/${data._id}`}> Edit </NavLink></button>
                        <button className="bg-red-600 px-3 text-white rounded py-2 mx-2" onClick={() => {deleteAsset(data._id)}}>Delete</button>
                    </td>
                </tr>
               
            })
        }
        </tbody>
    </table> </div>
    
  )
}

export default Assets