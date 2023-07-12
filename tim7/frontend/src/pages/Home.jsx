import React from "react";
import Foto from "../assets/img/image2.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="px-10 py-8">
      <div className="grid grid-cols-2 place-items-center mt-20">
        <div className="bg-white flex flex-col items-center w-72 h-fit">
          <div className="w-1/2">
            <img src={Foto} alt="" />
            <p className="text-center">Roti Coklat</p>
            <p className="text-center">Rp.6000</p>
          </div>
          <div className="flex justify-between gap-5 mt-5">
            <p>Stock:320</p>
            <Link className="bg-primary px-6 rounded-lg text-white" to={"/pemesanan"}>Buy</Link>
            <p>Terjual 2,4rb</p>
          </div>
        </div>
        <div className="bg-white flex flex-col items-center w-72 h-fit">
          <div className="w-1/2">
            <img src={Foto} alt="" />
            <p className="text-center">Roti Coklat</p>
            <p className="text-center">Rp.6000</p>
          </div>
          <div className="flex justify-between gap-5 mt-5">
            <p>Stock:320</p>
            <Link className="bg-primary px-6 rounded-lg text-white ">Buy</Link>
            <p>Terjual 2,4rb</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
