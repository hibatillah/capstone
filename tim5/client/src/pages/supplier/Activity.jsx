import React from 'react'
import { formatCurrency } from '../../components/format';
import { Status } from '../../components';

const Activity = ({ handleModal }) => {
  const data = []
  
  return (
    <main className="flex flex-col">
      <h1>Stock Real Time</h1>
      <div className="mt-5 space-y-5">
        <div className="card">
          <div className="flex justify-between">
            <h2>Daftar Pesanan</h2>
          </div>
          <table className="mt-5">
            <thead>
              <tr>
                <th>ID Transaksi</th>
                <th>Bahan Baku</th>
                <th>Jumlah</th>
                <th>Satuan</th>
                <th>Harga (Rp)</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, i) => (
                <tr key={i}>
                  <td>{item._id ?? "-"}</td>
                  <td>{item.nama ?? "-"}</td>
                  <td>{item.jumlah ?? "-"}</td>
                  <td>{item.satuan ?? "-"}</td>
                  <td>{formatCurrency(item.harga) ?? "-"}</td>
                  <td>
                    <div
                      onClick={() => handleModal("send material")}
                      className="px-2 py-1 text-sm rounded-full bg-secondary text-white"
                    >
                      Kirim
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="card">
          <div className="flex justify-between">
            <h2>Riwayat Pesanan</h2>
          </div>
          <table className="mt-5">
            <thead>
              <tr>
                <th>ID Transaksi</th>
                <th>Bahan Baku</th>
                <th>Jumlah</th>
                <th>Satuan</th>
                <th>Harga (Rp)</th>
                <th>Satuan</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, i) => (
                <tr key={i}>
                  <td>{item._id ?? "-"}</td>
                  <td>{item.nama ?? "-"}</td>
                  <td>{item.jumlah ?? "-"}</td>
                  <td>{item.satuan ?? "-"}</td>
                  <td>{formatCurrency(item.harga) ?? "-"}</td>
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
}

export default Activity