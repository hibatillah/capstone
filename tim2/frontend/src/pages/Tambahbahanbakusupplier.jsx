import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const Tambahbahanbakusupplier = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      kodeproduk: event.target.kodeproduk.value,
      nama: event.target.nama.value,
      harga: event.target.harga.value,
      stok: event.target.stok.value,
      status: event.target.status.value,
    };
    axios
      .post("http://127.0.0.1:5000/bahansupplier/add", data)
      .then((res) => {
        console.log(res);
        event.target.reset();
        navigate("/bahanbakusupplier");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="px-10">
      <p className="font-medium py-3">Tambah Bahan Baku</p>
      <div className="flex justify-center mt-5">
        <form action="" className="bg-white rounded-lg w-[80%] px-10 py-5" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 items-center mt-3">
            <p>Kode Produk</p>
            <input
              type="text"
              name="kodeproduk"
              id="kodeproduk"
              placeholder="Kode Produk"
              className="w-full bg-transparent px-4 py-2 focus:outline-none"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 items-center mt-3">
            <p>Nama Bahan Baku</p>
            <input
              type="text"
              name="nama"
              id="nama"
              placeholder="Nama Bahan baku"
              className="w-full bg-transparent px-4 py-2 focus:outline-none"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 items-center mt-3">
            <p>Stok</p>
            <input
              type="text"
              name="stok"
              id="stok"
              placeholder="Stok"
              className="w-full bg-transparent px-4 py-2 focus:outline-none"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 items-center mt-3">
            <p>Harga Satuan</p>
            <input
              type="text"
              name="harga"
              id="harga"
              placeholder="Harga Satuan"
              className="w-full bg-transparent px-4 py-2 focus:outline-none"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 items-center mt-3">
            <p>Status</p>
            <input
              type="text"
              name="status"
              id="status"
              placeholder="Status"
              className="w-full bg-transparent px-4 py-2 focus:outline-none"
            />
          </div>
          <div className="flex justify-end">
            <button
              className="px-4 py-2 text-white bg-[#280559] rounded-lg"
              type="submit"
            >
              Selesai
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Tambahbahanbakusupplier;
