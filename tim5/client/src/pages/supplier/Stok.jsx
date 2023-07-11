import React from 'react'
import { formatCurrency } from '../../components/format';
import { telur, tepung, bumbu } from "../../assets/img";

const Stok = ({ handleModal }) => {
  const data = [];
  const imgItem = {
    Flour: tepung,
    Egg: telur,
    Bumbu: bumbu,
  };

  return (
    <main className="flex flex-col">
      <h1>Materials</h1>
      <div className="mt-5 card h-[80vh]">
        <div className="flex justify-between">
          <h2>All Materials</h2>
          <div className="flex gap-4">
            <div
              onClick={() => handleModal("request material")}
              className="btn btn-primary"
            >
              Request Stock
            </div>
            <div
              onClick={() => handleModal("add material")}
              className="btn btn-primary"
            >
              Add Material
            </div>
          </div>
        </div>
        <table className="mt-5">
          <thead>
            <tr>
              <th>Bahan Baku</th>
              <th>Harga (Rp)</th>
              <th>Stok Tersedia</th>
              <th>Satuan</th>
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
                <td>{item.stok ?? 0}</td>
                <td>{item.satuan ?? 0}</td>
                <td>aksi</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default Stok