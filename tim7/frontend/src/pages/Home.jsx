import React from "react";
import Foto from "../assets/img/image2.png";
const Home = () => {
  return (
    <div className="px-10 py-8">
      <div className="grid grid-cols-2 place-items-center ">
        <div className="bg-[#d4d6e1] flex flex-col items-center w-72 h-fit">
          <div className="w-1/2">
            <img src={Foto} alt="" />
            <p className="text-center">Roti Coklat</p>
            <p className="text-center">Rp.6000</p>
          </div>
          <div className="flex justify-between gap-5 mt-5">
            <p>Stock:320</p>
            <button className="bg-blue-500 px-6 rounded-lg">Buy</button>
            <p>Terjual 2,4rb</p>
          </div>
        </div>
        <div className="bg-[#d4d6e1] flex flex-col items-center w-72 h-fit">
          <div className="w-1/2">
            <img src={Foto} alt="" />
            <p className="text-center">Roti Coklat</p>
            <p className="text-center">Rp.6000</p>
          </div>
          <div className="flex justify-between gap-5 mt-5">
            <p>Stock:320</p>
            <button className="bg-blue-500 px-6 rounded-lg">Buy</button>
            <p>Terjual 2,4rb</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
