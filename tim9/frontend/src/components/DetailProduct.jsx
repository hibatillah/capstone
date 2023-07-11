import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const DetailProduct = ({ img, menu, harga, desc }) => {
  const [jumlah, setJumlah] = useState(1);
  return (
    <div className="grid grid-cols-2 place-items-center px-10 h-[calc(100vh-56px)] border-t-2">
      <div className="w-[450px] aspect-square overflow-hidden">
        <img src={img} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="">
        <p className="text-2xl font-bold">{menu}</p>
        <p className="text-emerald-500 text-2xl font-semibold">{harga}</p>
        <p className="text-xl mt-5">{desc}</p>
        <div className="flex mt-5 gap-4">
          <div className="border-2 px-4 py-3 rounded-lg fill-slate-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="bi bi-geo-alt w-5 h-5"
              viewBox="0 0 16 16"
            >
              <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
              <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
          </div>
          <div>
            <p className=" font-bold text-slate-500">Lokasi</p>
            <p className="text-slate-500 text-sm">Riau</p>
          </div>
        </div>
        <div className="flex mt-5 gap-4">
          <div className="border-2 px-4 py-3 rounded-lg fill-slate-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="bi bi-clock-fill w-5 h-5"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
            </svg>
          </div>
          <div>
            <p className=" font-bold text-slate-500">Estimasi Waktu Pengambilan</p>
            <p className="text-slate-500 text-sm">5 minutes</p>
          </div>
        </div>
        <div className="flex gap-4 justify-center mt-5">
          {/* Tombol Kurang */}
          <button
            onClick={() =>
              setJumlah((prev) => (prev === 0 ? prev - 0 : prev - 1))
            }
            className="border-2 px-2 py-1 rounded-lg"
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
          {/* Tombol Tambah */}
          <button
            onClick={() => setJumlah((prev) => prev + 1)}
            className="border-2 px-2 py-1 rounded-lg"
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
        <div className="flex w-full">
          <NavLink to={"/cart"} className="bg-emerald-500 px-12 py-2 flex gap-2 items-center justify-center mt-5 rounded-lg text-white stroke-white w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-cart3"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
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
            Add to cart
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
