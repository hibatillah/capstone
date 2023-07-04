import React from "react";

export const DataProduct = () => {
  const data = [];
  return (
    <div className="px-7">
      <div className="bg-white min-h-[300px] px-7 ">
        <p className="px-3 text-xl font-medium text-darkblue py-2">Menu</p>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="bg-[#b57344] px-4 w-60 rounded-lg text-white">Nama Product</th>
              <th className="bg-[#b57344] px-4 w-20 rounded-lg text-white">Id</th>
              <th className="bg-[#b57344] px-4 w-20 rounded-lg text-white">Stock</th>
              <th className="bg-[#b57344] px-4 w-40 rounded-lg text-white">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr>
                <td>{item.nama ?? "-"}</td>
                <td>{item.id ?? "-"}</td>
                <td>{item.stock ?? 0}</td>
                <td></td>
              </tr>
            )) ?? <tr>Produk Tidak tersedia</tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
};
