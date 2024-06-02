// import React from 'react'

import { useEffect, useState } from "react"

const Tickets = () => {

  const [tickets, setTickets] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3001/tickets`)
    .then((res) => res.json())
    .then(data => {
        console.log(data);
        setTickets(data)})
    .catch((err) => console.error(err))
}, []);

  // console.log("tickets", tickets);
  return (
    <div>
    <table className="table mx-6 my-6">
      <thead className="mb-2">
        <tr>
          <th>Asset ID</th>
          <th>Date Raised</th>
          <th>Status</th>
          <th>Ticket ID</th>
          <th>Issue Description</th>
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
          </tr>

            
          })
        }
      </tbody>
    </table>
    </div>
  )
}

export default Tickets