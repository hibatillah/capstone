import React from "react";
import { CardScore } from "../components/Card";
import Icon1 from "../assets/img/Icon.png";

const DashboardSupplier = () => {
  const data = [];
  return (
    <div className="px-10 py-7">
      <div className="grid grid-cols-4 gap-5 py-4">
        <CardScore img={Icon1} judul={"172+"} desc={"Favorite Service"} />
        <CardScore img={Icon1} judul={"172+"} desc={"Favorite Service"} />
        <CardScore img={Icon1} judul={"172+"} desc={"Favorite Service"} />
        <CardScore img={Icon1} judul={"172+"} desc={"Favorite Service"} />
      </div>
      <p className="">Task Preview</p>
      <div className="bg-white min-h-[300px] px-10 py-8 mb-5">
        <p className="mb-5">To do</p>
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
        <p className="mb-5">Doing</p>
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
        <p className="mb-5">Done</p>
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
    </div>
  );
};

export default DashboardSupplier;
