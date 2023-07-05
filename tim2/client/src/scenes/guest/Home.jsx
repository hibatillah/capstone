import React from "react";

const Home = () => {
  return (
    <div className="h-[calc(100vh-82px)] grid grid-cols-2">
      <div className="space-y-4 flex flex-col items-center justify-center">
        <div className="w-[70%] space-y-5">
          <h1 className="text-5xl text-gray-800 font-bold">
            Bersama Menuju konstruksi masa depan
          </h1>
          <p className="text-lg text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
            consequuntur possimus, quasi est dolorem minima quis molestiae
            suscipit aspernatur eos.
          </p>
        <div className="btn w-fit shadow-md bg-[#e68640] text-gray-800 font-semibold text-lg">
          Pelajari Selengkapnya
        </div>
        </div>
      </div>
      <div className="flex items-center justify-start">
      <img src="https://source.unsplash.com/random/architecture?" alt="" className="h-[90%] w-4/5" />
      </div>
    </div>
  );
};

export default Home;
