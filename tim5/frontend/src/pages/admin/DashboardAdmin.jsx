import React from 'react'
import { Profile } from '../../components'

const DashboardAdmin = () => {
  return (
    <main>
      <div className="flex items-center justify-between">
        <h1>Dashboard</h1>
        <Profile />
      </div>
      <div className="mt-5 grid grid-cols-3 gap-6 h-[calc(100vh-124px)]">
        <div className="col-span-2 card">
          <h2>Total Production</h2>
        </div>
        <div className="col-span-1 card">
          <h2>Order Status</h2>
        </div>
        <div className="col-span-3 card">
          <h2>Total Product Sales</h2>
        </div>
      </div>
    </main>
  );
}

export default DashboardAdmin