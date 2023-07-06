import React from "react";
import { ProductCard } from "../../components/Card";
import Batakosemen from "../../assets/batakosemen.png";
import Batakocangkang from '../../assets/batakocangkang.png'
import Anginangin from '../../assets/anginangin.png'
import Pavingblock from '../../assets/pavingblock.png'
import Polongan from '../../assets/polongan.png'
import Tiangsandi from '../../assets/tiangsandi.png'
const Product = () => {
  return (
    <div className="px-14 bg-white">
      <div className=" bg-slate-600 h-52 rounded-xl overflow-hidden">
        <img
          src="https://source.unsplash.com/random/architecture?"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="grid grid-cols-3 gap-8 py-10">
        {/* 1 */}
        <ProductCard nama={"Batako Semen"} img={Batakosemen} stock={"Stok Produk: N/A"} />
        <ProductCard nama={"Batako cangkang"} img={Batakocangkang} stock={"Stok Produk: N/A"} />
        <ProductCard nama={"Angin-Angin Minimalis"} img={Anginangin} stock={"Stok Produk: N/A"} />
        <ProductCard nama={"Paving Block"} img={Pavingblock} stock={"Stok Produk: N/A"} />
        <ProductCard nama={"Polongan"} img={Polongan} stock={"Stok Produk: N/A"} />
        <ProductCard nama={"Tiang Sandi"} img={Tiangsandi} stock={"Stok Produk: N/A"} />
      </div>
    </div>
  );
};

export default Product;
