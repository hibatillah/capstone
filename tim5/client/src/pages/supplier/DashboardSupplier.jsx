import React from 'react'
import { MaterialCard } from '../../components'

const DashboardSupplier = () => {
  return (
    <main>
      <h1>Dashboard</h1>
      <div className="mt-5 space-y-5">
        <div className="flex gap-4">
          <MaterialCard 
            title='Tepung'
            value='10 kg'
            bg='bg-primary'
          />
          <MaterialCard 
            title='Telur'
            value='50 Butir'
            bg='bg-primary-200'
          />
          <MaterialCard 
            title='Garam'
            value='10 kg'
            bg='bg-white'
          />
          <MaterialCard 
            title='Soda'
            value='10 kg'
            bg='bg-red-300'
          />
          <MaterialCard 
            title='Gincu'
            value='10 kg'
            bg='bg-secondary'
          />
        </div>
        <div className="grid grid-cols-3 gap-5 pb-8">
          <div className="col-span-2 space-y-5">
            <div className="card h-[300px]">
              <h2>Total Request</h2>

            </div>
            <div className="card h-[300px]">
              <h2>Total Request Material</h2>

            </div>
          </div>
          <div className="col-span-1">
            <div className="card min-h-[620px]">
              <h2>Request Status</h2>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default DashboardSupplier