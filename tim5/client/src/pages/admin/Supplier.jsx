import React from "react";

const Supplier = () => {
  const data = [];
  const imgItem = {};

  return (
    <main className="flex flex-col">
      <h1>Supplier List</h1>
      <div className="mt-5 card">
        <div className="flex justify-between">
          <h2>All Supplier</h2>
          <div className="btn btn-primary">Add Supplier</div>
        </div>
        <table className="mt-5">
          <thead>
            <tr>
              <th>Supplier</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, i) => (
              <tr key={i}>
                <td>
                  <img src={imgItem[item.name]} alt={item.name} />
                  <span className="ml-4">{item.name}</span>
                </td>
                <td>{item.address ?? "-"}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Supplier;
