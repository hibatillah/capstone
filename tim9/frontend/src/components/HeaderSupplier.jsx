import React from "react";
import { List } from "./Svg";

const HeaderSupplier = () => {
  return (
    <div className="bg-[#d4b98f] py-5 flex justify-between items-center px-4">
      <div>
        <List />
      </div>
      <div className="flex gap-3 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="bi bi-person-fill w-6 h-6"
          viewBox="0 0 16 16"
        >
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        </svg>
        <p>Pt.ABC</p>
      </div>
    </div>
  );
};

export default HeaderSupplier;
