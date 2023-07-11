import React from "react";
import { formatCurrency } from "../../components/format";
import { mieKuning, miePutih } from "../../assets/img";

const Products = ({ handleModal }) => {
  const data = [];
  const imgItem = {
    "Mie Pangsit": miePutih,
    "Mie Kuning": mieKuning,
  };

  return (
    <main className="flex flex-col">
      <h1>Product Stock</h1>
      <div className="mt-5 card">
        <div className="flex justify-between">
          <h2>All Product</h2>
          <div className="flex gap-4">
            <div
              onClick={() => handleModal("make product")}
              className="btn btn-primary"
            >
              Make Product
            </div>
            <div
              onClick={() => handleModal("add product")}
              className="btn btn-primary"
            >
              Add Product
            </div>
          </div>
        </div>
        <table className="mt-5">
          <thead>
            <tr>
              <th>Produk</th>
              <th>Price (Rp)</th>
              <th>Stok Minimum</th>
              <th>Stok Tersedia</th>
              <th>Satuan</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i}>
                <td>
                  <img src={imgItem[item.nama]} alt={item.nama} />
                  <span className="ml-4">{item.nama}</span>
                </td>
                <td>{formatCurrency(item.harga) ?? "-"}</td>
                <td>{item.minimum ?? "-"}</td>
                <td>{item.stok ?? "-"}</td>
                <td>{item.satuan ?? "-"}</td>
                <td>
                  {item.stok <= item.minimum ? (
                    <span className="w-16 text-secondary">
                      Stok berada di level minimum
                    </span>
                  ) : (
                    "-"
                  )}
                </td>
                <td>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Products;
