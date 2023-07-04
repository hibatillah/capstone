import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CartItem from "../../components/CartItem";
import Menu1 from "../../assets/img/menu1.png";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center py-14">
        <p className="text-4xl font-medium">Your cart items</p>
        <p className="text-[#56B280] textl-xl underline">Back to shopping</p>
      </div>
      <div className="px-16">
        <div className="grid grid-cols-5">
          <p className="ml-8">Prouduct</p>
          <p className="col-start-3">Price</p>
          <p>Quantity</p>
          <p>Total</p>
        </div>
        <div className="w-full h-px bg-slate-300 mt-5"></div>
      </div>
      <CartItem
        img={Menu1}
        product={"Menantappu Tea"}
        harga={"Rp.25.000"}
        total={"Rp.25.000"}
      />
      <div className="flex justify-end gap-8 px-16 py-4">
        <div className="">
          <p>Sub Total</p>
          <p>Tax and shipping cost will be calculated later</p>
        </div>
        <p className="">Rp.25.000</p>
        <Link to={"/payment"} className="bg-buttonSecondary px-10 py-2 rounded-lg text-white">
          Checkout
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
