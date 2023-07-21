import React from "react";
import Visa from "../assets/img/visa.png";
import Maestro from "../assets/img/maestro.png";
import American from "../assets/img/american-express.png";
import Amazon from "../assets/img/amazon.png";
import Paypal from "../assets/img/paypal.png";
import Apple from "../assets/img/apple-pay.png";
import { Link } from "react-router-dom";
const PaymentMethod = () => {
  return (
    <div className="border-l h-screen w-full px-3 py-2">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p>Nama</p>
          <div className="w-full border-2 rounded-lg px-1 mt-2">
            <input
              type="text "
              placeholder="Nama"
              className="px-3 py-2 w-full focus:outline-none"
            />
          </div>
        </div>
        <div>
          <p>No Hp</p>
          <div className="w-full border-2 rounded-lg px-1 mt-2">
            <input
              type="text "
              placeholder="No Hp"
              className="px-3 py-2 w-full focus:outline-none"
            />
          </div>
        </div>
      </div>
      <div className=" p-4 mt-4">
        <p className="text-lg font-medium mb-5">Pembayaran</p>
        <div className="flex justify-between">
          <label htmlFor="cod" className="">
            <input type="radio" name="pembayaran" id="cod" className="mr-4 w-4 h-4" />
            COD
            <p className="ml-7 text-sm text-slate-600">
              Pembayaran dengan ditempat
            </p>
          </label>
        </div>
        <div className="flex justify-between">
          <label htmlFor="Credit/Debit Kartu" className="">
            <input
              type="radio"
              name="pembayaran"
              id="Credit/Debit Kartu"
              className="mr-4 w-4 h-4"
            />
            Credit/Debit Kartu
            <p className="ml-7 text-sm text-slate-600">
              Membayar dengan kredit/debit kamu
            </p>
          </label>
          <div className="flex gap-2">
            <div className="w-6 h-6">
              <img src={Visa} alt="" className="w-full h-full" />
            </div>
            <div className="w-6 h-6">
              <img src={American} alt="" className="w-full h-full" />
            </div>
            <div className="w-6 h-6">
              <img src={Maestro} alt="" className="w-full h-full" />
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <label htmlFor="Bank" className="">
            <input
              type="radio"
              name="pembayaran"
              id="Bank"
              className="mr-4 w-4 h-4"
            />
            Bank
            <p className="ml-7 text-sm text-slate-600">
              Membayar dengan bank pilihan kamu
            </p>
          </label>
        </div>
        <div className="flex justify-between">
          <label htmlFor="E-wallet" className="">
            <input
              type="radio"
              name="pembayaran"
              id="E-wallet"
              className="mr-4 w-4 h-4"
            />
            E-wallet
            <p className="ml-7 text-sm text-slate-600">
              Membayar dengan mudah melalui uang online
            </p>
          </label>
          <div className="flex gap-2">
            <div className="w-6 h-6">
              <img src={Paypal} alt="" className="w-full h-full" />
            </div>
            <div className="w-6 h-6">
              <img src={Amazon} alt="" className="w-full h-full" />
            </div>
            <div className="w-6 h-6">
              <img src={Apple} alt="" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between p-4">
        <button className="border border-emerald-400 px-6 py-2 rounded-lg">Kembali</button>
        <Link className="bg-emerald-800 px-6 py-2 text-white rounded-lg" to={'/berhasil'}>Konfrimasi</Link>
      </div>
    </div>
  );
};

export default PaymentMethod;
