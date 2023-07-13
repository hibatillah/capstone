import React from "react";
import { Link } from "react-router-dom";
const Pengiriman = () => {
  const data = []
  return (
    <div className="px-10 py-3">
      <div className=" bg-white rounded-lg h-screen px-5">
        <div className="flex justify-end mt-3 ">
          <Link className="px-4 py-2 bg-[#280559] mt-4 text-white rounded-lg flex gap-4" to={"/tambahpengantaran"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="bi bi-plus-circle-fill w-6 h-6"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
            </svg>
            Tambah Pengantaran
          </Link>
        </div>
        <table className="table-auto w-full mt-5">
          <thead>
            <tr>
              <th>Kode Bahan</th>
              <th>Nama</th>
              <th>Tujuan</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr>
                <td>{item.kode ?? "-"}</td>
                <td>{item.nama ?? "-"}</td>
                <td>{item.tujuan ?? 0}</td>
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

export default Pengiriman;
