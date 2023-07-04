import React from "react";
import PaymentMethod from "../../components/PaymentMethod";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DetailPesanan from "../../components/DetailPesanan";
import Menu1 from "../../assets/img/menu1.png"
const Payment = () => {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-2 px-10">
        <div className="overflow-y-scroll px-10" id="payment">
          <PaymentMethod />
        </div>
        <div className="h-screen">
          <DetailPesanan img={Menu1} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Payment;
