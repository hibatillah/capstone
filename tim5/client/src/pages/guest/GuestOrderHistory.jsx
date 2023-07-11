import React from 'react'
import { formatCurrency } from '../../components/format'

const GuestOrderHistory = () => {
  const data = []
  
  return (
    <div className='p-10 space-y-12'>
      <div className="mt-5 card">
        <div className="flex justify-between">
          <h2>Sedang Berlangsung</h2>
        </div>
        <table className="mt-5">
          <thead>
            <tr>
              <th>ID Transaksi</th>
              <th>Nama Produk</th>
              <th>Jumlah</th>
              <th>Harga (Rp)</th>
              <th>Tipe Pesanan</th>
              <th>Metode Pembayaran</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i}>
                <td>{item._id ?? "-"}</td>
                <td>{item.produk ?? "-"}</td>
                <td>{item.jumlah ?? "-"}</td>
                <td>{formatCurrency(item.harga) ?? "-"}</td>
                <td>{item.tipe ?? "-"}</td>
                <td>{item.pembayaran ?? "-"}</td>
                <td>{item.status ?? "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-5 card">
        <div className="flex justify-between">
          <h2>Riwayat</h2>
        </div>
        <table className="mt-5">
          <thead>
            <tr>
              <th>ID Transaksi</th>
              <th>Nama Produk</th>
              <th>Jumlah</th>
              <th>Harga (Rp)</th>
              <th>Tipe Pesanan</th>
              <th>Metode Pembayaran</th>
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
                <td>{item.tipe ?? "-"}</td>
                <td>{item.pembayaran ?? "-"}</td>
                <td>{item.status ?? "-"}</td>
                <td>aksi</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GuestOrderHistory