import React from 'react'
import { Profile } from "../../components";
import { formatCurrency } from "../../components/format";
import { Status } from "../../components";

const Activity = () => {
  const data = []
  
  return (
    <main>
      <div className="flex items-center justify-between">
        <h1>Stock Real Time</h1>
        <Profile />
      </div>
      <div className="mt-5 space-y-6">
        <div className="card min-h-[400px]">
          <h2 className="mb-2">Confirmation Request</h2>
          <table>
            <thead>
              <tr>
                <th>Customer</th>
                <th>Transaction ID</th>
                <th>Product Name</th>
                <th>Qty</th>
                <th>Price (Rp)</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, i) => (
                <tr key={i}>
                  <td>{item.customer ?? "-"}</td>
                  <td>{item._id ?? "-"}</td>
                  <td>{item.product ?? "-"}</td>
                  <td>{item.amount ?? 0}</td>
                  <td>{formatCurrency(item.price) ?? 0}</td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="card min-h-[400px]">
          <h2 className="mb-2">All Request</h2>
          <table>
            <thead>
              <tr>
                <th>Customer</th>
                <th>Transaction ID</th>
                <th>Product Name</th>
                <th>Qty</th>
                <th>Price (Rp)</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, i) => (
                <tr key={i}>
                  <td>{item.customer ?? "-"}</td>
                  <td>{item._id ?? "-"}</td>
                  <td>{item.product ?? "-"}</td>
                  <td>{item.amount ?? 0}</td>
                  <td>{formatCurrency(item.price) ?? 0}</td>
                  <td>
                    {(() => {
                      switch (item.status) {
                        case "unpaid":
                          return (
                            <Status
                              title={item.status}
                              bg="bg-red-100"
                              text="text-red-700"
                            />
                          );
                        case "pending":
                          return (
                            <Status
                              title={item.status}
                              bg="bg-yellow-100"
                              text="text-yellow-700"
                            />
                          );
                        case "On Delivery":
                          return (
                            <Status
                              title={item.status}
                              bg="bg-primary-100"
                              text="text-primary"
                            />
                          );
                        case "Complete":
                          return (
                            <Status
                              title={item.status}
                              bg="bg-green-100"
                              text="text-green-700"
                            />
                          );
                        default:
                          return null;
                      }
                    })()}
                  </td>
                  <td></td>
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