import React from "react";

const DetailPesanan = ({ img }) => {
  return (
    <div className="bg-[#f2f2f2] h-screen px-10  mt-10">
      <div className="grid grid-cols-2 py-10 justify-center">
        <div className="bg-white w-32 aspect-square">
          <img src={img} alt="" className="object-contain" />
        </div>
        <div className="items-start">
          <p className="text-2xl font-bold">Menantea</p>
          <p className="text-emerald-500 font-bold">Rp.25.000</p>
        </div>
      </div>
      <hr />
      <div className="flex mt-5 gap-5 items-center pb-8">
        <div className="w-72">
          <input
            type="text"
            name=""
            id=""
            placeholder="Coupon Code"
            className="border-2 w-full px-5"
          />
        </div>
        <div className="w-40">
          <button className="bg-slate-300 w-full rounded-sm">Add Code</button>
        </div>
      </div>
      <hr />
      <div className="flex justify-between py-2">
        <p>Sub total</p>
        <p>Rp.25.000</p>
      </div>
      <div className="flex justify-between pb-2">
        <p>Shipping</p>
        <p>Free Shipping</p>
      </div>
      <hr />
      <div className="flex justify-between">
        <p>Total</p>
        <p className="text-2xl">Rp.25.000</p>
      </div>
    </div>
  );
};

export default DetailPesanan;
