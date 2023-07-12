import React from "react";
import { Bahanbakucard } from "../components/Card";
import Telur from "../assets/img/telur.png";
const Stock = () => {
  const data = [];
  return (
    <div className="px-10 py-4">
      <p className="py-3 text-xl font-bold">Stock</p>
      <div className="grid grid-cols-4 gap-4">
        <Bahanbakucard img={Telur} nama={"Telur"} stock={"200 butir"} />
        <Bahanbakucard img={Telur} nama={"Telur"} stock={"200 butir"} />
        <Bahanbakucard img={Telur} nama={"Telur"} stock={"200 butir"} />
        <Bahanbakucard img={Telur} nama={"Telur"} stock={"200 butir"} />
        <Bahanbakucard img={Telur} nama={"Telur"} stock={"200 butir"} />
        <Bahanbakucard img={Telur} nama={"Telur"} stock={"200 butir"} />
        <Bahanbakucard img={Telur} nama={"Telur"} stock={"200 butir"} />
        <Bahanbakucard img={Telur} nama={"Telur"} stock={"200 butir"} />
      </div>
      <p className="py-5 font-bold">Task Preview</p>
      <div className="bg-white min-h-[300px] px-10 py-8 mb-5">
        <p className="mb-5 font-medium">To do</p>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th>Check Box</th>
              <th>Task Name</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Quantity</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr>
                <td>{item.checkbox ?? "-"}</td>
                <td>{item.taskname ?? "-"}</td>
                <td>{item.start ?? 0}</td>
                <td>{item.end ?? 0}</td>
                <td>{item.quantity ?? 0}</td>
                <td>{item.status ?? 0}</td>
                <td></td>
              </tr>
            )) ?? <tr>Produk Tidak tersedia</tr>}
          </tbody>
        </table>
      </div>
      <div className="bg-white min-h-[300px] px-10 py-8 mb-5">
        <p className="mb-5 font-medium">Doing</p>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th>Check Box</th>
              <th>Task Name</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Quantity</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr>
                <td>{item.checkbox ?? "-"}</td>
                <td>{item.taskname ?? "-"}</td>
                <td>{item.start ?? 0}</td>
                <td>{item.end ?? 0}</td>
                <td>{item.quantity ?? 0}</td>
                <td>{item.status ?? 0}</td>
                <td></td>
              </tr>
            )) ?? <tr>Produk Tidak tersedia</tr>}
          </tbody>
        </table>
      </div>
      <div className="bg-white min-h-[300px] px-10 py-8">
        <p className="mb-5 font-medium">Done</p>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th>Check Box</th>
              <th>Task Name</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Quantity</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr>
                <td>{item.checkbox ?? "-"}</td>
                <td>{item.taskname ?? "-"}</td>
                <td>{item.start ?? 0}</td>
                <td>{item.end ?? 0}</td>
                <td>{item.quantity ?? 0}</td>
                <td>{item.status ?? 0}</td>
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
  );
};

export default Stock;
