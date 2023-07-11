import React from "react";
import { ProductCard } from "../../components/Card";
import Miepangsit from "../../assets/img/mie-pangsit.png";

const GuestProducts = () => {
  return (
    <main>
      <div className="bg-primary-100 w-[90%] py-12 mt-10 rounded-tr-[200px]">
        <p className="pl-44 my-10 text-primary font-bold text-4xl">
          Our Product
        </p>
        <div className="grid grid-cols-2 gap-10 pl-44 pr-32">
          {/* Kiri */}
          <div>
            <ProductCard
              img={Miepangsit}
              menu={"Mie Pangsit"}
              desc={"Mie Pangsit dengan rasa khas yang kenyal"}
              harga={"Rp.13.000"}
              stock={"28 Available stock"}
              link='/product/order'
            />
          </div>
          {/* Kanan */}
          <div>
            <ProductCard
              img={Miepangsit}
              menu={"Mie Pangsit"}
              desc={"Mie Pangsit dengan rasa khas yang kenyal"}
              harga={"Rp.13.000"}
              stock={"28 Available stock"}
              link='/product/order'
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default GuestProducts;
