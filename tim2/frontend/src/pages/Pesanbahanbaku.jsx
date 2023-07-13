import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const Pesanbahanbaku = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      nama: event.target.nama.value,
      jumlah: event.target.jumlah.value,
      status : "diproses"
    };
    axios
      .post("http://127.0.0.1:5000/pesanbahan/add", data)
      .then((res) => {
        console.log(res);
        event.target.reset();
        navigate("/bahanbaku");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="px-10">
      <p className="font-medium py-3">Detail Bahan Baku</p>
      <div className="flex justify-center mt-5">
        <form action="" className="bg-white rounded-lg w-[80%] px-10 py-5" onSubmit={handleSubmit}>
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
            <p>Jumlah</p>
            <input
              type="text"
              name="jumlah"
              id="jumlah"
              placeholder="Jumlah"
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

export default Pesanbahanbaku;
