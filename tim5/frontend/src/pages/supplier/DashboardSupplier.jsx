import React from 'react'
import { Profile } from '../../components'

const DashboardSupplier = () => {
  return (
    <main>
      <div className="flex items-center justify-between">
        <h1>Dashboard</h1>
        <Profile />
      </div>
      <div className="mt-5 grid grid-cols-3 gap-6 min-h-[calc(100vh-124px)]">
        <div className="col-span-3"></div>
        <div className="col-span-2"></div>
        <div className="col-span-1 row-span-2 col-start-3"></div>
        <div className="col-span-2"></div>
      </div>
    </main>
  );
}

export default DashboardSupplier