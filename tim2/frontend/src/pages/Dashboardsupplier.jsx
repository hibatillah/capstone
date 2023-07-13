import React from "react";
import { ScoreCard } from "../components/Card";

const Dashboardsupplier = () => {
  return (
    <div className="px-10 py-2">
      <div className="grid grid-cols-5 gap-4">
        <ScoreCard bg={"bg-biru"} total={"653"} desc={"Penjualan"} />
        <ScoreCard bg={"bg-green"} total={"201"} desc={"Stok Produk"} />
        <ScoreCard
          bg={"bg-kuning"}
          total={"34"}
          desc={"Jumlah Distributor / Suppier"}
        />
        <ScoreCard bg={"bg-orange"} total={"123"} desc={"Jumlah Pesanan"} />
        <ScoreCard bg={"bg-dongker"} total={"Rp 25 Jt"} desc={"Pendapatan"} />
      </div>
      <div className="grid grid-cols-4 mt-5 gap-4">
        <div className="bg-white w-full rounded-lg min-h-[250px] p-5">
          <p>Lorem Ipsum</p>
        </div>
        <div className="bg-white w-full rounded-lg min-h-[250px] p-5">
          <p>Lorem Ipsum</p>
        </div>
        <div className="bg-white w-full rounded-lg min-h-[250px] p-5">
          <p>Lorem Ipsum</p>
        </div>
        <div className="bg-white w-full rounded-lg min-h-[250px] p-5">
          <p>Lorem Ipsum</p>
        </div>
      </div>
      <div className="grid grid-cols-3 mt-5 gap-5">
        <div className="bg-white w-full rounded-lg min-h-[250px] p-5">
          <p>Lorem Ipsum</p>
        </div>
        <div className="bg-white w-full rounded-lg min-h-[250px] p-5 col-span-2">
          <p>Lorem Ipsum</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboardsupplier;
