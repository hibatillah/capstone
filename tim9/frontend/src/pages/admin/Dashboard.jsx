import React from "react";
import { CardInfo } from "../../components/Card";
import Vector1 from "../../assets/img/Vector1.png";
import Vector2 from "../../assets/img/Vector2.png";
import Vector3 from "../../assets/img/Vector3.png";
import Vector4 from "../../assets/img/Vector4.png";
const Dashboard = () => {
  const data =[]
  return (
    <div className="px-7">
      <div className="grid grid-cols-4 gap-4 py-5">
        <CardInfo img={Vector1} judul={"Total Sales"} desc={"$2,456"} />
        <CardInfo img={Vector2} judul={"Total Expenses"} desc={"$3,326"} />
        <CardInfo img={Vector3} judul={"Total Visitors"} desc={"5,325"} />
        <CardInfo img={Vector4} judul={"Total Orders"} desc={"1,326"} />
      </div>
      <div className="min-h-[300px] px-7 bg-white">
        <p className="py-4 text-xl font-bold text-darkblue">Performance</p>
      </div>
      <div className="grid grid-cols-2 mt-10 gap-4">
        <div className="w-full min-h-[400px] bg-white">
          <p className="p-4 py-4 text-xl font-bold text-darkblue">Calender</p>
        </div>
        <div className="w-full min-h-[400px] bg-white">
          <p className="p-4 py-4 text-xl font-bold text-darkblue">Finance</p>
        </div>
      </div>
      <div className="bg-white min-h-[200px] mt-10 px-7">
        <p className="py-4 text-xl font-bold text-darkblue">Customer</p>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Id</th>
              <th>Kategori</th>
              <th>Total</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr>
                <td>{item.nama ?? "-"}</td>
                <td>{item.id ?? "-"}</td>
                <td>{item.kategori ?? 0}</td>
                <td>{item.total ?? 0}</td>
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
