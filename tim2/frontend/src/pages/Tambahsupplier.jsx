import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const Tambahsupplier = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      nama: event.target.nama.value,
      nohp: event.target.nohp.value,
      stokbahan: event.target.stokbahan.value,
      status: event.target.status.value,
    };
    axios
      .post("http://127.0.0.1:5000/supplier/add", data)
      .then((res) => {
        console.log(res);
        event.target.reset();
        navigate("/supplier");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="px-10">
      <p className="font-medium py-3">Detail Supplier</p>
      <div className="flex justify-center mt-5">
        <form action="" className="bg-white rounded-lg w-[80%] px-10 py-5" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 items-center mt-3">
            <p>Nama Perusahaan</p>
            <input
              type="text"
              name="nama"
              id="nama"
              placeholder="Nama Perusahaan"
              className="w-full bg-transparent px-4 py-2 focus:outline-none"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 items-center mt-3">
            <p>No Hp</p>
            <input
              type="text"
              name="nohp"
              id="nohp"
              placeholder="Bahan Baku"
              className="w-full bg-transparent px-4 py-2 focus:outline-none"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 items-center mt-3">
            <p>Stock Bahan</p>
            <input
              type="text"
              name="stokbahan"
              id="stokbahan"
              placeholder="Stok Bahan"
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

export default Tambahsupplier;
