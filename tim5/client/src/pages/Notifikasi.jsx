import React from "react";
import { telur } from "../assets/img";

const CardNotif = ({ image, title, desc, tanggal }) => {
  return (
    <div className="w-full p-2 flex justify-between items-center">
      <div className="flex gap-6 items-center">
        <img src={image} alt="gambar notif" className="w-16 h-16" />
        <div className="">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm text-slate-500">{tanggal}</p>
        </div>
      </div>
      <p className="text-slate-500">{desc}</p>
      <div className="font-medium text-primary mr-4">selengkapnya</div>
    </div>
  );
};

const Notifikasi = () => {
  return (
    <div>
      <h1>Pemberitahuan</h1>
      <div className="card mt-5 h-[75vh]">
        <CardNotif 
          image={telur}
          title={'Toko Telur'}
          tanggal={'12/7/2023 16:45'}
          desc={'Stok telah berhasil ditambahkan'}
        />
      </div>
    </div>
  );
};

export default Notifikasi;
