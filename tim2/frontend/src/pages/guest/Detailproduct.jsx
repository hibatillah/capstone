import React from "react";
import Anginangin from "../../assets/img/anginangin.png";
import { DetailProductCard } from "../../components/Card";

const Detailproduct = () => {
  return (
    <div className="bg-white py-24 px-10">
      <p className="text-2xl font-bold px-28">Angin Angin Minimalis</p>
      <DetailProductCard img={Anginangin} desc={"Id donec ultrices tincidunt arcu non. Integer enim neque volutpat ac tincidunt vitae semper quis. Arcu dui vivamus arcu felis bibendum ut tristique et. Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Donec ultrices tincidunt arcu non sodales neque sodales ut etiam. "} stock={50}/>
    </div>
  );
};

export default Detailproduct;
