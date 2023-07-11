import React, { useState } from "react";
import Note from "../../assets/img/notes.png";
import Miepangsit from "../../assets/img/mie-pangsit.png";

const GuestOrder = () => {
  const [jumlah, setJumlah] = useState(1);

  return (
    <div className="grid grid-cols-2 gap-3 px-20 py-10">
      {/* kiri */}
      <div className="border-l border-r border-b shadow-lg px-5 py-3 rounded-lg">
        <p className="text-primary text-xl font-bold py-2">Order Type</p>
        <div className="border px-4  py-3">
          <div className="flex justify-between">
            <label htmlFor="ordertype" className="flex gap-2 font-medium">
              <input type="radio" name="ordertype" id="ordertype" />
              Delivery
            </label>
            <p className="font-medium">3000</p>
          </div>
          <hr className="px-3" />
          <div className="flex justify-between">
            <label htmlFor="ordertype" className="flex gap-2 font-medium">
              <input type="radio" name="ordertype" id="ordertype" />
              Pick Up
            </label>
            <p className="font-medium">3000</p>
          </div>
        </div>
        <p className="text-sm my-2">Detail Delivery Location:</p>
        <p className="font-medium text-lg">
          Kost Putri Cantik, Gg. Permata Sari No.1, Jl. Umban Sari, Rumbai,
          Pekanbaru
        </p>
      </div>
      {/* Kanan */}
      <div className="border-l border-r border-b shadow-lg px-5 py-3 rounded-lg">
        <p className="text-primary text-xl font-bold py-2">Payment Method</p>
        <div className="border px-4  py-3">
          <div className="flex">
            <label htmlFor="" className="flex gap-2 font-medium">
              <input type="radio" name="ordertype" id="ordertype" />
              Cash
            </label>
          </div>
          <hr className="px-3" />
          <div className="flex">
            <label htmlFor="" className="flex gap-2 font-medium">
              <input type="radio" name="ordertype" id="ordertype" />
              Transfer
            </label>
          </div>
        </div>
        <p className="text-sm my-2">Noted:</p>
        <p className="font-medium text-lg">Cash On Delivery or Cash At Shop</p>
      </div>
      {/* Kiri */}
      <div className="border-l border-r border-b shadow-lg px-5 py-3 rounded-lg">
        <p className="text-primary text-xl font-bold py-2">Your Order</p>
        <div className="px-4  py-3">
          <div className="flex justify-between">
            <div className="flex flex-col gap-3">
              <p className="font-semibold">Mie Pangsit</p>
              <p className="text-slate-400">13000</p>
              <div className="flex gap-2 items-center">
                <div className="w-4 h-4 overflow-hidden">
                  <img
                    src={Note}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-green-700">Notes</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img
                  src={Miepangsit}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex gap-3 mt-3">
                <button
                  onClick={() =>
                    setJumlah((prev) => (prev === 0 ? prev - 0 : prev - 1))
                  }
                  className="border rounded-full w-6 h-6 flex items-center justify-center border-primary-300 stroke-primary-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-dash"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                  </svg>
                </button>
                <p>{jumlah}</p>
                <button
                  onClick={() => setJumlah((prev) => prev + 1)}
                  className="border rounded-full w-6 h-6 flex items-center justify-center border-primary-300 stroke-primary-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-plus"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <hr />
          <div className="border flex justify-between px-3 py-2">
            <div>
              <p className="font-medium">Anything else ?</p>
              <p className="text-sm text-slate-400">Let's add another order</p>
            </div>
            <button className="flex items-center gap-3 border border-primary-300 px-6 rounded-full">
              <div className="bg-primary stroke-white rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-plus"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
              </div>
              Add
            </button>
          </div>
        </div>
      </div>
      {/* Kanan */}
      <div className="border-l border-r border-b shadow-lg px-5 py-3 rounded-lg">
        <p className="text-primary text-xl font-bold py-2">Payment Summary</p>
        <div className="px-4  py-3">
          <div className="flex justify-between">
            <div className="flex flex-col gap-3">
              <p className="text-slate-400">Price</p>
              <p className="text-slate-400">Delivery Fee</p>
              <p className="text-slate-400">Service and other fees</p>
            </div>
            <div className="flex flex-col items-end gap-3">
              <p className="text-slate-400">13000</p>
              <p className="text-slate-400">3000</p>
              <p className="text-slate-400">1000</p>
            </div>
          </div>
          <hr />
          <div className="flex justify-between">
            <p className="font-bold text-xl">Total Payment</p>
            <p className="font-bold text-xl">17000</p>

          </div>
        </div>
      </div>
      <div className="col-start-2 col-span-1 flex justify-end">
        <div className="px-4 py-2 rounded-lg bg-secondary text-white  font-medium w-fit">Buat Pesanan</div>
      </div>
    </div>
  );
};

export default GuestOrder;
