import * as React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { logo } from "../assets/img";
import { Square, Order, Stock, User, Logout } from "./Icon";

const Sidebar = ({ activeUser, handleLogin }) => {
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

  // logout handle 
  const navigate = useNavigate()
  const handleLogout = () => {
    handleLogin()
    navigate('/')    
  }

  return (
    <aside className="flex-none p-8 flex flex-col items-center gap-16 bg-white">
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
              <div
                className={`px-4 py-2 rounded-md font-medium flex items-center gap-3 ${
                  activeMenu === page
                    ? "bg-primary-100 text-primary"
                    : "bg-inherit text-slate-500 active:text-primary"
                }`}
              >
                {activeUser === "admin"
                  ? (() => {
                      switch (page) {
                        case "Dashboard":
                          return <Square />;
                        case "Stock":
                          return <Stock />;
                        case "Supplier":
                          return <User />;
                        case "Order":
                          return <Order />;
                        default:
                          return null;
                      }
                    })()
                  : (() => {
                      switch (page) {
                        case "Dashboard":
                          return <Square />;
                        case "Activity":
                          return <User />;
                        default:
                          return null;
                      }
                    })()}
                <span>{page}</span>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
      <div onClick={handleLogout} className="mt-auto px-4 py-2 rounded-md font-medium flex items-center gap-3 bg-inherit text-slate-500 active:text-primary cursor-pointer">
        <Logout />
        Log Out
      </div>
    </aside>
  );
};

export default Sidebar;
