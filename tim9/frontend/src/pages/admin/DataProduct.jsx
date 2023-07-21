import React from "react";
import { GetData } from "../../components/api";

const Produk = () => {
  const { users } = GetData("http://localhost:5000/product");
  console.log(users);
  return users;
};

export const DataProduct = () => {
  const data = Produk();

  return (
    <div className="px-7 w-full">
      <div className="bg-white min-h-[300px] px-7 w-full">
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
            {data?.data?.map((item) => (
              <tr>
                <td>{item.nama ?? "-"}</td>
                <td>{item.harga ?? "-"}</td>
                <td>{item.minimum ?? 0}</td>
              </tr>
            )) ?? <tr>Produk Tidak tersedia</tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
};
