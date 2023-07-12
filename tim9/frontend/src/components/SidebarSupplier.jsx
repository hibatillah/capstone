import React from "react";
import { NavLink } from "react-router-dom";
import DashboardIcon from "../assets/img/darhboard.png";
const SidebarSupplier = () => {
  return (
    <div className="bg-[#a9752a] flex-none flex flex-col items-center w-[15%] h-screen px-5 py-20">
      <div className="flex gap-2 text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="bi bi-person-fill w-6 h-6"
          viewBox="0 0 16 16"
        >
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        </svg>
        <p>PT.ABC</p>
      </div>
      <div className="text-emerald-500 flex gap-1 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="bi bi-dot w-8 h-8"
          viewBox="0 0 16 16"
        >
          <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
        </svg>
        <p>Online</p>
      </div>
      <ul className="mt-10">
        <NavLink
          to={"/dashboard-suplier"}
          className={({ isActive }) =>
            isActive
              ? "text-green-500 stroke-green-500"
              : "text-white stroke-white"
          }
        >
          <li className="flex gap-2">
            <img src={DashboardIcon} alt="" className="w-6 h-6" />
            Dashboard
          </li>
        </NavLink>
        <NavLink
          to={"/bahanbaku"}
          className={({ isActive }) =>
            isActive
              ? "text-green-500 stroke-green-500"
              : "text-white stroke-white"
          }
        >
          <li className="flex  gap-2">
            <img src={DashboardIcon} alt="" className="w-6 h-6" />
            Bahan Baku
          </li>
        </NavLink>
        <NavLink
          to={"/order"}
          className={({ isActive }) =>
            isActive
              ? "text-green-500 stroke-green-500"
              : "text-white stroke-white"
          }
        >
          <li className="flex  gap-2">
            <img src={DashboardIcon} alt="" className="w-6 h-6" />
            Orderan
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default SidebarSupplier;
