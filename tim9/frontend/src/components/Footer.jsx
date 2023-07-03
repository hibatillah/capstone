import React from "react";
import Logo from "../assets/img/logo.png";
const footer = () => {
  return (
    <div className="px-10 py-12 bg-primary">
      <div className="w-full h-px bg-white mb-10"></div>
      <div className="grid grid-cols-5">
        <div className="col-span-2">
          <img src={Logo} alt="" className="justify-start" />
        </div>
        <div>
          <p className="text-[#00FF74] font-medium">Discovery</p>
          <ul className="mt-3 flex flex-col gap-3">
            <li className="text-white">New Season</li>
            <li className="text-white">Most Searched</li>
            <li className="text-white">Most Selled</li>
          </ul>
        </div>
        <div>
          <p className="text-[#00FF74] font-medium">About</p>
          <ul className="mt-3 flex flex-col gap-3">
            <li className="text-white">Help</li>
            <li className="text-white">Shipping</li>
            <li className="text-white">Affiliate</li>
          </ul>
        </div>
        <div>
          <p className="text-[#00FF74] font-medium">Info</p>
          <ul className="mt-3 flex flex-col gap-3">
            <li className="text-white">Contact Us</li>
            <li className="text-white">Privacy Policies</li>
            <li className="text-white">Term & Conditions</li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default footer;
