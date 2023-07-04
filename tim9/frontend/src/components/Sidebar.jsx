import React from "react";
import DashboardIcon from '../assets/img/darhboard.png'
import Logo from '../assets/img/logo.png'
import { NavLink } from "react-router-dom";
const Sidebar = ({user}) => {
  const Menu = {
    admin: [
      ["Dashboard", "/dashboard"],
      ["Pesanan", "/pesanan"],
      ["Supplier", "/supplier"],
      ["Calender", "/calender"],
      ["Product", "/product"],
    ],
    supplier: [
      ["Dashboard", "/dashboard-supplier"],
      ["Bahan Baku", "/bahanbaku"],
      ["Permintaan", "/permintaan"],
    ],
  };
  return (
    <div className="bg-[#a9752a] flex-none flex flex-col items-center w-[15%] h-screen px-5 py-20">
      <img src={Logo} alt="" className="w-[100%]" />
      <ul className="flex flex-col gap-3 mt-20">
        {Menu[user].map(([name, path], i) => (
          <li key={i}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                isActive ? "text-hijau stroke-hijau" : "text-black stroke-black"
              }
            >
              <div className="flex gap-3 items-center text-white">
                {user === "admin"
                  ? (() => {
                      switch (name) {
                        case "Dashboard":
                          return <img src={DashboardIcon} alt="" className="w-5 h-5" />
                        case "Pesanan":
                          return <img src={DashboardIcon} alt="" className="w-5 h-5" />
                        case "Supplier":
                          return <img src={DashboardIcon} alt="" className="w-5 h-5" />
                        case "Calender":
                          return <img src={DashboardIcon} alt="" className="w-5 h-5" />
                        case "Product":
                          return <img src={DashboardIcon} alt="" className="w-5 h-5" />
                        default:
                          return null;
                      }
                    })()
                  : (() => {
                      switch (name) {
                        case "Dashboard":
                          return <img src={DashboardIcon} alt="" className="w-5 h-5" />
                        case "Bahan Baku":
                          return <img src={DashboardIcon} alt="" className="w-5 h-5" />
                        case "Permintaan":
                          return <img src={DashboardIcon} alt="" className="w-5 h-5" />
                      }
                    })()}
                <span>{name}</span>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
