import React from "react";
import hero from "../../assets/img/hero.png";
import productProcess from "../../assets/img/product-process.png";
import location from "../../assets/img/location.png";

const Home = () => {
  return (
    <main>
      <section className="w-full h-[calc(100vh-75px)] grid grid-cols-2">
        <div className="flex flex-col justify-center items-center">
          <div className="w-4/5 space-y-5">
            <h2>Eat Smart, Live Well</h2>
            <h1 className="text-6xl text-primary font-bold">
              Chewy Noodles Without Preservatives
            </h1>
            <p>
              Tenaga Muda Noodles Company is a company engaged in the production
              and sale of various types of noodles that have been going on since
              1970 until now, located at Jalan Melur, No. 72, Sukajadi District,
              Cempaka road junction, Pekanbaru. open from 03.00 - 18.00 WIB
              every day.
            </p>
            <div className="btn btn-primary w-fit">Sign Up for Free</div>
          </div>
        </div>
        <div className="grid place-items-center">
          <img src={hero} alt="hero" className="w-4/5 h-auto" />
        </div>
      </section>
      <section className="mt-20 py-16">
        <img src={productProcess} alt="" />
      </section>
      <footer className="p-10 bg-primary-100 grid grid-cols-3">
        <div className="col-span-2 space-y-2 text-primary">
          <h1 className="text-primary text-3xl mb-5">Contact Us</h1>
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            <span className="font-medium text-lg">
              Jl. Melur No. 72, Kedungsari, Kec. Sukajadi, Kota Pekanbaru, Riau
              28123
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            <span className="font-medium text-lg">(0761) 21488</span>
          </div>
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="font-medium text-lg">03.00 - 18.00 WIB</span>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden">
          <img
            src={location}
            alt="location"
            className="w-full h-60 object-cover"
          />
        </div>
      </footer>
    </main>
  );
};

export default Home;
