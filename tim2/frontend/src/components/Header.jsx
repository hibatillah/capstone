import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between px-5 py-2">
      <div>
        <p className="text-2xl text-[#280559] font-bold">Dashboard</p>
        <p className="text-sm  text-slate-600">
          View all status from the dashbaord
        </p>
      </div>
      <div className="flex gap-3 items-center">
        <div className="text-slate-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi bi-bell-fill w-8 h-8"
            viewBox="0 0 16 16"
          >
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
          </svg>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi bi-person w-8 h-8"
            viewBox="0 0 16 16"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
          </svg>
        </div>
        <div>
          <p className="text-lg text-[#280559] font-bold">Jairo Sánchez</p>
          <p className="text-sm  text-slate-600">Superadmin</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
