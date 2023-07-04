import React from 'react'

const DashboardAdmin = () => {
  return (
    <main className='flex flex-col'>
      <h1>Dashboard</h1>
      <div className="mt-5 flex-auto grid grid-cols-2 gap-5">
        <div className="col-span-1 card">
          <h2>Total Production</h2>
        </div>
        <div className="col-span-1 card">
          <h2>Order Status</h2>
        </div>
        <div className="col-span-2 card">
          <h2>Total Produc Sales</h2>
        </div>
      </div>
    </main>
  )
}

export default DashboardAdmin