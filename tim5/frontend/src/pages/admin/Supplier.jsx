import React from 'react'
import { Profile } from '../../components'

const Supplier = () => {
  const data = []
  
  return (
    <main>
      <div className="flex items-center justify-between">
        <h1>Supplier</h1>
        <Profile />
      </div>
      <div className="mt-5 card min-h-[50vh]">
        <h2 className='mb-2'>All Supplier</h2>
        <table>
          <thead>
            <tr>
              <th>Supplier</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i ) => (
              <tr key={i}>
                <td>{item.supplier ?? '-'}</td>
                <td>{item.address ?? '-'}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default Supplier