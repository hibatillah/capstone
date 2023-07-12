import React from "react";
import { CardInfo } from "../../components/Card";
import Vector1 from "../../assets/img/Vector1.png";
import Vector2 from "../../assets/img/Vector2.png";
import Vector3 from "../../assets/img/Vector3.png";
import Vector4 from "../../assets/img/Vector4.png";
const Dashboard = () => {
  const data = [];
  return (
    <div className="px-7">
      <p className="py-4 text-3xl font-bold text-darkblue text-center">Dashboard</p>
      <div className="min-h-[300px] px-7 bg-white rounded-lg">
        <p className="py-4 text-xl font-bold text-darkblue">Produk Favorite</p>
      </div>
      <div className="w-full min-h-[400px] mt-10 bg-white rounded-lg">
        <p className="p-4 py-4 text-xl font-bold text-darkblue">Pendapatan</p>
      </div>
      <div className="bg-white min-h-[200px] mt-10 px-7">
        <p className="py-4 text-xl font-bold text-darkblue">Riwayat Pemesanan</p>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th>Nama</th>
              <th>No Transaksi</th>
              <th>Nama produk</th>
              <th>Jumlah</th>
              <th>Total</th>
              <th>Tanggal</th>
              <th>Metode Pembayaran</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr>
                <td>{item.nama ?? "-"}</td>
                <td>{item.notransaksi ?? "-"}</td>
                <td>{item.namaproduk ?? 0}</td>
                <td>{item.jumlah ?? 0}</td>
                <td>{item.total ?? 0}</td>
                <td>{item.tanggal ?? 0}</td>
                <td>{item.metodepembayaran ?? 0}</td>
                <td></td>
              </tr>
            )) ?? <tr>Produk Tidak tersedia</tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
