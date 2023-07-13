import React from "react";
import { Link } from "react-router-dom";
const Transaksi = () => {
  const data = []
  return (
    <div className="px-10 py-3">
      <div className=" bg-white rounded-lg h-screen px-5">
        <div className="flex justify-end mt-3 ">
          <Link className="px-4 py-2 bg-[#280559] mt-4 text-white rounded-lg flex gap-4" to={"/tambahtransaksi"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="bi bi-plus-circle-fill w-6 h-6"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
            </svg>
            Tambah Transaksi
          </Link>
        </div>
        <table className="table-auto w-full mt-5">
          <thead>
            <tr>
              <th>ID Invoice</th>
              <th>Tanggal</th>
              <th>Nama Pembeli</th>
              <th>No Hp</th>
              <th>Produk</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Opsi</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr>
                <td>{item.id ?? "-"}</td>
                <td>{item.tanggal ?? "-"}</td>
                <td>{item.nama ?? 0}</td>
                <td>{item.nohp ?? 0}</td>
                <td>{item.produk ?? 0}</td>
                <td>{item.amount ?? 0}</td>
                <td>{item.status ?? 0}</td>
                <td></td>
              </tr>
            )) ?? <tr>Produk Tidak tersedia</tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transaksi;
