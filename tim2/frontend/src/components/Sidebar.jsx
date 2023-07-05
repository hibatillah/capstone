import * as React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { Square, Box, Bahan, Logout } from "./Icons";

const Sidebar = ({ user }) => {
  const menu = {
    admin: [
      ["Dashboard", "/"],
      ["Material", "/material"],
    ],
    supplier: [
      ["Dashboard", "/"],
      ["Material", "/material"],
    ],
  };

  const [activeMenu, setActiveMenu] = React.useState();

  return (
    <aside className="flex-none flex flex-col gap-10 items-center">
      <img src={logo} alt="logo" className="w-20" />
      <ul className="flex flex-col gap-4">
        {menu[user].map(([page, path], index) => (
          <li key={index}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                isActive ? setActiveMenu(page) : null
              }
            >
              <div
                className={`px-4 py-2 rounded-md ${
                  activeMenu === page
                    ? "bg-white text-black"
                    : "bg-inherit text-white active:text-white"
                }`}
              >
                {(() => {
                  switch (page) {
                    case "Dashboard":
                      return <Square />;
                    case "Product":
                      return <Box />;
                    case "Material":
                      return <Bahan />;
                    default:
                      return null;
                  }
                })()}
                {page}
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="mt-auto px-4 py-2 rounded-md bg-inherit text-white active:text-white">
        <Logout /> Logout
      </div>
    </aside>
  );
};

export default Sidebar;
