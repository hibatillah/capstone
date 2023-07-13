import React from "react";
import logo from "../../assets/img/logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  const menu = [
    ["Home", "/"],
    ["Product", "/product"],
    ["About", "/about"],
  ];

  return (
    <div className="flex justify-between items-center px-10 bg-white">
      <img src={logo} alt="logo" className="w-20" />
      <ul className="flex gap-12">
        {menu.map(([page, path], i) => (
          <li className="text-lg font-semibold">
            <NavLink
              to={path}
              className={({ isActive }) =>
                isActive ? "text-[#e68640]" : "text-gray-800"
              }
            >
              {page}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="flex gap-5">
        <div className="btn btn-secondary">Masuk</div>
        <div className="btn btn-primary">Daftar</div>
      </div>
    </div>
  );
};

export default Header;
