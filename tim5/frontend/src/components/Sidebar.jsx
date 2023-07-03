import * as React from "react";
import { NavLink } from "react-router-dom";
import { logo } from "../assets/img";
import { Square, Order, Stock, User } from "./Icon";

const Sidebar = ({ activeUser }) => {
  const menu = {
    admin: [
      ["Dashboard", "/"],
      ["Stock", "/stock"],
      ["Supplier", "/supplier"],
      ["Order", "/order"],
    ],
    supplier: [
      ["Dashboard", "/"],
      ["Activity", "/activity"],
    ],
    stock: [
      ["Materials", "/materials"],
      ["Products", "/products"]
    ]
  };
  const [activeMenu, setActiveMenu] = React.useState();

  return (
    <aside className="flex-none px-8 py-5 flex flex-col gap-16 bg-white">
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
                    case 'Dashboard':
                      return <Square />
                    case 'Stock':
                      return <Stock />
                    case 'Supplier':
                      return <User />
                    case 'Order':
                      return <Order />
                    default:
                      return null
                  }
                })() : (() => {
                  switch (page) {
                    case 'Dashboard':
                      return <Square />
                    case 'Activity':
                      return <User />
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
