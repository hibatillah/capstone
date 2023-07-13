import React from "react";
import { Link } from "react-router-dom";
import { GetData } from "../components/api";
const Product = () => {
  const Produk = () => {
    const { users } = GetData("http://localhost:5000/product");
    console.log(users);
    return users;
  };
  const dataproduk = Produk();

  return (
    <div className="px-10">
      <p className="text-2xl text-center font-bold text-[#280559]">Product</p>
      <div className="flex justify-end my-5 ">
        <Link
          className="px-4 py-2 bg-[#280559] mt-4 text-white rounded-lg flex gap-4"
          to={"/tambahproduct"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi bi-plus-circle-fill w-6 h-6"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
          </svg>
          Tambah Product
        </Link>
      </div>
      <div className="bg-white aspect-[4/1] px-10 py-10">
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th>Kode Produk</th>
              <th>Nama</th>
              <th>Harga Satuan</th>
              <th>Stock</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {dataproduk?.data.map((item, i) => (
              <tr>
                <td>{i}</td>
                <td>{item.nama ?? "-"}</td>
                <td>{item.harga ?? 0}</td>
                <td>{item.stok ?? "-"}</td>
                <td>{item.status ?? "-"}</td>
                <td>
                  <Link to={`/editproduct/${item._id}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-pen"
                      viewBox="0 0 16 16"
                    >
                      <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                    </svg>
                  </Link>
                </td>
              </tr>
            )) ?? <tr>Produk Tidak tersedia</tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Product;
