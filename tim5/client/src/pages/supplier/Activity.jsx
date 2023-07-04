import React from 'react'
import { formatCurrency } from '../../components/format';
import { Status } from '../../components';

const Activity = () => {
  const data = []
  
  return (
    <main className="flex flex-col">
      <h1>Stock Real Time</h1>
      <div className="mt-5 space-y-5">
        <div className="card">
          <div className="flex justify-between">
            <h2>Confirmation Orders</h2>
          </div>
          <table className="mt-5">
            <thead>
              <tr>
                <th>ID</th>
                <th>Company</th>
                <th>Material</th>
                <th>Qty</th>
                <th>Price (Rp)</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, i) => (
                <tr key={i}>
                  <td>{item._id ?? "-"}</td>
                  <td>{item.company ?? "-"}</td>
                  <td>{item.material ?? "-"}</td>
                  <td>{item.amount ?? "-"}</td>
                  <td>{formatCurrency(item.price) ?? "-"}</td>
                  <td>
                    <div className="px-2 py-1 text-sm rounded-full bg-secondary text-white">
                      Confirm
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="card">
          <div className="flex justify-between">
            <h2>Confirmation Orders</h2>
          </div>
          <table className="mt-5">
            <thead>
              <tr>
                <th>ID</th>
                <th>Company</th>
                <th>Material</th>
                <th>Qty</th>
                <th>Status</th>
                <th>Price (Rp)</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, i) => (
                <tr key={i}>
                  <td>{item._id ?? "-"}</td>
                  <td>{item.company ?? "-"}</td>
                  <td>{item.material ?? "-"}</td>
                  <td>{item.amount ?? "-"}</td>
                  <td>{item.status ?? "-"}</td>
                  <td>{formatCurrency(item.price) ?? "-"}</td>
                  <td>
                    <Status label={item.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

export default Activity