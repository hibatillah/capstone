import React from "react";

const BahanBaku = () => {
    const data =[]
  return (
    <div className="px-7 py-2">
      <p className="py-2">Bahan Baku</p>
      <div className="bg-white min-h-[300px] px-8">
        <div className="flex justify-between px-5 py-5 items-center">
          <button className="bg-[#ff9900] text-white flex gap-2 items-center px-4  rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="bi bi-plus w-6 h-6"
              viewBox="0 0 16 16"
            >
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
            Tambah Data
          </button>
          <div className="flex gap-2">
            <p>Search : </p>
            <input
              type="text"
              placeholder=""
              className="border-2 px-4 shadow-lg "
            />
          </div>
        </div>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Id</th>
              <th>Nama</th>
              <th>Satuan</th>
              <th>Harga</th>
              <th>Stock</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr>
                <td>{item.no ?? "-"}</td>
                <td>{item.id ?? "-"}</td>
                <td>{item.nana ?? "-"}</td>
                <td>{item.satuan ?? 0}</td>
                <td>{item.harga ?? 0}</td>
                <td>{item.hstock ?? 0}</td>
                <td></td>
              </tr>
            )) ?? <tr>Produk Tidak tersedia</tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BahanBaku;
