import React from "react";
import { formatCurrency } from "../../components/format";
import { telur, tepung, bumbu } from "../../assets/img";

const Materials = ({ handleModal }) => {
  const data = [];
  const imgItem = {
    Flour: tepung,
    Egg: telur,
    Bumbu: bumbu,
  }

  return (
    <main className="flex flex-col">
      <h1>Materials</h1>
      <div className="mt-5 card">
        <div className="flex justify-between">
          <h2>All Materials</h2>
          <div className="flex gap-4">
            <div onClick={() => handleModal('request material')} className="btn btn-primary">Request Stock</div>
            <div onClick={() => handleModal('add material')} className="btn btn-primary">Add Material</div>
          </div>
        </div>
        <table className="mt-5">
          <thead>
            <tr>
              <th>Material</th>
              <th>Price (Rp)</th>
              <th>Minimum Stock</th>
              <th>In Stock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i}>
                <td>
                  <img src={imgItem[item.name]} alt={item.name} />
                  <span className="ml-4">{item.name}</span>
                </td>
                <td>{formatCurrency(item.price) ?? "-"}</td>
                <td>{item.minimum ?? "-"}</td>
                <td className="flex flex-col gap-1">
                  {item.instock ?? 0}
                  {item.instock <= item.minimum ? (
                    <span className="text-red-500">Stock at minimum level</span>
                  ) : null}
                </td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Materials;
