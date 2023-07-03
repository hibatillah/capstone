import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import DetailProduct from '../../components/DetailProduct'
import Foto from "../../assets/img/menu1.png";
const Product = () => {
  return (
    <div>
        <Header />
        <DetailProduct img={Foto} menu={"Menantappu Tea"} harga={"Rp. 25000"} desc={"Isinya teh dengan cheese foam dan ada potongan buahnya (leci/jeruk). Untuk rasa tehnya manis seger"} />
        <Footer />
    </div>
  )
}

export default Product