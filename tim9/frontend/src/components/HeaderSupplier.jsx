import React from "react";
import Logo from "../assets/img/logo-usr.svg";

const HeaderSupplier = ({ user }) => {
  return (
    <div className=" py-5 flex justify-between items-center px-4">
      <div>
        <p>Welcom {user.name}!</p>
      </div>
      <div className="flex gap-3 items-center">
        <div>
          <p className="text-lg">{user.name}</p>
          <p className="text-sm">{user.role}</p>
        </div>
        <img src={Logo} alt="" />
      </div>
    </div>
  );
};

export default HeaderSupplier;
