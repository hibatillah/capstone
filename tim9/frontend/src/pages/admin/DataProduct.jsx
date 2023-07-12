import React from "react";

export const DataProduct = () => {
  const data = [];
  return (
    <div className="px-7">
      <div className="bg-white min-h-[300px] px-7 ">
        <p className="px-3 text-xl font-medium text-darkblue py-2">Menu</p>
        <table className="table-auto w-full">
          <thead className="bg-[#b57344] rounded-lg">
            <tr className="rounded-lg">
              <th className="rounded-l-lg px-4 w-60  text-white">Nama Product</th>
              <th className="px-4 w-20  text-white">Harga Satuan</th>
              <th className="rounded-r-lg px-4 w-20  text-white">Stock</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr>
                <td>{item.nama ?? "-"}</td>
                <td>{item.harga ?? "-"}</td>
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
