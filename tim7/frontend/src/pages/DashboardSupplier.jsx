import React from "react";
import { Bahanbakucard } from "../components/Card";
import Telur from "../assets/img/telur.png";
import { GetData } from "../components/Api";
const DashboardSupplier = () => {
  // const Produk = () => {
  //   const { users } = GetData("http://localhost:5000/produk");
  //   console.log(users);
  //   return users;
  // };
  // const dataproduk = Produk();

  const Bahanbaku = () => {
    const { users } = GetData("http://localhost:5000/bahanbaku");
    console.log(users);
    return users;
  };
  const databahan = Bahanbaku();
  return (
    <div className="px-10 py-4">
      <div className="px-10 py-4">
        {/* <p className="py-3 text-xl font-bold">Stock</p>
        <p className="py-5 font-bold">Product</p>
        <div className="bg-white min-h-[300px] px-10 py-8 mb-5">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th>Nama</th>
                <th>Harga</th>
                <th>Stock</th>
                <th>Minimum</th>
              </tr>
            </thead>
            <tbody>
              {dataproduk?.data.map((item) => (
                <tr>
                  <td>{item.nama ?? "-"}</td>
                  <td>{item.harga ?? "-"}</td>
                  <td>{item.stok ?? 0}</td>
                  <td>{item.minimum ?? 0}</td>
                  <td></td>
                </tr>
              )) ?? <tr>Produk Tidak tersedia</tr>}
            </tbody>
          </table>
        </div> */}
        <p className="py-5 font-bold">Bahan Baku</p>
        <div className="bg-white min-h-[300px] px-10 py-8 mb-5">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th>Nama</th>
                <th>Stok</th>
                <th>Minimum</th>
              </tr>
            </thead>
            <tbody>
              {databahan?.data.map((item) => (
                <tr>
                  <td>{item.Nama ?? "-"}</td>
                  <td>{item.Stok ?? "-"}</td>
                  <td>{item.Minimum ?? 0}</td>
                  <td></td>
                </tr>
              )) ?? <tr>Produk Tidak tersedia</tr>}
            </tbody>
          </table>
        </div>
        <div className="bg-white mt-5 px-4 py-3">
          <p className="font-medium">Pemesanan Bahan Baku</p>
          <p className="text-sm text-slate-500">
            Pilihlah bahan yang ingin di pesan
          </p>
          <form action="" className="mt-10">
            <div className="grid grid-cols-2 mb-3">
              <p className="text-xl font-medium">Pilih Supplier</p>
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Pilih supplier"
                  id="pilihsupplier"
                  name="pilihsupplier"
                  required
                  className="px-4 py-2 bg-slate-200 rounded-lg focus:outline-none w-full"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 mb-3">
              <p className="text-xl font-medium">Pilih Bahan</p>
              <div>
                <input
                  type="text"
                  placeholder="Pilih Bahan"
                  id="pilihbahan"
                  name="pilihbahan"
                  required
                  className="px-4 py-2 bg-slate-200 rounded-lg focus:outline-none w-full"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 mb-3">
              <p className="text-xl font-medium">Jumlah Pesanan</p>
              <div>
                <input
                  type="text"
                  placeholder="Masukkan Jumlah"
                  id="jumlahpesanan"
                  name="jumlahpesanan"
                  required
                  className="px-4 py-2 bg-slate-200 rounded-lg focus:outline-none w-full"
                />
              </div>
            </div>
            <div className="flex justify-end py-5">
              <button className="bg-primary px-5 py-2 text-white rounded-lg">
                Pesan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DashboardSupplier;
