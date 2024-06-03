// import React from 'react'

import { useEffect, useState } from "react"
// import { useNavigate } from "react-router-dom";

const Tickets = () => {

  const [tickets, setTickets] = useState([])
  const [showModal, setShowModal] = useState(false);

  const [Asset_ID, setAsset_ID] = useState("")
  const [Date_Raised, setDate_Raised] = useState("")
  const [status, setStatus] = useState("")
  const [Issue_Description, setIssue_Description] = useState("")
  const [Ticket_ID, setTicket_ID] = useState("")

  // const navigate = useNavigate()

  useEffect(() => {
    fetch(`https://dashboard-api-c2ql.onrender.com/tickets`)
    .then((res) => res.json())
    .then(data => {
        console.log(data);
        setTickets(data)})

    .catch((err) => console.error(err))
}, []);

// create data (create)
const submit = (e) => {
  e.preventDefault();
  
  if(Asset_ID && status && Issue_Description && Ticket_ID ) {
      fetch(`https://dashboard-api-c2ql.onrender.com/tickets`, 
          {
              method : "POST",
              body : JSON.stringify({
                  Asset_ID,
                  Date_Raised,
                  status,
                  Issue_Description,
                  Ticket_ID
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
          setTickets([...tickets, data])
          
          setAsset_ID("")
          setDate_Raised("")
          setStatus("")
          setIssue_Description("")
          setTicket_ID("")

          setShowModal(false)
      })
      .catch((error) => {
          console.error('Error:', error);
      });
  }
}


  const removeData = (id) => {
    fetch(`https://dashboard-api-c2ql.onrender.com/tickets/${id}`, 
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
            setTickets((data) => {
                return data.filter(asset => asset.id !== id)
                
            })
        })
        .catch((error) => {
            console.error('Error:', error);
        });
      }

  // console.log("tickets", tickets);
  return (
    <div>

<button className="bg-green-600 text-white rounded ml-10 mt-6 px-6 py-2" onClick={() => setShowModal(true)}>Add +</button>

{
    showModal ? (<div>
    <div className="w-full h-full bg-gray-400 mt-3 rounded px-10 py-4">
        <form >

            <div className="m-3">
            <label htmlFor="modelnum">Asset ID :  </label>
            <input placeholder="Enter Asset ID..." className="w-100 px-2 py-1 rounded outline-none" type="text" id="modelnum" value={Asset_ID} onChange={(e) => setAsset_ID(e.target.value)}/>
            </div>

            <div className="m-3">
            <label htmlFor="modelnum">Date Raised :  </label>
            <input type="datetime-local" id="modelnum" className="w-100 px-2 py-1 rounded outline-none" value={Date_Raised} onChange={(e) => setDate_Raised(e.target.value)}/>
            </div>

            <div className="m-3">
            {/* 
            <input placeholder="Enter the status" className="w-100 px-2 py-1 rounded outline-none" type="text" id="modelnum" /> */}
            <label htmlFor="status">Status :  </label>
            <select name="satus" id="status" value={status} onChange={(e) => setStatus(e.target.value)}>Status :
            <option value="closed">Closed</option>
            <option value="open">Open</option>
            <option value="in_progress">In_progress</option>
            </select>
            </div>
            
            <div className="m-3">
            <label htmlFor="modelnum">Ticket ID :  </label>
            <input placeholder="Enter the Ticket ID..." className="w-100 px-2 py-1 rounded outline-none" type="text" id="modelnum" value={Ticket_ID} onChange={(e) => setTicket_ID(e.target.value)}/>
            </div>

            <div className="m-3">
            <label htmlFor="modelnum" className="">Issue Description :  </label>
            {/* <input  type="text" id="modelnum" value={Issue_Description} onChange={(e) => setIssue_Description(e.target.value)}/> */}
            
            <textarea 
            placeholder="Enter the Issue description" 
            className="w-100 h-7 px-2 py-1 rounded outline-none"
            id="modelnum" 
            value={Issue_Description} 
            onChange={(e) => setIssue_Description(e.target.value)}
            rows={4}
            cols={40}
            />
            </div>
            <button type="submit" onClick={submit} className="bg-green-600 ml-6 rounded text-white px-3 z-10 py-1">Create Ticket</button>
            <button onClick={() => setShowModal(false)} className="rounded text-white px-3 z-10 py-1 bg-red-600 ml-4">Close</button>
        </form>
    </div>
    
    </div>) : null
}

    <table className="table mx-6 my-6">
      <thead className="mb-2">
        <tr className="text-center  border-b border-gray-950 hover:bg-gray-300 bg-gray-200 last:border-b-0">
          <th>Asset ID</th>
          <th>Date Raised</th>
          <th>Status</th>
          <th>Ticket ID</th>
          <th>Issue Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          tickets.map((data) => {
          return  <tr key={data._id} className="text-center  border-b border-gray-950 hover:bg-gray-300 bg-gray-200 last:border-b-0">
              <td className="py-2 text-center capitalize px-3 text-sm">{data.Asset_ID}</td>
              <td className="py-2 text-center capitalize px-3 text-sm">{data.Date_Raised}</td>
              <td className="py-2 text-center capitalize px-3 text-sm">{data.Status}</td>
              <td className="py-2 text-center capitalize px-3 text-sm">{data.Ticket_ID}</td>
              <td className="py-2  capitalize px-3 text-sm text-justify">{data.Issue_Description}</td>
              <td>
                <button className="bg-red-600 text-white px-3 py-1 rounded" onClick={() => {removeData(data._id)}}>Remove</button>
              </td>
          </tr>

            
          })
        }
      </tbody>
    </table>
    </div>
  )
}


export default Tickets;