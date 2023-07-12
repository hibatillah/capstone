import React from "react";
import { List } from "./Svg";
import Logo from "../assets/img/logo-usr.svg";
const HeaderSupplier = () => {
  return (
    <div className=" py-5 flex justify-between items-center px-4">
      <div>
        <p>Welcom Shiren!</p>
      </div>
      <div className="flex gap-3 items-center">
        <div>
          <p className="text-lg">Shiren</p>
          <p className="text-sm">Admin</p>
        </div>
        <img src={Logo} alt="" />
      </div>
    </div>
  );
};

export default HeaderSupplier;
