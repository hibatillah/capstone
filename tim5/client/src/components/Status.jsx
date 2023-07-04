import React from 'react'

const Status = ({ label }) => {
  const labelStatus = {
    unpaid: ['Unpaid', 'bg-red-100 text-red-600'],
    pending: ['Pending', 'bg-primary-100 text-primary'],
    delivery: ['On Delivery', 'bg-primary-300 text-white'],
    complete: ['Complete', 'bg-primary text-white'],
  }
  
  return labelStatus[label].map((item) => (
      <div className={`px-2 py-1 text-sm ${item[0]}`}>{item[1]}</div>
    ))
}

export default Status