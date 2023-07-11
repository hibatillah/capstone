import React from "react";
import { formatCurrency } from "../../components/format";
import { Status } from "../../components";

const Order = () => {
  const data = [];

  return (
    <main className="flex flex-col">
      <h1>Order List</h1>
      <div className="mt-5 space-y-5">
        <div className="card">
          <div className="flex justify-between">
            <h2>Confirmation Orders</h2>
          </div>
          <table className="mt-5">
            <thead>
              <tr>
                <th>ID Transaksi</th>
                <th>Produk</th>
                <th>Jumlah</th>
                <th>Harga (Rp)</th>
                <th>Pembayaran</th>
                <th>Tipe Pesanan</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, i) => (
                <tr key={i}>
                  <td>{item._id ?? "-"}</td>
                  <td>{item.produk ?? "-"}</td>
                  <td>{item.jumlah ?? "-"}</td>
                  <td>{formatCurrency(item.harga) ?? "-"}</td>
                  <td>{item.pembayaran ?? "-"}</td>
                  <td>{item.tipe ?? "-"}</td>
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
                <th>ID Transaksi</th>
                <th>Produk</th>
                <th>Jumlah</th>
                <th>Harga (Rp)</th>
                <th>Pembayaran</th>
                <th>Tipe Pesanan</th>
                <th>Status</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, i) => (
                <tr key={i}>
                  <td>{item._id ?? "-"}</td>
                  <td>{item.produk ?? "-"}</td>
                  <td>{item.jumlah ?? "-"}</td>
                  <td>{formatCurrency(item.harga) ?? "-"}</td>
                  <td>{item.pembayaran ?? "-"}</td>
                  <td>{item.tipe ?? "-"}</td>
                  <td>
                    <Status label={item.status} />
                  </td>
                  <td>aksi</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default Order;
