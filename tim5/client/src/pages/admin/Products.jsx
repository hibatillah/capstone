import React from 'react'
import { formatCurrency } from '../../components/format'
import { mieKuning, miePutih } from '../../assets/img'

const Products = ({ handleModal }) => {
  const data = []
  const imgItem = {
    "Mie Pangsit": miePutih,
    "Mie Kuning": mieKuning,
  }
  
  return (
    <main className="flex flex-col">
      <h1>Product Stock</h1>
      <div className="mt-5 card">
        <div className="flex justify-between">
          <h2>All Product</h2>
          <div className="flex gap-4">
            <div onClick={() => handleModal('make product')} className="btn btn-primary">Make Product</div>
            <div onClick={() => handleModal('add product')} className="btn btn-primary">Add Product</div>
          </div>
        </div>
        <table className="mt-5">
          <thead>
            <tr>
              <th>Material</th>
              <th>Description</th>
              <th>Price (Rp)</th>
              <th>In Stock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i}>
                <td>
                  <img src={imgItem[item.name]} alt={item.name} />
                  <span className="ml-4">{item.name}</span>
                </td>
                <td>{item.description ?? "-"}</td>
                <td>{formatCurrency(item.price) ?? "-"}</td>
                <td className="flex flex-col gap-1">
                  {item.instock ?? 0}
                </td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default Products