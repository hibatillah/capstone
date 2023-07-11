import * as React from "react";
import { NavLink } from "react-router-dom";
import { logo } from "../assets/img";
import { Square, Order, Stock, User } from "./Icon";

const Sidebar = ({ activeUser }) => {
  const menu = {
    admin: [
      ["Beranda", "/"],
      ["Bahan Baku", "/materials"],
      ["Produk", "/products"],
      ["Pemasok", "/supplier"],
      ["Pesanan", "/order"],
    ],
    supplier: [
      ["Beranda", "/"],
      ["Aktivitas", "/activity"],
      ["Stok", "/stok"],
    ],
  };
  const [activeMenu, setActiveMenu] = React.useState();

  return (
    <aside className="flex-none h-screen px-8 py-5 flex flex-col gap-16 bg-white">
      <img src={logo} alt="logo" className="w-52" />
      <ul className="flex flex-col gap-2">
        {menu[activeUser].map(([page, path], i) => (
          <li key={i}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                isActive ? setActiveMenu(page) : null
              }
            >
              <div className={`px-4 py-2 rounded-md font-medium flex items-center gap-3 ${activeMenu === page? 'bg-primary-100 text-primary' : 'bg-inherit text-slate-500'}`}>
                {activeUser === "admin" ? (() => {
                  switch (page) {
                    case 'Beranda':
                      return <Square />
                    case 'Produk':
                      return <Stock />
                    case 'Bahan Baku':
                      return <Stock />
                    case 'Pemasok':
                      return <User />
                    case 'Pesanan':
                      return <Order />
                    default:
                      return null
                  }
                })() : (() => {
                  switch (page) {
                    case 'Beranda':
                      return <Square />
                    case 'Aktivitas':
                      return <User />
                      case 'Stok':
                      return <Stock />
                    default: 
                      return null
                  }
                })()}
                <span>{page}</span>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
