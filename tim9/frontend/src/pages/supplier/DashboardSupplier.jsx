import React from "react";

const DashboardSupplier = () => {
  return (
    <div className="px-20 py-5">
      <p>Supply Chain Management PT. ABC</p>
      <div className="grid grid-cols-2 gap-4 mt-10">
        <div className="bg-white flex ">
          <div className="bg-[#d4b98f] p-16 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="bi bi-person-fill w-10 h-10"
              viewBox="0 0 16 16"
            >
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            </svg>
          </div>
          <div>
            <p>Manufakuter</p>
            <p>2</p>
          </div>
        </div>
        <div className="bg-white flex ">
          <div className="bg-[#d4b98f] p-16 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="bi bi-person-fill w-10 h-10"
              viewBox="0 0 16 16"
            >
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            </svg>
          </div>
          <div>
            <p>Manufakuter</p>
            <p>2</p>
          </div>
        </div>
      </div>
      <div className="bg-white aspect-[4/1] mt-10 px-10 py-5">
        <p className="font-medium">Haloo</p>
        <div className="bg-[#ff9900] aspect-[4/1] px-10 flex flex-col items-start justify-center text-white">
            <p className="text-xl font-bold">Selamat Datang</p>
            <p>Silahkan Kelola Website ini dengan baik dan benar ya</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardSupplier;
