import React from "react";
import Header from "../../components/Header";
import Menu1 from "../../assets/img/menu1.png";
const History = () => {
  return (
    <div>
      <Header />
      <div className="bg-[#ebe2b4] h-screen px-5 py-3">
        <div className="px-3 py-2 border rounded-lg w-80 bg-white">
          <p>Order #P002</p>
          <p>05 Feb 2023, 08:28 PM</p>
          <div className="grid grid-cols-3">
            <div className="w-20 h-24">
              <img src={Menu1} alt="" className="w-full h-full" />
            </div>
            <div className="col-span-2">
              <p>Menanappu Tea</p>
              <div className="flex justify-between">
                <p>Rp. 25000</p>
                <p>Qty: 1</p>
              </div>
              <div className="flex gap-3 justify-end mt-3">
                <div className="border px-1 py-1 border-red-300 fill-red-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="bi bi-x-lg w-6 h-6"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                  </svg>
                </div>
                <div className="border p-1 border-emerald-300 fill-emerald-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="bi bi-check2 w-6 h-6"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
