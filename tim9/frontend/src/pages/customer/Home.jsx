import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Foto from "../../assets/img/Foto1.png";
import { MenuCard, TestimoniCard } from "../../components/Card";
import Menu1 from "../../assets/img/menu1.png";
import Menu2 from "../../assets/img/menu2.png";
import Menu3 from "../../assets/img/menu3.png";
import FotoAbout from "../../assets/img/foto2.png";
import User1 from "../../assets/img/user1.png";
import User2 from "../../assets/img/user2.png";
import User3 from "../../assets/img/user3.png";
const Home = () => {
  return (
    <>
      <Header />
      {/* Hero */}
      <div className="bg-[#ebe2b4] px-14 ">
        <div className="bg-[#ebe2b4] flex flex-col items-center relative h-screen">
          <div className="flex flex-col items-center z-10 mt-24">
            <p className="text-[#00623B] text-7xl font-extrabold">Teh Buah</p>
            <p className="text-white text-7xl font-extrabold drop-shadow-lg">Paling Enak</p>
          </div>
          <img src={Foto} alt="" className="absolute z-0 top-48" />
        </div>
        {/* Menu */}
        <div className="h-screen">
          <div className="grid grid-cols-3 gap-7">
            <MenuCard
              img={Menu1}
              menu={"Mantappu Tea"}
              desc={
                "Isinya teh dengan cheese foam dan ada potongan buahnya (leci/jeruk). Untuk rasa tehnya manis seger"
              }
            />
            <MenuCard
              img={Menu2}
              menu={"MatemaTEAka"}
              desc={
                "Perpaduan teh sama buah-buahan. Seger si rasanya, buahnya ada apel, jeruk, sama biji markisa gitu."
              }
            />
            <MenuCard
              img={Menu3}
              menu={"InTEAgral"}
              desc={
                "Jenis teh yang digunakan beragam, mulai dari teh oolong hingga teh melati. "
              }
            />
          </div>
        </div>
        {/* About */}
        <div className="grid grid-cols-2 ">
          <div>
            <p className="text-4xl font-medium">About</p>
            <p className="text-4xl font-medium">Menantea</p>
            <p className="text-xl text-[#777776] mt-3">
              Terbuat dari buah yang segar dan teh pilihan
            </p>
            <div className="flex gap-2 items-center mt-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-check-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
              </svg>
              <p>
                Hyphoallergenic: 100% natural, tidak mengandung bahan pengawet
              </p>
            </div>
            <div className="flex gap-2 items-center mt-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-check-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
              </svg>
              <p>Handmade: Semua bahan di sediakan dengan penuh hati</p>
            </div>
            <button className="bg-button px-10 py-2 rounded-lg mt-8 text-white">
              Learn More
            </button>
          </div>
          <div className="w-[436px] h-[324px] overflow-hidden rounded-lg ml-36 mb-32">
            <img
              src={FotoAbout}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/* Testimonial */}
        </div>
        <div className="bg-[#dddeaf] px-14 pb-32 pt-12">
          <p className="text-center text-4xl font-medium">Testimonial</p>
          <p className="text-center text-xl text-[#5E6E89] mt-4 mb-14">
            Some quotes from our happy customers
          </p>
          <div className="grid grid-cols-3 gap-7">
            <TestimoniCard
              img={User1}
              coment={"“I love it! No more air fresheners”"}
              name={"Luisa"}
            />
            <TestimoniCard
              img={User2}
              coment={"“I love it! No more air fresheners”"}
              name={"Luisa"}
            />
            <TestimoniCard
              img={User3}
              coment={"“I love it! No more air fresheners”"}
              name={"Luisa"}
            />
          </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
