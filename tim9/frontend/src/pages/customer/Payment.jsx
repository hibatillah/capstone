import React from "react";
import PaymentMethod from "../../components/PaymentMethod";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DetailPesanan from "../../components/DetailPesanan";
import Menu1 from "../../assets/img/menu1.png";
const Payment = () => {
  return (
    <div>
      <Header />
      <div className="flex gap-4 items-center px-10 py-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="bi bi-arrow-left w-6 h-6"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
          />
        </svg>
        <p className="text-xl font-bold">Menantea</p>
      </div>
      <div className="grid grid-cols-2 px-10">
        <div className="overflow-y-scroll px-10" id="payment">
          <DetailPesanan img={Menu1} menu={"Menantappu Tea"} />
        </div>
        <div className="h-screen">
          <PaymentMethod />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Payment;
