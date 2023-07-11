import React, { useState } from "react";

const DetailPesanan = ({ img, menu }) => {
  const [jumlah, setJumlah] = useState(1);
  return (
    <div className="h-screen px-10  mt-10">
      <p>Riwayat Pesanan</p>
      <div className="flex py-10 justify-between">
        <div className="flex gap-2 items-center">
          <div className="bg-white w-32 aspect-square">
            <img src={img} alt="" className="object-contain" />
          </div>
          <div>
            <p className="text-xl">{menu}</p>
            <div className="flex gap-4 mt-5 items-center">
              {/* Tombol Kurang */}
              <button
                onClick={() =>
                  setJumlah((prev) => (prev === 0 ? prev - 0 : prev - 1))
                }
                className=" bg-slate-200 px-2 py-2 rounded-lg"
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
                className="bg-slate-200 px-2 py-2 rounded-lg"
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
        <div className="flex flex-col justify-center">
          <p className="pb-3">Rp.25.000</p>
          <div className="flex justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-trash"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
            </svg>

          </div>
        </div>
      </div>
      <hr />
      <div className="flex justify-between py-2">
        <p>Sub total</p>
        <p>Rp.25.000</p>
      </div>
      <hr />
      <div className="flex justify-between mt-3">
        <p>Total</p>
        <p className="text-lg font-medium">Rp.25.000</p>
      </div>
    </div>
  );
};

export default DetailPesanan;
