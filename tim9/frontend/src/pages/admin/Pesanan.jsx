import React from "react";
import { Failed } from "../../components/Status";

const Pesanan = () => {
  const data = [];
  return (
    <div className="px-7">
      <p className="text-xl text-darkblue py-2 font-bold">Pemesanan Bahan</p>
      <div className="flex justify-between gap-5 mt-5">
        <div className="bg-white w-44 rounded-lg flex gap-2 px-4 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
          <input
            type="text"
            name=""
            id=""
            placeholder="Search here"
            className="w-full h-full px-4"
          />
        </div>
        <button className="bg-[#d4b98f] w-32 rounded-lg flex gap-2 px-2 items-center text-white stroke-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-plus"
            viewBox="0 0 16 16"
          >
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
          Pemesanan
        </button>
      </div>
      <div className="bg-white min-h-[300px] mt-5 px-7 py-5 rounded-lg ">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th>Nama Supplier</th>
              <th>ID Pemesanan</th>
              <th>Date</th>
              <th>Bahan Baku</th>
              <th>Alamat</th>
              <th>Contact</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr>
                <td>{item.namasupplier ?? "-"}</td>
                <td>{item.idpemesanan ?? "-"}</td>
                <td>{item.date ?? 0}</td>
                <td>{item.bahanbaku ?? "-"}</td>
                <td>{item.alamat ?? "-"}</td>
                <td>{item.contact ?? "-"}</td>
                <td>{}</td>
                <td>{}</td>
              </tr>
            )) ?? <tr>Produk Tidak tersedia</tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pesanan;
