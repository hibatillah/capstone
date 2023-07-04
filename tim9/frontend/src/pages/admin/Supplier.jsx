import React from "react";
import { SupplierCard } from "../../components/Card";
import User from "../../assets/img/logo-usr.svg";

const Supplier = () => {
  return (
    <div className="px-7">
      <p className="text-xl text-darkblue py-2 font-bold">Data Supplier</p>
      <div className="flex justify-between gap-5 mt-5">
        <div className="bg-white w-44 rounded-lg flex gap-2 px-4 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
          <input
            type="text"
            name=""
            id=""
            placeholder="Search here"
            className="w-full h-full px-4"
          />
        </div>
        <button className="bg-[#d4b98f] w-32 rounded-lg flex gap-2 px-2 items-center text-white stroke-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-plus"
            viewBox="0 0 16 16"
          >
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
          Pemesanan
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4 py-5">
        <SupplierCard img={User} nama={"Dimitres Viga"} desc={"Teh"}/>
        <SupplierCard img={User} nama={"Dimitres Viga"} desc={"Teh"}/>
        <SupplierCard img={User} nama={"Dimitres Viga"} desc={"Teh"}/>
        <SupplierCard img={User} nama={"Dimitres Viga"} desc={"Teh"}/>
        <SupplierCard img={User} nama={"Dimitres Viga"} desc={"Teh"}/>
        <SupplierCard img={User} nama={"Dimitres Viga"} desc={"Teh"}/>
        <SupplierCard img={User} nama={"Dimitres Viga"} desc={"Teh"}/>
        <SupplierCard img={User} nama={"Dimitres Viga"} desc={"Teh"}/>
      </div>
    </div>
  );
};

export default Supplier;
