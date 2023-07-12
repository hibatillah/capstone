import React from "react";
import { CardScore } from "../components/Card";
import Icon1 from "../assets/img/bagkuning.png";
import Icon2 from "../assets/img/backmerah.png";
import Icon3 from "../assets/img/bagbiru.png";
export const Dashboard = () => {
    const data = []
  return (
    <div className="px-10 py-7">
      <p>Dashboard</p>
      <div className="grid grid-cols-3 gap-4 py-5">
        <CardScore img={Icon1} desc={"$126.500"} judul={"Total Orders"} ket={"Up 34%"}/>
        <CardScore img={Icon2} desc={"$126.500"} judul={"Active Orders"} ket={"Up 34%"}/>
        <CardScore img={Icon3} desc={"$126.500"} judul={"Total Orders"} ket={"Up 34%"}/>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white min-h-[350px] col-span-2 px-3 py-4">
          <p>Data Penjualan</p>
        </div>
        <div className="bg-white min-h-[350px] px-3 py-4">
          <p>Order Status</p>
        </div>
      </div>
      <div className="bg-white min-h-[300px] mt-5 px-3 py-5">
        <p className="mb-5">Overview Pesanan</p>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Customer</th>
              <th>Jenis</th>
              <th>Kuantitas</th>
              <th>Tanggal Pengiriman</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr>
                <td>{item.no ?? "-"}</td>
                <td>{item.namacustomer ?? "-"}</td>
                <td>{item.jenis ?? 0}</td>
                <td>{item.kuantitas ?? 0}</td>
                <td>{item.tanggal ?? 0}</td>
              </tr>
            )) ?? <tr>Produk Tidak tersedia</tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
};
